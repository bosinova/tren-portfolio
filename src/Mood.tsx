import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { photos, getPhotoMoods, type Photo } from "./data/photos";

// ── QUESTION FLOW ───────────────────────────
// See mood-quiz-framework.md for the reasoning behind this set.
interface Answer {
  label: string;
  tags: string[];
}
interface Question {
  prompt: string;
  answers: Answer[];
}

const QUESTIONS: Question[] = [
  {
    prompt: "What's your energy right now?",
    answers: [
      { label: "Calm", tags: ["quiet", "reflective"] },
      { label: "Restless", tags: ["restless", "bold"] },
      { label: "Reflective", tags: ["reflective", "nostalgic"] },
      { label: "Bold", tags: ["bold", "restless"] },
    ],
  },
  {
    prompt: "Pick a light.",
    answers: [
      { label: "Golden hour", tags: ["warm", "reflective"] },
      { label: "Deep night", tags: ["nocturnal", "bold"] },
      { label: "Stark and clean", tags: ["stark", "bold"] },
      { label: "Soft and hazy", tags: ["dreamy", "quiet"] },
    ],
  },
  {
    prompt: "Where's your head at?",
    answers: [
      { label: "Somewhere far away", tags: ["faraway", "restless"] },
      { label: "Right where you are", tags: ["reflective", "warm"] },
      { label: "Somewhere that doesn't quite exist", tags: ["dreamy", "nocturnal"] },
    ],
  },
  {
    prompt: "What's pulling your eye lately?",
    answers: [
      { label: "Faces and quiet moments", tags: ["human", "reflective"] },
      { label: "Wide open places, far from home", tags: ["journey", "faraway"] },
      { label: "Lines, angles, buildings", tags: ["structural", "stark"] },
      { label: "Things that don't quite look real", tags: ["otherworldly", "dreamy"] },
    ],
  },
];

