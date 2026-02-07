import { Button } from "@heroui/react";
import "./Home.css";

const highlights = ["React / Next.js", "Node.js & APIs", "TypeScript", "Cloud / DevOps"];

export default function Home() {
  return (
    <section className="hero">
      <div className="grid">
        <div className="copy">
          <p className="eyebrow">Hi, I&apos;m Tânia Guedes · Full-stack Engineer</p>
          <h1 className="title">
            I craft reliable digital products that feel fast, polished, and human.
          </h1>
          <p className="lede">
            From product discovery to production-ready releases, I design and build scalable web
            experiences with React, Node.js, and modern cloud tooling.
          </p>

          <div className="actions">
            <Button color="primary" variant="solid" radius="full" className="btn-primary">
              View projects
            </Button>
            <Button color="secondary" variant="bordered" radius="full" className="btn-secondary">
              Let&apos;s talk
            </Button>
          </div>

          <div className="pills">
            {highlights.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>

          <div className="stats">
            <div className="stat-card">
              <span className="stat-value">35+</span>
              <span className="stat-label">Features shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">6</span>
              <span className="stat-label">Years coding</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime delivered</span>
            </div>
          </div>
        </div>

        <div className="visual">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="profile-card">
            <div className="profile-ring">
              <div className="profile-dot" />
            </div>
            <p className="profile-title">Building experiences that connect people.</p>
            <p className="profile-subtitle">Frontend · APIs · Cloud</p>
            <div className="profile-tags">
              <span>Performance</span>
              <span>DX</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
