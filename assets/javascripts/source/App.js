import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <header className="content">
          <a href="/" className="logo-mark"></a>
          <h1 className="title">
            You have a vision ✨<br />
            We have vision builders 🔥
          </h1>
        </header>
        <div className="grid-of-things content">
          <div className="half-of-grid">
            <section className="thing-card who-are-we">
              <h3>Who are we</h3>
              <p>Violet Stack is a <b>software product studio</b>.</p>

              <p>
                We help mission-driven product companies like yours
                scale your business through thoughtful design and
                effective engineering.
              </p>
            </section>
            <section className="thing-card what-we-do">
              <h3>We do this stuff (really well)</h3>
              <ul className="capabilities-list">
                <li>🗣  Research + Brand Strategy</li>
                <li>🎨  Digital Design</li>
                <li>📝  Content Production</li>
                <li>📱  Software Engineering</li>
                <li>📈  Marketing + Activation</li>
                <li>⚡️  Startup Coaching</li>
              </ul>
            </section>
          </div>

          <div className="half-of-grid">
            <section className="thing-card special-sauce">
              <h3>Our special sauce</h3>
              <p>
                We’re a small crew, and we’ve all been through the startup
                rodeo dozens of times—as founders, operators, and investors.&nbsp;
                <b>We know how crucial time and momentum are.</b> They’re the
                lifeblood of your company.
              </p>

              <p>
                So we don’t mess around when it comes to getting shit done,
                doing only what’s critical, and learning as quickly as we
                possibly can so you can make the best calls.
              </p>
            </section>

            <section className="thing-card special-sauce">
              <h3>The team</h3>
              <ul className="team-list">
                <li className="team-item">
                  <a href="https://www.linkedin.com/in/pmederos/" className="team-link" target="blank">
                    <div className="avatar avatar-paul"></div>
                    <p className="team-person">
                      <b>Paul Mederos</b><br />
                      <span className="subtle-text">Design Partner</span>
                    </p>
                    <div className="icon-arrow"></div>
                  </a>
                </li>
                <li className="team-item">
                  <a href="https://www.linkedin.com/in/kbeddingfield/" className="team-link" target="blank">
                    <div className="avatar avatar-kevin"></div>
                    <p className="team-person">
                      <b>Kevin Beddingfield</b><br />
                      <span className="subtle-text">Engineering Partner</span>
                    </p>
                    <div className="icon-arrow"></div>
                  </a>
                </li>
                <li className="team-item">
                  <a href="https://www.linkedin.com/in/csalvato/" className="team-link" target="blank">
                    <div className="avatar avatar-chris"></div>
                    <p className="team-person">
                      <b>Chris Salvato</b><br />
                      <span className="subtle-text">Product Partner</span>
                    </p>
                    <div className="icon-arrow"></div>
                  </a>
                </li>
              </ul>
            </section>
          </div>

        </div>
        <footer className="footer">
          <p className="footer-copy">
            Currently <b>accepting clients</b> — for September 2018.
          </p>
          <a href="http://calendly.com/pvm/25m-open-session" className="footer-button" target="blank">
            Schedule a discovery call &rarr;
          </a>
        </footer>
      </div>
    )
  }
}