function pickMatch(tagBag: string[]): Photo {
  let best: Photo[] = [];
  let bestScore = -1;
  for (const photo of photos) {
    const photoTags = getPhotoMoods(photo);
    const score = tagBag.reduce((sum, tag) => sum + (photoTags.includes(tag) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      best = [photo];
    } else if (score === bestScore) {
      best.push(photo);
    }
  }
  return best[Math.floor(Math.random() * best.length)];
}

type Stage = "intro" | "quiz" | "result";

export default function Mood() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [tagBag, setTagBag] = useState<string[]>([]);
  const [match, setMatch] = useState<Photo | null>(null);
  const [feedback, setFeedback] = useState<"yes" | "again" | null>(null);
  const [shareStatus, setShareStatus] = useState<"idle" | "generating" | "ready" | "error">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startQuiz = () => {
    setStage("quiz");
    setStep(0);
    setTagBag([]);
  };

  const answer = (a: Answer) => {
    const nextBag = [...tagBag, ...a.tags];
    if (step + 1 < QUESTIONS.length) {
      setTagBag(nextBag);
      setStep(step + 1);
    } else {
      const result = pickMatch(nextBag);
      setTagBag(nextBag);
      setMatch(result);
      setFeedback(null);
      setShareStatus("idle");
      setStage("result");
    }
  };

  const tryAnother = () => {
    if (!match) return;
    const excluded = new Set([match.id]);
    let alt = pickMatch(tagBag);
    let attempts = 0;
    while (excluded.has(alt.id) && attempts < 10 && photos.length > 1) {
      alt = photos[Math.floor(Math.random() * photos.length)];
      attempts++;
    }
    setMatch(alt);
    setFeedback(null);
    setShareStatus("idle");
  };

  const restart = () => {
    setStage("intro");
    setStep(0);
    setTagBag([]);
    setMatch(null);
    setFeedback(null);
    setShareStatus("idle");
  };

  // Generates a watermarked version of the matched photo on a canvas,
  // pulling the image live from R2, then triggers a download.
  const generateShareImage = useCallback(async () => {
    if (!match) return;
    setShareStatus("generating");
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Image failed to load"));
        img.src = match.src;
      });

      const canvas = canvasRef.current;
      if (!canvas) throw new Error("Canvas not available");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context not available");

      ctx.drawImage(img, 0, 0);

      // Watermark: small text, bottom-right corner
      const fontSize = Math.max(18, Math.round(canvas.width * 0.018));
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      const margin = fontSize * 1.2;
      const text = "trenwalker.com/art";

      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillText(text, canvas.width - margin + 1, canvas.height - margin + 1);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fillText(text, canvas.width - margin, canvas.height - margin);

      const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${match.title.toLowerCase().replace(/\s+/g, "-")}-trenwalker.jpg`;
      link.click();

      setShareStatus("ready");
    } catch (err) {
      console.error("Watermark generation failed:", err);
      setShareStatus("error");
    }
  }, [match]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,700&family=Didact+Gothic&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mood-root {
          min-height: 100vh;
          background: #080810;
          color: #c8c8d4;
          font-family: 'Didact Gothic', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          text-align: center;
        }

        .mood-title {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          color: #f0f0f8;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
        }

        .mood-subtitle {
          font-size: 13px;
          letter-spacing: 0.1em;
          color: #9090a8;
          max-width: 420px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .mood-btn {
          background: none;
          border: 1px solid #444458;
          color: #e0e0ec;
          font-family: 'Didact Gothic', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 16px 32px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mood-btn:hover { border-color: #e0e0ec; background: #ffffff08; }

        .mood-question {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: #f0f0f8;
          margin-bottom: 36px;
          max-width: 560px;
        }

        .mood-answers {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 420px;
        }

        .mood-answer-btn {
          background: none;
          border: 1px solid #2a2a3a;
          color: #c8c8d4;
          font-family: 'Didact Gothic', sans-serif;
          font-size: 13px;
          letter-spacing: 0.03em;
          padding: 16px 20px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .mood-answer-btn:hover {
          border-color: #7070a0;
          background: #ffffff06;
          color: #f0f0f8;
        }

        .mood-progress {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #444458;
          margin-bottom: 24px;
        }

        .mood-result-img {
          max-width: min(88vw, 480px);
          max-height: 56vh;
          object-fit: contain;
          margin-bottom: 24px;
        }

        .mood-result-title {
          font-family: 'Bodoni Moda', serif;
          font-weight: 700;
          font-size: 1.6rem;
          color: #f0f0f8;
          margin-bottom: 8px;
        }

        .mood-result-loc {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #888899;
          margin-bottom: 32px;
        }

        .mood-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 20px;
        }

        .mood-feedback {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
        }

        .mood-feedback-btn {
          background: none;
          border: none;
          color: #6a6a88;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 6px 4px;
          border-bottom: 1px solid transparent;
          transition: color 0.25s ease;
        }
        .mood-feedback-btn:hover { color: #c8c8d4; }
        .mood-feedback-btn.active { color: #f0f0f8; border-bottom-color: #f0f0f8; }

        .mood-back {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #444458;
          text-decoration: none;
          margin-top: 12px;
          transition: color 0.3s ease;
        }
        .mood-back:hover { color: #9090b0; }

        .mood-status {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: #6a6a88;
          margin-top: -8px;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="mood-root">
        {stage === "intro" && (
          <>
            <div className="mood-title">Mood</div>
            <div className="mood-subtitle">
              Answer a few questions, find the photo that fits where you're at right now.
            </div>
            <button className="mood-btn" onClick={startQuiz}>Start</button>
          </>
        )}

        {stage === "quiz" && (
          <>
            <div className="mood-progress">{step + 1} / {QUESTIONS.length}</div>
            <div className="mood-question">{QUESTIONS[step].prompt}</div>
            <div className="mood-answers">
              {QUESTIONS[step].answers.map((a) => (
                <button
                  key={a.label}
                  className="mood-answer-btn"
                  onClick={() => answer(a)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </>
        )}

        {stage === "result" && match && (
          <>
            <img className="mood-result-img" src={match.src} alt={match.title} />
            <div className="mood-result-title">Your mood: {match.title}</div>
            <div className="mood-result-loc">{match.collection} &middot; {match.location}</div>

            <div className="mood-feedback">
              <button
                className={`mood-feedback-btn${feedback === "yes" ? " active" : ""}`}
                onClick={() => setFeedback("yes")}
              >
                Yes, this is it
              </button>
              <button
                className="mood-feedback-btn"
                onClick={tryAnother}
              >
                Show me another
              </button>
            </div>

            <div className="mood-actions">
              <button className="mood-btn" onClick={generateShareImage} disabled={shareStatus === "generating"}>
                {shareStatus === "generating" ? "Preparing..." : "Download to share"}
              </button>
              <button className="mood-btn" onClick={restart}>Start over</button>
            </div>

            {shareStatus === "error" && (
              <div className="mood-status">Couldn't prepare that image right now, try again in a moment.</div>
            )}

            <canvas ref={canvasRef} style={{ display: "none" }} />
          </>
        )}

        <a
          className="mood-back"
          href="/art"
          onClick={(e) => { e.preventDefault(); navigate("/art"); }}
        >
          See the full portfolio &rarr;
        </a>
      </div>
    </>
  );
}
