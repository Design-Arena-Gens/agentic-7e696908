import Link from "next/link";

const features = [
  {
    title: "Zero Input Prompt",
    description:
      "Autonomously generated UI demonstrating the tooling pipeline."
  },
  {
    title: "Next.js 14 App Router",
    description: "Uses the modern app directory with React Server Components."
  },
  {
    title: "Deploy Ready",
    description: "Configured with build, lint, and production scripts."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Agentic Test Experience</h1>
        <p>
          A minimal yet fully deployable Next.js application generated without
          human intervention.
        </p>
        <Link className="cta" href="#features">
          Explore Features
        </Link>
      </section>

      <section id="features" className="features">
        {features.map((feature) => (
          <article key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          Deploy-ready project for <code>agentic-7e696908</code>.
        </p>
      </footer>
    </main>
  );
}
