import "./index.css";

function App() {
  return (
    <div className="container">

      <header className="hero">
        <h1>TaskMatrix</h1>

        <p className="subtitle">
          Enterprise Project Management Platform for Agile Teams
        </p>

        <p className="description">
          Organize projects, manage tasks, collaborate with your team,
          and monitor progress through a modern dashboard designed for
          productivity.
        </p>

        <div className="buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </header>

      <section className="section">
        <h2>Core Features</h2>

        <div className="cards">
          <div className="card">
            <h3>📋 Task Management</h3>
            <p>
              Create, organize and manage tasks across multiple projects.
            </p>
          </div>

          <div className="card">
            <h3>👥 Team Collaboration</h3>
            <p>
              Assign tasks, communicate with teammates and improve workflow.
            </p>
          </div>

          <div className="card">
            <h3>📊 Analytics Dashboard</h3>
            <p>
              Monitor project progress using charts, reports and statistics.
            </p>
          </div>

          <div className="card">
            <h3>🔐 Secure Authentication</h3>
            <p>
              Role-based login system for Admins, Managers and Team Members.
            </p>
          </div>

          <div className="card">
            <h3>📅 Project Planning</h3>
            <p>
              Plan milestones, deadlines and organize sprint activities.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Real-time Updates</h3>
            <p>
              Stay updated with notifications and activity feeds.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Technology Stack</h2>

        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Tailwind CSS</span>
          <span>JWT Authentication</span>
        </div>
      </section>

      <section className="section">
        <h2>Why Choose TaskMatrix?</h2>

        <div className="cards">
          <div className="card">
            <h3>Modern UI</h3>
            <p>
              Clean and responsive interface built for productivity.
            </p>
          </div>

          <div className="card">
            <h3>Fast Performance</h3>
            <p>
              Optimized architecture using modern web technologies.
            </p>
          </div>

          <div className="card">
            <h3>Scalable</h3>
            <p>
              Built with enterprise-level architecture for growing teams.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <h3>TaskMatrix</h3>

        <p>
          Enterprise Agile Project Management Platform
        </p>

        <p>
          © 2026 TaskMatrix. Capstone Project.
        </p>
      </footer>

    </div>
  );
}

export default App;