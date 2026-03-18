export default function App() {
  const testimonials = [
    "Tren is the first person I think of when I need something fun and interactive.",
    "Tren always exceeds my expectations when we work together. His ability to create visual stories is truly inspiring. He is always open to feedback and other ideas to take things to that next level.",
    "Tren is very thoughtful with his recommendations but is also open to feedback when we need to go in a different direction. Tren is my go-to when I need innovative and topical content created for frontline consumption.",
    "I recommend Tren to all of my peers and partners. He is a great listener while also driving conversations through questions. He is always looking to improve the experience for learners and for partners.",
    "Tren has been a fantastic partner, taking our team's ideas and feedback and making the vision even better than we pictured them. Our team would not have had success without Tren!",
    "Tren consistently strikes that delicate balance between leadership and collaboration. He has a clear vision of the learning experiences he wants to create but allows a lot of space for collaborators.",
  ];

  const workSamples = [
    {
      title: "Power Positioning: Scenario-Based Learning",
      desc: "AI-driven feedback logic with confidence-building scenarios and coaching recaps. Learner decisions drive branching paths and personalized responses.",
      tags: ["Storyline 360", "Scenarios", "AI Feedback", "UX"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Power%20Positioning/story.html",
      docUrl: "https://docs.google.com/document/d/1AzYTUowcO12SaW_HKqEWHtaO_5o1OYpjCMUCETPuNEg/edit?usp=sharing",
      emoji: "🎯",
    },
    {
      title: "Support Knowledge Hub",
      desc: "Guided performance support hub using interactive navigation, visited-state tracking, and conditional progression for frontline employees.",
      tags: ["Storyline 360", "Interaction Design", "UX"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Support%20Knowledge%20Hub/story.html",
      emoji: "🗂️",
    },
    {
      title: "Finding Focus in Learning",
      desc: "Reflective learning experience using color-driven branching, progressive disclosure, and optional ambient audio to support focus and learner agency.",
      tags: ["Storyline 360", "Branching", "UX", "Visual Design"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Pantone%20Challenge/story.html",
      emoji: "🎨",
    },
    {
      title: "Home Safety Quiz",
      desc: "Focused assessment showcasing knowledge checks, decision-based questions, and clear visuals to reinforce safety awareness.",
      tags: ["Storyline 360", "Assessment Design", "Feedback"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Home%20Safety%20Quiz/story.html",
      emoji: "🏠",
    },
    {
      title: "Gym Facts",
      desc: "Game-based knowledge reinforcement demonstrating how engagement and feedback mechanics support learning retention in a competitive format.",
      tags: ["Storyline 360", "Gamification", "Engagement"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Gym%20Facts/story.html",
      emoji: "💪",
    },
    {
      title: "Trivia Squares",
      desc: "Interactive game-based experience transforming knowledge checks into a competitive board format with immediate feedback and visual progress cues.",
      tags: ["Storyline 360", "Game Mechanics", "Interaction Design"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Trivia%20Squares/story.html",
      emoji: "🎮",
    },
    {
      title: "Cybersecurity Basics",
      desc: "Concise animated explainer using clear visuals and plain-language scenarios to reinforce safe email behaviors and reduce real-world risk.",
      tags: ["Vyond", "Microlearning", "Visual Storytelling"],
      url: "https://storage.googleapis.com/portfolio-elearning-2024/Vyond%20Videos/Cybersecurity%20Basics%20%E2%80%93%20%E2%80%9CAvoiding%20Phishing%20Emails%E2%80%9D/Cybersecurity%20Basics%20%E2%80%93%20%E2%80%9CAvoiding%20Phishing%20Emails%E2%80%9D-720p-250911.mp4",
      emoji: "🔐",
    },
  ];

  const skills = [
    { icon: "⚡", name: "Articulate Storyline 360" },
    { icon: "📐", name: "Articulate Rise 360" },
    { icon: "🎬", name: "Vyond" },
    { icon: "🎥", name: "Camtasia" },
    { icon: "🎨", name: "Adobe Creative Suite" },
    { icon: "🤖", name: "Claude AI / Anthropic API" },
    { icon: "⚛️", name: "React / Vite" },
    { icon: "☁️", name: "Vercel / Supabase" },
    { icon: "📊", name: "Workday LMS / SCORM" },
    { icon: "🧠", name: "ADDIE / SAM" },
    { icon: "📈", name: "Learning Analytics" },
    { icon: "🎯", name: "Bloom's Taxonomy" },
  ];

  return (
    <>
      <nav className="nav">
        <div className="navBrand">Tren Walker</div>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#tools">AI Tools</a>
          <a href="#about">About</a>
          <a href="#contact" className="navCta">Contact Me</a>
        </div>
      </nav>

      <div className="hero">
        <div className="heroContent">
          <div className="heroEyebrow">Senior Learning Experience Designer</div>
          <h1 className="heroTitle">
            I design learning that<br />
            <span>changes behavior.</span>
          </h1>
          <p className="heroSub">
            25+ years building performance-focused learning experiences at enterprise scale.
            Brandon Hall Gold Award winner. Creator of AI-powered L&D tools under Prism Learning Design.
          </p>
          <div className="heroCtas">
            <a href="#work" className="btnSecondary">See My Work</a>
            <a href="https://linkedin.com/in/tren" target="_blank" rel="noopener noreferrer" className="btnSecondary">LinkedIn</a>
          </div>
        </div>
        <div className="heroPhoto">
          <div className="heroPhotoGlow" />
          <img src="/Tren.jpg" alt="Tren Walker" className="heroPhotoImg" />
        </div>
      </div>

      <div className="stats">
      <div className="stat">
  <div className="statNum">20+</div>
  <div className="statLabel">Years of Experience</div>
</div>
<div className="stat">
  <div className="statNum">$1M+</div>
  <div className="statLabel">Training Cost Savings</div>
</div>
<div className="stat">
  <div className="statNum">Gold</div>
  <div className="statLabel">Brandon Hall Award 2022</div>
</div>
<div className="stat">
  <div className="statNum">2</div>
  <div className="statLabel">AI Tools Live</div>
</div>
      </div>

      <section className="section" id="work">
        <div className="sectionEyebrow">Portfolio</div>
        <h2 className="sectionTitle">Work that <span>performs.</span></h2>
        <div className="workGrid">
        {workSamples.map((sample, i) => (
  <a
  key={i}
  href={sample.url}
  target="_blank"
  rel="noopener noreferrer"
  className="workCard"
  style={{ textDecoration: "none" }}
>
              <div className="workThumb">
                <span style={{ fontSize: 40 }}>{sample.emoji}</span>
              </div>
              <div className="workBody">
              <div className="workTitle">{sample.title}</div>
<p className="workDesc">{sample.desc}</p>
<div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
  <span className="workLink">Launch sample →</span>
  {sample.docUrl && (
 <a
      href={sample.docUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="workLink"
      onClick={(e) => e.stopPropagation()}
      style={{ color: "var(--textMuted)" }}
    >
      View sample responses →
    </a>
  )}
</div>
{sample.docUrl && (
  <p style={{ fontSize: 11, color: "var(--textSubtle)", marginTop: 4 }}>
    Includes sample responses — use alongside the interactive demo.
  </p>
)}
<div className="workTags">
  {sample.tags.map((tag, j) => (
    <span key={j} className="workTag">{tag}</span>
  ))}
</div>
 

              </div>
            </a>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div className="awardBanner">
          <div className="awardIcon">🥇</div>
          <div>
            <div className="awardTitle">Brandon Hall Group — Gold Award 2022</div>
            <p className="awardDesc">
              Recognized for <em>Employee Well-Being for Verizon Consumer Group</em> in the category of{" "}
              <strong>Best Unique or Innovative Learning & Development Program</strong>.
              Competing against Fortune 500 L&D teams and winning gold is the kind of validation
              that only comes from doing the work right.
            </p>
          </div>
        </div>
      </div>

      <section className="section" id="tools">
        <div className="prismSection">
          <div className="sectionEyebrow">Prism Learning Design</div>
          <h2 className="sectionTitle" style={{ marginBottom: 8 }}>
            I don't just design learning.<br />
            <span>I build tools for designers.</span>
          </h2>
          <p style={{ color: "var(--textMuted)", fontSize: 15, maxWidth: 560, lineHeight: 1.7 }}>
            Prism Learning Design is my AI-powered tool suite for instructional designers.
            Two tools are live — more are in development.
          </p>
          <div className="prismGrid">
            <a href="https://objectivewriter.com" target="_blank" rel="noopener noreferrer" className="prismCard" style={{ textDecoration: "none" }}>
              <div className="prismIcon">🎯</div>
              <div className="prismName">Objective Writer</div>
              <p className="prismDesc">
                Generates Bloom's-aligned learning objectives from course content.
                Choose your level, audience, and count — get polished, measurable objectives in seconds.
              </p>
              <span className="prismLink">Try the tool →</span>
            </a>
            <a href="https://outline-generator-rho.vercel.app" target="_blank" rel="noopener noreferrer" className="prismCard" style={{ textDecoration: "none" }}>
              <div className="prismIcon">🗂️</div>
              <div className="prismName">Course Outline Generator</div>
              <p className="prismDesc">
                Turns a topic, objectives, or a content dump into a full course structure
                with modules, lessons, durations, and activity suggestions.
              </p>
              <span className="prismLink">Try the tool →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="sectionEyebrow">Skills & Tools</div>
        <h2 className="sectionTitle">The full <span>toolkit.</span></h2>
        <div className="skillsGrid">
          {skills.map((skill, i) => (
            <div key={i} className="skillCard">
              <span className="skillIcon">{skill.icon}</span>
              <span className="skillName">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionEyebrow">Stakeholder Feedback</div>
        <h2 className="sectionTitle">What people <span>say.</span></h2>
        <div className="testimonialsGrid">
          {testimonials.map((quote, i) => (
            <div key={i} className="testimonialCard">
              <p className="testimonialQuote">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactBox">
          <div className="contactTitle">Let's work together.</div>
          <p className="contactSub">
          I'm exploring new opportunities in instructional design and L&D leadership. If you're building something worth learning, let's talk.
</p>
          <div className="contactLinks">
            <a href="mailto:tren.walker@gmail.com" className="btnSecondary">tren.walker@gmail.com</a>
            <a href="https://linkedin.com/in/tren" target="_blank" rel="noopener noreferrer" className="btnSecondary">LinkedIn →</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Tren Walker · Senior Learning Experience Designer · Auburn, WA</p>
      </footer>
    </>
  );
}