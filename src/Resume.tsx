export default function Resume() {
  function handlePrint() {
    window.print();
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
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4 { font-family: var(--font-head); font-weight: 800; line-height: 1.15; }
        a { color: var(--accent); text-decoration: none; }

        .back-bar {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 12px 40px;
          display: flex;
          align-items: center;
        }
        .back-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          font-family: var(--font-body);
          cursor: pointer;
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
        }
        .back-link:hover { color: var(--text); }

        .resume-page {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 40px 80px;
        }

        .resume-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: start;
          margin-bottom: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
        }
        .resume-name { font-size: 3rem; letter-spacing: -0.03em; margin-bottom: 4px; }
        .resume-name span { color: var(--accent); }
        .resume-headline { font-size: 1rem; color: var(--muted); font-weight: 400; margin-bottom: 16px; font-family: var(--font-body); }
        .resume-contact { display: flex; flex-wrap: wrap; gap: 16px; }
        .resume-contact a, .resume-contact span { font-size: 0.82rem; color: var(--muted); display: inline-flex; align-items: center; gap: 5px; }
        .resume-contact a { color: var(--accent); }

        .award-box {
          background: linear-gradient(135deg, rgba(245,166,35,0.1) 0%, rgba(245,166,35,0.04) 100%);
          border: 1px solid rgba(245,166,35,0.35);
          border-radius: 12px;
          padding: 20px 24px;
          text-align: center;
          min-width: 160px;
        }
        .award-trophy { font-size: 2rem; margin-bottom: 8px; line-height: 1; }
        .award-name { font-family: var(--font-head); font-size: 0.85rem; font-weight: 800; color: var(--gold); letter-spacing: 0.04em; margin-bottom: 4px; }
        .award-sub { font-size: 0.72rem; color: var(--muted); line-height: 1.4; }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border-mid);
          border: 1px solid var(--border-mid);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .stat-box { background: var(--surface); padding: 20px 16px; text-align: center; }
        .stat-num { font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; color: var(--gold); line-height: 1; margin-bottom: 6px; font-feature-settings: "tnum"; }
        .stat-lbl { font-size: 0.75rem; color: var(--muted); line-height: 1.35; }

        .resume-body {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: start;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .section-label::before { content: ''; display: block; width: 14px; height: 2px; background: var(--accent); }

        .timeline { position: relative; }
        .timeline-item { position: relative; padding-left: 24px; padding-bottom: 32px; }
        .timeline-item::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 0; width: 1px; background: var(--border-mid); }
        .timeline-item:last-child::before { display: none; }
        .timeline-item::after { content: ''; position: absolute; left: -4px; top: 7px; width: 9px; height: 9px; border-radius: 50%; background: var(--accent); border: 2px solid var(--bg); }
        .tl-years { font-size: 0.72rem; font-weight: 600; color: var(--accent); letter-spacing: 0.06em; margin-bottom: 3px; }
        .tl-title { font-family: var(--font-head); font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 1px; }
        .tl-org { font-size: 0.8rem; color: var(--muted); margin-bottom: 8px; }
        .tl-bullets { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .tl-bullets li { font-size: 0.82rem; color: var(--muted); padding-left: 12px; position: relative; line-height: 1.5; }
        .tl-bullets li::before { content: '·'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }

        .right-col { display: flex; flex-direction: column; gap: 36px; }

        .skill-group { margin-bottom: 16px; }
        .skill-group-label { font-size: 0.72rem; font-weight: 600; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
        .skill-chips { display: flex; flex-wrap: wrap; gap: 5px; }
        .skill-chip { font-size: 0.72rem; font-weight: 500; padding: 3px 10px; border-radius: 999px; background: var(--border); color: var(--text); border: 1px solid var(--border-mid); }

        .edu-item { margin-bottom: 16px; }
        .edu-degree { font-family: var(--font-head); font-size: 0.88rem; font-weight: 700; color: var(--text); margin-bottom: 2px; }
        .edu-school { font-size: 0.78rem; color: var(--muted); }

        .download-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--accent); color: #fff; border: none;
          padding: 12px 24px; border-radius: var(--radius);
          font-family: var(--font-body); font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: background 0.2s, transform 0.15s; width: 100%;
        }
        .download-btn:hover { background: #3a7de8; transform: translateY(-1px); }

        /* ── Print styles ── */
        @media print {
          :root {
            --bg:         #ffffff;
            --surface:    #f7f8fc;
            --border:     #dde2ef;
            --border-mid: #c8d0e4;
            --text:       #111827;
            --muted:      #6b7280;
            --accent:     #1a4f9c;
            --gold:       #b45309;
          }

          body { background: #fff; color: #111827; font-size: 10pt; }

          .back-bar { display: none !important; }
          .download-btn { display: none !important; }
          .print-hide { display: none !important; }

          .resume-page { padding: 0; max-width: 100%; }
          .resume-name { font-size: 26pt; }
          .stat-num { font-size: 16pt; }

          .timeline-item { page-break-inside: avoid; }
          .timeline-item::after { background: #1a4f9c; border-color: #fff; }
          .timeline-item::before { background: #c8d0e4; }

          .skill-chip { background: #eef2fb; color: #1a4f9c; border-color: #c8d0e4; }
          .award-box { background: #fef9f0; border-color: #d97706; }
          .stats-row { background: #c8d0e4; }
          .stat-box { background: #f7f8fc; }

          .right-col { gap: 20px; }
          .edu-item { page-break-inside: avoid; margin-bottom: 8px; }
          .skill-group { margin-bottom: 10px; }
          .section-label { margin-bottom: 12px; }
        }
      `}</style>

      <div className="back-bar">
        <button className="back-link" onClick={() => window.history.back()}>
          &#8592; Back to portfolio
        </button>
      </div>

      <div className="resume-page">

        <div className="resume-header">
          <div>
            <h1 className="resume-name">Trenity <span>Walker</span></h1>
            <p className="resume-headline">Senior Learning Experience Designer &amp; Instructional Design Leader</p>
            <div className="resume-contact">
              <span>Auburn / Puget Sound, WA</span>
              <a href="https://linkedin.com/in/tren" target="_blank" rel="noopener noreferrer">linkedin.com/in/tren</a>
              <a href="https://trenwalker.com" target="_blank" rel="noopener noreferrer">trenwalker.com</a>
            </div>
          </div>
          <div className="award-box">
            <div className="award-trophy">🏆</div>
            <div className="award-name">Brandon Hall</div>
            <div className="award-sub">Gold Award 2022<br />Excellence in L&amp;D</div>
          </div>
        </div>

        <div className="stats-row">
          {[
            { num: "20+", lbl: "Years Experience" },
            { num: "28K+", lbl: "Employees Trained" },
            { num: "$1M+", lbl: "Training Cost Savings" },
            { num: "4.74/5", lbl: "Learner Satisfaction" },
          ].map((s) => (
            <div key={s.lbl} className="stat-box">
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="resume-body">

          <div>
            <div className="section-label">Experience</div>
            <div className="timeline">

              <div className="timeline-item">
                <div className="tl-years">2025 -- Present</div>
                <div className="tl-title">Instructional Designer / Learning Consultant</div>
                <div className="tl-org">Experis (Client: Verizon)</div>
                <ul className="tl-bullets">
                  <li>Converting ILT to self-paced digital learning experiences</li>
                  <li>Modernizing legacy training for rapid skill acquisition</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="tl-years">2015 -- 2024</div>
                <div className="tl-title">Learning Experience Designer</div>
                <div className="tl-org">Verizon Wireless</div>
                <ul className="tl-bullets">
                  <li>Brandon Hall Gold Award -- Employee Well-Being program (2022)</li>
                  <li>Tier 3 training reduced trouble tickets by 43%, saving ~$1M annually</li>
                  <li>9,805 learners trained across five workgroups</li>
                  <li>Enterprise programs supporting 28,000+ employees</li>
                  <li>Learner satisfaction rating: 4.74 out of 5</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="tl-years">2014 -- 2015</div>
                <div className="tl-title">Senior Analyst, Learning &amp; Development</div>
                <div className="tl-org">Verizon Wireless</div>
                <ul className="tl-bullets">
                  <li>Primary training partner for high-visibility product launches</li>
                  <li>Performance gap analysis across retail and customer service</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="tl-years">2013 -- 2014</div>
                <div className="tl-title">Training Manager (Acting)</div>
                <div className="tl-org">Verizon Wireless</div>
                <ul className="tl-bullets">
                  <li>Led communication analysts across L&amp;D initiatives</li>
                  <li>Coaching and leadership across multiple teams</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="tl-years">2007 -- 2013</div>
                <div className="tl-title">Marketing Consultant / Training Program Lead</div>
                <div className="tl-org">Verizon Wireless</div>
                <ul className="tl-bullets">
                  <li>Directed learning strategy for major product launches</li>
                  <li>Cross-channel training readiness and alignment</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="tl-years">2000 -- 2007</div>
                <div className="tl-title">Sales Representative / Team Lead</div>
                <div className="tl-org">Verizon Wireless</div>
                <ul className="tl-bullets">
                  <li>Top-performing sales rep; promoted to informal team lead role</li>
                  <li>Mentored new hires on product knowledge and customer engagement</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="right-col">

            <button className="download-btn print-hide" onClick={handlePrint}>
              &#8681; Download / Print PDF
            </button>

            <div>
              <div className="section-label">Skills &amp; Tools</div>
              <div className="skill-group">
                <div className="skill-group-label">Authoring</div>
                <div className="skill-chips">
                  {["Articulate Storyline 360", "Rise 360", "Vyond", "Camtasia"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">Design</div>
                <div className="skill-chips">
                  {["Adobe Creative Cloud", "Figma", "Visual Design"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">Technology</div>
                <div className="skill-chips">
                  {["React / Vite / TypeScript", "Claude API", "Clerk Auth", "Supabase", "Vercel", "SCORM / xAPI"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">LMS &amp; Delivery</div>
                <div className="skill-chips">
                  {["Workday LMS", "SCORM", "xAPI"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-group-label">Methodology</div>
                <div className="skill-chips">
                  {["Instructional Design", "Bloom's Taxonomy", "Performance Consulting", "ADDIE", "Needs Analysis"].map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="section-label">Education</div>
              <div className="edu-item">
                <div className="edu-degree">BEd, Instructional Design</div>
                <div className="edu-school">University of Arizona</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Associate of Arts</div>
                <div className="edu-school">University of Phoenix</div>
              </div>
            </div>

            <div>
              <div className="section-label">Recognition</div>
              <div className="edu-item">
                <div className="edu-degree">Brandon Hall Gold Award</div>
                <div className="edu-school">Best Unique or Innovative L&amp;D Program, 2022</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Prism Learning Design</div>
                <div className="edu-school">Founder -- AI-powered L&amp;D tool suite (2024 -- present)</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Miss Auburn Scholarship Program</div>
                <div className="edu-school">Volunteer judge trainer, Miss America tributary</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
