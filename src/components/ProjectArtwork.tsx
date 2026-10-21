import Image from "next/image";

export function ProjectArtwork({ id }: { id: string }) {
  if (id === "tando")
    return (
      <div className="project-art art-tando">
        <div className="browser-frame">
          <div className="browser-bar">
            <span />
            <span />
            <span />
            <p>tando / website preview</p>
          </div>
          <div className="screenshot-crop">
            <Image
              src="/projects/tando.png"
              alt="Tando website, showing its signature verification concept and time-limited QR features"
              width={1440}
              height={2497}
              sizes="(max-width: 760px) 90vw, 650px"
            />
          </div>
        </div>
        <span className="art-label">PROJECT WEBSITE</span>
      </div>
    );

  if (id === "parents")
    return (
      <div
        className="project-art art-parents"
        aria-label="Illustration of the Parents Info billing workflow"
      >
        <div className="billing-panel">
          <div className="panel-top">
            <span className="tiny-symbol">a.</span>
            <span>Parents Info</span>
            <i>Workflow illustration</i>
          </div>
          <p className="panel-overline">SCHOOL & HOME, CONNECTED</p>
          <h3>
            A clearer picture
            <br />
            of school life.
          </h3>
          <div className="billing-flow">
            {[
              {
                symbol: "▤",
                title: "Bill issued",
                note: "Defined by the Finance Division",
              },
              {
                symbol: "⇄",
                title: "Payment",
                note: "The specified amount, multiple channels",
              },
              {
                symbol: "✓",
                title: "Parent notified",
                note: "Automatic WhatsApp & email",
              },
            ].map((step) => (
              <div key={step.title}>
                <span>{step.symbol}</span>
                <p>
                  <strong>{step.title}</strong>
                  <small>{step.note}</small>
                </p>
                <i />
              </div>
            ))}
          </div>
          <div className="panel-bottom">
            <span>Academics</span>
            <span>Attendance</span>
            <span>Achievements</span>
          </div>
        </div>
        <span className="art-label">WORKFLOW ILLUSTRATION</span>
      </div>
    );

  if (id === "lab-bk")
    return (
      <div
        className="project-art art-lab"
        aria-label="Illustration of digital assessments and Excel imports in labbkpi"
      >
        <div className="assessment-panel">
          <div className="panel-top">
            <strong>
              labbkpi<span>.</span>
            </strong>
            <i>Interface illustration</i>
          </div>
          <p className="panel-overline">A DIGITAL SPACE FOR ASSESSMENT</p>
          <h3>
            From paper
            <br />
            to possibility.
          </h3>
          <div className="assessment-chart" aria-hidden="true">
            {["R", "I", "A", "S", "E", "C"].map((letter, index) => (
              <div key={letter}>
                <span
                  style={{ height: `${[40, 65, 48, 87, 57, 72][index]}%` }}
                />
                <small>{letter}</small>
              </div>
            ))}
          </div>
          <div className="assessment-options">
            <span>
              Online tests <b>↗</b>
            </span>
            <span>
              Excel import <b>↗</b>
            </span>
            <span>
              Results <b>↗</b>
            </span>
          </div>
        </div>
        <span className="art-label">ILLUSTRATIVE RESULTS</span>
      </div>
    );

  return (
    <div
      className="project-art art-hermes"
      aria-label="Illustration of the personal Hermes agent workflow"
    >
      <div className="agent-panel">
        <div className="panel-top">
          <span className="tiny-symbol">✳</span>
          <span>Hermes Team AI</span>
          <i>Personal workspace</i>
        </div>
        <div className="agent-input">
          <span>↳</span> Telegram instructions
        </div>
        <div className="agent-connector" />
        <div className="agent-central">
          <span>✳</span>
          <div>
            <small>HERMES AGENT</small>
            <strong>
              A little help with
              <br />
              the paperwork.
            </strong>
          </div>
        </div>
        <div className="agent-branches">
          <div>
            <span>▤</span>
            <strong>Client invoices</strong>
          </div>
          <div>
            <span>▥</span>
            <strong>Progress reports</strong>
          </div>
        </div>
        <p className="agent-footnote">Tasks & activity → Mission Control</p>
      </div>
      <span className="art-label">WORKFLOW ILLUSTRATION</span>
    </div>
  );
}
