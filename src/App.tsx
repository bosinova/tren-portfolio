import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: string;
  launchUrl?: string;
  launchLabel?: string;
  sampleUrl?: string;
  sampleLabel?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const workSamples: WorkItem[] = [
  {
    id: "pp",
    icon: "🎯",
    title: "Power Positioning: Scenario-Based Learning",
    category: "Articulate Storyline 360",
    description: "AI-driven feedback logic with confidence-building scenarios and coaching recaps. Learner decisions drive branching paths and personalized responses.",
    tags: ["Storyline 360", "Scenarios", "AI Feedback", "UX"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Power%20Positioning/story.html",
    launchLabel: "Launch sample",
    sampleUrl: "https://docs.google.com/document/d/1AzYTUowcO12SaW_HKqEWHtaO_5o1OYpjCMUCETPuNEg/edit?usp=sharing",
    sampleLabel: "View sample responses",
  },
  {
    id: "skh",
    icon: "📦",
    title: "Support Knowledge Hub",
    category: "Articulate Storyline 360",
    description: "Guided performance support hub using interactive navigation, visited-state tracking, and conditional progression for frontline employees.",
    tags: ["Storyline 360", "Interaction Design", "UX"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Support%20Knowledge%20Hub/story.html",
    launchLabel: "Launch sample",
  },
  {
    id: "ffl",
    icon: "🎨",
    title: "Finding Focus in Learning",
    category: "Articulate Storyline 360",
    description: "Reflective learning experience using color-driven branching, progressive disclosure, and optional ambient audio to support focus and learner agency.",
    tags: ["Storyline 360", "Branching", "UX", "Visual Design"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Pantone%20Challenge/story.html",
    launchLabel: "Launch sample",
  },
  {
    id: "hsq",
    icon: "🏠",
    title: "Home Safety Quiz",
    category: "Articulate Storyline 360",
    description: "Focused assessment showcasing knowledge checks, decision-based questions, and clear visuals to reinforce safety awareness.",
    tags: ["Storyline 360", "Assessment Design", "Feedback"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Home%20Safety%20Quiz/story.html",
    launchLabel: "Launch sample",
  },
  {
    id: "gym",
    icon: "💪",
    title: "Gym Facts",
    category: "Articulate Storyline 360",
    description: "Game-based knowledge reinforcement demonstrating how engagement and feedback mechanics support learning retention in a competitive format.",
    tags: ["Storyline 360", "Gamification", "Engagement"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Gym%20Facts/story.html",
    launchLabel: "Launch sample",
  },
  {
    id: "tri",
    icon: "🎮",
    title: "Trivia Squares",
    category: "Articulate Storyline 360",
    description: "Interactive game-based experience transforming knowledge checks into a competitive board format with immediate feedback and visual progress cues.",
    tags: ["Storyline 360", "Game Mechanics", "Interaction Design"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Trivia%20Squares/story.html",
    launchLabel: "Launch sample",
  },
  {
    id: "cyber",
    icon: "🔒",
    title: "Cybersecurity Basics",
    category: "Vyond / Microlearning",
    description: "Concise animated explainer using clear visuals and plain-language scenarios to reinforce safe email behaviors and reduce real-world risk.",
    tags: ["Vyond", "Microlearning", "Visual Storytelling"],
    launchUrl: "https://storage.googleapis.com/portfolio-elearning-2024/Vyond%20Videos/Cybersecurity%20Basics%20%E2%80%93%20%E2%80%9CAvoiding%20Phishing%20Emails%E2%80%9D/Cybersecurity%20Basics%20%E2%80%93%20%E2%80%9CAvoiding%20Phishing%20Emails%E2%80%9D-720p-250911.mp4",
    launchLabel: "Launch sample",
  },
];

const aiTools: WorkItem[] = [
  {
    id: "ow",
    icon: "✏️",
    title: "Objective Writer",
    category: "AI-Powered Tool / Prism Learning Design",
    description: "A Bloom's Taxonomy-aligned learning objective generator. Enter your topic, audience, and level -- get polished, measurable objectives in seconds.",
    tags: ["Claude API", "React", "Clerk", "Supabase", "Vercel"],
    launchUrl: "https://objectivewriter.com",
    launchLabel: "Try the tool",
  },
  {
    id: "cog",
    icon: "📋",
    title: "Course Outline Generator",
    category: "AI-Powered Tool / Prism Learning Design",
    description: "Turns a topic, objectives, or a content dump into a full course structure with modules, lessons, durations, and activity suggestions.",
    tags: ["Claude API", "React", "Clerk", "Supabase", "Vercel"],
    launchUrl: "https://outline-generator-rho.vercel.app",
    launchLabel: "Try the tool",
  },
];

const skills = [
  "Articulate Storyline 360", "Rise 360", "Vyond", "Camtasia",
  "Adobe Creative Cloud", "React / Vite / TypeScript", "Claude API",
  "Clerk Auth", "Supabase / PostgreSQL", "Vercel + Serverless Functions",
  "SCORM / xAPI", "Workday LMS", "Instructional Design",
  "Bloom's Taxonomy", "Performance Consulting",
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "$1M+", label: "Training Cost Savings" },
  { value: "Gold", label: "Brandon Hall Award 2022" },
  { value: "2", label: "AI Tools Live" },
];

const mainTabs = [
  { id: "samples", label: "Work Samples" },
  { id: "tools", label: "AI-Powered Tools" },
  { id: "skills", label: "Skills & Tools" },
  { id: "about", label: "About Me" },
];

// ─── ContactForm ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mlgpazad", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </div>
      <div className="form-row">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project or opportunity..." rows={5} required />
      </div>
      {status === "success" && <p className="form-feedback success">Message sent! I'll be in touch soon.</p>}
      {status === "error" && <p className="form-feedback error">Something went wrong. Please try again or email me directly.</p>}
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

// ─── ProjectRow ───────────────────────────────────────────────────────────────

function ProjectRow({ item }: { item: WorkItem }) {
  return (
    <div className="project-row">
      <div className="project-icon">{item.icon}</div>
      <div className="project-main">
        <div className="project-top">
          <div>
            <div className="project-title">{item.title}</div>
            <div className="project-category">{item.category}</div>
          </div>
          <div className="project-links">
            {item.launchUrl && (
              <a
                href={item.launchUrl}
                target={item.launchUrl.startsWith("http") ? "_blank" : undefined}
                rel={item.launchUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="project-link"
              >
                {item.launchLabel ?? "Launch"} &#8599;
              </a>
            )}
            {item.sampleUrl && (
              <a
                href={item.sampleUrl}
                target={item.sampleUrl.startsWith("http") ? "_blank" : undefined}
                rel={item.sampleUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="project-link"
              >
                {item.sampleLabel ?? "View sample"} &#8599;
              </a>
            )}
          </div>
        </div>
        <p className="project-desc">{item.description}</p>
        <div className="project-chips">
          {item.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState("samples");

  function jumpToTabs(tab: string) {
    setActiveTab(tab);
    document.getElementById("main-tabs")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:         #0d0f14;
          --surface:    #13161e;
          --border:     #1e2330;
          --border-mid: #2a3045;
          --text:       #e8eaf0;
          --muted:      #7a8099;
          --accent:     #4f8ef7;
          --gold:       #F5A623;
          --radius:     10px;
          --font-head:  'Plus Jakarta Sans', sans-serif;
          --font-body:  'DM Sans', sans-serif;
          --max-w:      1100px;
          --nav-h:      64px;
        }

        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: var(--font-body); font-size: 16px; line-height: 1.65; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4 { font-family: var(--font-head); font-weight: 800; line-height: 1.15; }
        a { color: var(--accent); text-decoration: none; }
        a:hover { text-decoration: underline; }
        .container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

        nav {
          position: sticky; top: 0; z-index: 100;
          height: var(--nav-h);
          background: rgba(13,15,20,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center;
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
        .nav-logo { font-family: var(--font-head); font-size: 1.1rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; }
        .nav-logo span { color: var(--accent); }

        #hero {
          min-height: calc(100vh - var(--nav-h));
          display: flex; align-items: center; padding: 80px 0;
          position: relative; overflow: hidden;
        }
        #hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(79,142,247,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 70%, rgba(167,139,250,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero-grid {
          position: relative; display: grid;
          grid-template-columns: 1fr auto; gap: 60px; align-items: center; width: 100%;
        }
        .hero-content { position: relative; }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 20px;
        }
        .hero-eyebrow::before { content: ''; display: block; width: 24px; height: 2px; background: var(--accent); }
        h1.hero-name { font-size: clamp(2.8rem, 6vw, 5rem); letter-spacing: -0.03em; margin-bottom: 8px; }
        h1.hero-name span { color: var(--accent); }
        .hero-title { font-size: clamp(1.1rem, 2.5vw, 1.4rem); font-weight: 400; color: var(--muted); margin-bottom: 28px; font-family: var(--font-body); }
        .hero-bio { max-width: 560px; color: var(--muted); font-size: 1.05rem; margin-bottom: 40px; }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-photo-wrap {
          width: 280px; height: 280px; border-radius: 50%;
          overflow: hidden; border: 3px solid var(--border-mid);
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .hero-photo-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }

        .btn-primary {
          background: var(--accent); color: #fff; border: none;
          padding: 12px 26px; border-radius: var(--radius);
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;
          cursor: pointer; transition: background 0.2s, transform 0.15s; display: inline-block;
        }
        .btn-primary:hover { background: #3a7de8; transform: translateY(-1px); text-decoration: none; }
        .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .btn-secondary {
          background: var(--border-mid); color: var(--text); border: none;
          padding: 12px 26px; border-radius: var(--radius);
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;
          cursor: pointer; transition: background 0.2s, transform 0.15s; display: inline-block;
        }
        .btn-secondary:hover { background: #343a52; transform: translateY(-1px); text-decoration: none; }

        .stats-wrap { background: var(--surface); border-bottom: 1px solid var(--border); }
        .stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); border-left: 1px solid var(--border-mid); }
        .stat-cell { padding: 28px 24px; text-align: center; border-right: 1px solid var(--border-mid); }
        .stat-value { font-family: var(--font-head); font-size: 2.2rem; font-weight: 800; color: var(--gold); line-height: 1; margin-bottom: 8px; font-feature-settings: "tnum"; }
        .stat-label { font-size: 0.8rem; color: var(--muted); line-height: 1.4; }

        .main-tab-bar {
          background: var(--surface); border-bottom: 1px solid var(--border);
          position: sticky; top: var(--nav-h); z-index: 90; padding-top: 16px;
        }
        .main-tab-bar-inner {
          display: flex; flex-wrap: wrap; justify-content: center;
          max-width: var(--max-w); margin: 0 auto; padding: 0 24px; width: 100%;
        }
        .main-tab {
          background: none; border: none; border-bottom: 3px solid transparent;
          padding: 14px 28px; cursor: pointer; color: var(--muted);
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 500;
          transition: color 0.15s, border-color 0.15s; white-space: nowrap;
          margin-bottom: -1px; display: inline-flex; flex-direction: column; align-items: center;
        }
        .main-tab::after {
          content: attr(data-label); font-weight: 700; font-size: 0.95rem;
          height: 0; overflow: hidden; visibility: hidden;
          pointer-events: none; white-space: nowrap; display: block;
        }
        .main-tab:hover:not(.main-tab-on) { color: var(--text); }
        .main-tab-on { color: var(--text); font-weight: 700; border-bottom: 3px solid var(--accent); }

        .tab-content { padding: 56px 0; min-height: 480px; }

        .project-list { display: flex; flex-direction: column; }
        .project-row {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 24px 0; border-bottom: 1px solid var(--border);
        }
        .project-row:first-child { border-top: 1px solid var(--border); }
        .project-icon {
          font-size: 1.8rem; line-height: 1; width: 52px; height: 52px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius); display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .project-main { flex: 1; min-width: 0; }
        .project-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 8px; }
        .project-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 2px; }
        .project-category { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .project-links { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }
        .project-link { font-size: 0.82rem; font-weight: 600; color: var(--accent); white-space: nowrap; transition: color 0.15s; }
        .project-link:hover { color: #a5c8ff; text-decoration: none; }
        .project-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 10px; }
        .project-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .chip { font-size: 0.7rem; font-weight: 500; padding: 2px 9px; border-radius: 999px; background: var(--border); color: var(--muted); border: 1px solid var(--border-mid); }

        .bh-callout {
          border: 1px solid rgba(245,166,35,0.3); border-radius: 14px;
          background: linear-gradient(135deg, rgba(245,166,35,0.07) 0%, rgba(245,166,35,0.02) 100%);
          padding: 24px 28px; display: flex; align-items: center; gap: 20px; margin-top: 44px;
        }
        .bh-trophy { font-size: 2.2rem; flex-shrink: 0; line-height: 1; }
        .bh-label { font-family: var(--font-head); font-size: 1rem; font-weight: 700; color: var(--gold); margin-bottom: 4px; }
        .bh-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.6; max-width: 680px; }
        .bh-desc strong { color: var(--text); font-weight: 600; }

        .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-pill {
          padding: 8px 18px; border: 1px solid var(--border); border-radius: 100px;
          font-size: 0.875rem; color: var(--muted); background: var(--bg);
          cursor: default; user-select: none;
        }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .about-text p { color: var(--muted); margin-bottom: 16px; font-size: 0.975rem; }
        .about-right { display: flex; flex-direction: column; gap: 14px; }
        .about-stat-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px 22px; }
        .about-stat-number { font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; color: var(--gold); line-height: 1; margin-bottom: 4px; font-feature-settings: "tnum"; }
        .about-stat-label { font-size: 0.82rem; color: var(--muted); }
        .resume-btn {
          display: block; width: 100%; text-align: center;
          background: var(--accent); color: #fff;
          padding: 12px 24px; border-radius: var(--radius);
          font-family: var(--font-body); font-size: 0.95rem; font-weight: 600;
          transition: background 0.2s, transform 0.15s; margin-top: 4px;
        }
        .resume-btn:hover { background: #3a7de8; transform: translateY(-1px); text-decoration: none; }

        .tab-heading { font-size: clamp(1.6rem,3vw,2.2rem); letter-spacing: -0.02em; margin-bottom: 32px; }

        #contact { padding: 80px 0; border-top: 1px solid var(--border); }
        .contact-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 12px;
        }
        .contact-eyebrow::before { content: ''; display: block; width: 16px; height: 2px; background: var(--accent); }
        h2.contact-title { font-size: clamp(1.8rem, 3.5vw, 2.5rem); letter-spacing: -0.02em; margin-bottom: 10px; }
        .contact-sub { color: var(--muted); max-width: 520px; font-size: 1rem; margin-bottom: 48px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; align-items: start; }
        .contact-info p { color: var(--muted); margin-bottom: 24px; font-size: 0.975rem; }
        .contact-details { display: flex; flex-direction: column; gap: 12px; }
        .contact-detail { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--muted); }
        .contact-detail a { color: var(--accent); }
        .contact-detail a:hover { text-decoration: underline; }
        .contact-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: flex; flex-direction: column; gap: 6px; }
        .form-row label { font-size: 0.75rem; font-weight: 600; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }
        .form-row input, .form-row textarea {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
          color: var(--text); font-family: var(--font-body); font-size: 0.95rem;
          padding: 11px 14px; outline: none; transition: border-color 0.2s; resize: vertical;
        }
        .form-row input:focus, .form-row textarea:focus { border-color: var(--accent); }
        .form-row input::placeholder, .form-row textarea::placeholder { color: var(--muted); opacity: 0.7; }
        .form-feedback { font-size: 0.875rem; padding: 10px 14px; border-radius: var(--radius); }
        .form-feedback.success { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.3); }
        .form-feedback.error { background: rgba(248,113,113,0.1); color: #f87171; border: 1px solid rgba(248,113,113,0.3); }

        footer { background: var(--surface); border-top: 1px solid var(--border); padding: 32px 0; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-logo { font-family: var(--font-head); font-weight: 800; font-size: 0.95rem; }
        .footer-logo span { color: var(--accent); }
        .footer-copy { font-size: 0.8rem; color: var(--muted); }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { font-size: 0.85rem; color: var(--muted); transition: color 0.2s; }
        .footer-links a:hover { color: var(--text); text-decoration: none; }

        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-photo-wrap { width: 180px; height: 180px; margin: 0 auto; }
        }
        @media (max-width: 780px) {
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .stat-cell:nth-child(2) { border-right: none; }
          .stat-cell:nth-child(3) { border-top: 1px solid var(--border-mid); }
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .contact-grid { grid-template-columns: 1fr; gap: 36px; }
          .bh-callout { flex-direction: column; gap: 12px; }
          .main-tab { padding: 14px 16px; font-size: 0.85rem; }
          .project-top { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 600px) {
          .hero-ctas { flex-direction: column; }
          .main-tab { padding: 12px 12px; font-size: 0.8rem; }
          .project-icon { width: 40px; height: 40px; font-size: 1.4rem; }
        }
      `}</style>

      <nav>
        <div className="nav-inner">
          <span className="nav-logo">Trenity<span>.</span>Walker</span>
        </div>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">Senior Learning Experience Designer</div>
              <h1 className="hero-name">Trenity <span>Walker</span></h1>
              <p className="hero-title">20+ Years of Instructional Design &amp; L&amp;D</p>
              <p className="hero-bio">
                I build learning experiences that actually change behavior. From AI-powered authoring
                tools to award-winning Storyline courses, I bridge the gap between learning science
                and modern technology.
              </p>
              <div className="hero-ctas">
                <button className="btn-primary" onClick={() => jumpToTabs("samples")}>See My Work</button>
                <button className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get In Touch</button>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <img src="/Tren.jpg" alt="Trenity Walker" />
            </div>
          </div>
        </div>
      </section>

      <div className="stats-wrap" id="main-tabs">
        <div className="container" style={{ padding: 0 }}>
          <div className="stats-bar">
            {stats.map((s) => (
              <div key={s.label} className="stat-cell">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="main-tab-bar">
        <div className="main-tab-bar-inner">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              data-label={tab.label}
              className={`main-tab${activeTab === tab.id ? " main-tab-on" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="tab-content"
        style={{ background: activeTab === "skills" || activeTab === "about" ? "var(--surface)" : "var(--bg)" }}
      >
        <div className="container">

          {activeTab === "samples" && (
            <>
              <div className="project-list">
                {workSamples.map((item) => <ProjectRow key={item.id} item={item} />)}
              </div>
              <div className="bh-callout">
                <div className="bh-trophy">🏆</div>
                <div>
                  <div className="bh-label">Brandon Hall Group -- Gold Award 2022</div>
                  <div className="bh-desc">
                    Recognized for <strong>Employee Well-Being for Verizon Consumer Group</strong> in
                    the category of <strong>Best Unique or Innovative Learning &amp; Development
                    Program</strong>. Competing against Fortune 500 L&amp;D teams and winning gold is
                    the kind of validation that only comes from doing the work right.
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "tools" && (
            <div className="project-list">
              {aiTools.map((item) => <ProjectRow key={item.id} item={item} />)}
            </div>
          )}

          {activeTab === "skills" && (
            <>
              <h2 className="tab-heading">Skills &amp; Tools</h2>
              <div className="skills-grid">
                {skills.map((skill) => <div key={skill} className="skill-pill">{skill}</div>)}
              </div>
            </>
          )}

          {activeTab === "about" && (
            <>
              <h2 className="tab-heading">About Me</h2>
              <div className="about-grid">
                <div className="about-text">
                  <p>
                    I'm a Senior Learning Experience Designer based in the Auburn/Puget Sound area of
                    Washington State with over 20 years of experience designing training that drives
                    measurable results.
                  </p>
                  <p>
                    Currently contracting through Experis for Verizon while building out Prism Learning
                    Design, my micro-studio focused on AI-powered L&amp;D tools. My recent work spans
                    enterprise compliance training, AI-assisted coaching simulations, and authoring
                    tools built on the Claude API.
                  </p>
                  <p>
                    I hold a BEd in Instructional Design from the University of Arizona and have been
                    recognized with a Brandon Hall Gold Award (2022). Outside of work I'm a volunteer
                    with the Miss Auburn Scholarship Program and an infrared photography enthusiast.
                  </p>
                </div>
                <div className="about-right">
                  <div className="about-stat-card">
                    <div className="about-stat-number">20+</div>
                    <div className="about-stat-label">Years of instructional design experience</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="about-stat-number">Gold</div>
                    <div className="about-stat-label">Brandon Hall Award, 2022</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="about-stat-number">28K+</div>
                    <div className="about-stat-label">Employees trained across enterprise programs</div>
                  </div>
                  <a href="/resume" className="resume-btn">
                    View Full Resume &#8599;
                  </a>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

      <section id="contact">
        <div className="container">
          <div className="contact-eyebrow">Contact</div>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-sub">
            Open to senior L&amp;D roles, consulting projects, and collaborations in tech,
            nonprofit, and government sectors.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <p>
                Whether you have a role to fill, a project that needs an experienced designer,
                or just want to talk L&amp;D --<br />I'd love to hear from you.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span>&#127760;</span>
                  <a href="https://linkedin.com/in/tren" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/tren
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">Trenity<span>.</span>Walker</span>
            <span className="footer-copy">&copy; {new Date().getFullYear()} Trenity Walker. All rights reserved.</span>
            <div className="footer-links">
              <a href="https://linkedin.com/in/tren" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://prism-landing-three.vercel.app" target="_blank" rel="noopener noreferrer">Prism LD</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
