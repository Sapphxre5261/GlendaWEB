import Link from "next/link";

const pillars = [
  {
    title: "Open & Transparent",
    description:
      "Every tweak in the playbook is readable YAML. Nothing hidden, nothing obfuscated — audit each change before it ever touches your system.",
  },
  {
    title: "Safe & Clean",
    description:
      "Applied through AME Wizard, the trusted framework used by AtlasOS and ReviOS. No scripts from strangers, no mystery executables.",
  },
  {
    title: "Privacy-First",
    description:
      "Telemetry, ads, and data collection are off by default — not buried under toggles. Your machine reports to you, not to Microsoft.",
  },
];

const whatItDoes = [
  {
    name: "GlendaOS Playbook",
    tag: "Core",
    description:
      "A custom AME Wizard playbook that transforms standard Windows into a clean, responsive OS — debloat, privacy hardening, and performance tuning in one pass.",
    href: "/playbook",
    link: "Explore the Playbook",
  },
  {
    name: "Glenda Programs",
    tag: "Extras",
    description:
      "A hand-picked set of lightweight, open-source tools installed alongside the OS — from utilities to media — so a fresh system is useful from minute one.",
    href: "/programs",
    link: "Browse Programs",
  },
];

const steps = [
  {
    step: "01",
    title: "Install AME Wizard",
    description:
      "Grab the free AME Wizard tool — the framework that safely applies playbook modifications to Windows.",
  },
  {
    step: "02",
    title: "Apply the Playbook",
    description:
      "Drag the GlendaOS playbook into AME Wizard, pick your options, and let it run. Takes just a few minutes.",
  },
  {
    step: "03",
    title: "Reboot & Enjoy",
    description:
      "One restart later, you're on a debloated, private, tuned Windows — with every change documented.",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-16 text-white">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-9xl font-bold">
          Glenda
        </h1>
        <div className="flex gap-3 justify-center pt-6 text-sm font-medium tracking-widest uppercase">
          <span className="text-red-400 border border-red-700/50 rounded-full px-4 py-1">
            Non-Profit Project
          </span>
          <span className="text-slate-300 border border-slate-600/50 rounded-full px-4 py-1">
            Free & Open Source
          </span>
        </div>
        <p className="text-2xl text-slate-300 max-w-2xl mx-auto font-light pt-10 leading-relaxed">
          Say goodbye to bloat, hello to a smooth Windows.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Link
            href="/playbook"
            className="bg-red-700 hover:bg-red-600 transition-colors font-semibold px-8 py-3 rounded-lg"
          >
            Get the Playbook
          </Link>
          <Link
            href="https://github.com/Sapphxre5261/GlendaOS"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-500 hover:border-white transition-colors px-8 py-3 rounded-lg text-slate-200"
          >
            GitHub
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-24">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-black/40 backdrop-blur-md border border-slate-800/60 rounded-xl p-6 hover:border-red-800/60 transition-colors"
          >
            <h3 className="text-xl font-bold text-red-400">{p.title}</h3>
            <p className="text-sm text-slate-400 pt-3 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </section>

      {/* What Glenda Does */}
      <section className="max-w-6xl mx-auto pt-24">
        <h2 className="text-4xl font-bold text-center">What Glenda Does</h2>
        <div className="grid md:grid-cols-2 gap-6 pt-12">
          {whatItDoes.map((w) => (
            <div
              key={w.name}
              className="bg-black/40 backdrop-blur-md border border-slate-800/60 rounded-xl p-8 hover:border-red-800/60 transition-colors"
            >
              <span className="text-xs font-medium tracking-widest uppercase text-slate-400">
                {w.tag}
              </span>
              <h3 className="text-2xl font-bold pt-2">{w.name}</h3>
              <p className="text-sm text-slate-400 pt-3 leading-relaxed">
                {w.description}
              </p>
              <Link
                href={w.href}
                className="inline-block text-red-400 hover:text-red-300 transition-colors text-sm font-semibold pt-4"
              >
                {w.link} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto pt-24 pb-8">
        <h2 className="text-4xl font-bold text-center">Up and running in 3 steps</h2>
        <div className="grid md:grid-cols-3 gap-6 pt-12">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-black/40 backdrop-blur-md border border-slate-800/60 rounded-xl p-8"
            >
              <div className="text-5xl font-bold text-red-700/70">{s.step}</div>
              <h3 className="text-lg font-bold pt-4">{s.title}</h3>
              <p className="text-sm text-slate-400 pt-2 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
