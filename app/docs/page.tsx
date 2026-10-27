const beforeYouBegin = [
  { name: "Windows 11", detail: "Builds 22000, 22621, 22631, 22635, 26100, 26200, 26300" },
  { name: "Internet", detail: "Required — Brave is installed via Chocolatey" },
  { name: "Windows Update", detail: "No pending updates or reboots" },
  { name: "Antivirus", detail: "No third-party antivirus or tweakware installed" },
  { name: "Power", detail: "Laptop must be plugged in" },
];

const steps = [
  {
    step: "01",
    title: "Download AME Wizard",
    description:
      "AME Wizard is the free framework that applies playbooks. Grab the latest release from ameliorated.io and unzip it.",
  },
  {
    step: "02",
    title: "Get the playbook",
    description:
      "Download the GlendaOS.apbx file — it contains the full playbook: configuration, scripts, and images in one package.",
  },
  {
    step: "03",
    title: "Load it into AME Wizard",
    description:
      "Open AME Wizard and drag GlendaOS.apbx into the window. It will verify your system against the playbook's requirements.",
  },
  {
    step: "04",
    title: "Choose your options",
    description:
      "Before deploying you'll see three checkboxes — all on by default. Untick any you don't want: pause updates until 2036, disable Defender, or restore the Windows 10 right-click menu.",
  },
  {
    step: "05",
    title: "Deploy & reboot",
    description:
      "Run the playbook and let it work — it removes bloat, applies registry policy, and installs Brave. Reboot when it's done.",
  },
];

const afterInstall = [
  "Brave Browser is installed and pre-warmed for a fast first launch",
  "GlendaOS wallpaper is applied to the desktop and lock screen",
  "Dark theme is enabled for apps and the Windows shell",
  "Start Menu pins and dead taskbar icons are cleared — re-pin what you need",
];

const reverting = [
  {
    title: "Re-enable Windows Defender",
    detail:
      "Original service values are backed up in %ProgramData%\\GlendaOS\\Backups — run the included ENABLE-DEFENDER.bat to restore.",
  },
  {
    title: "Resume Windows Update",
    detail:
      "Open Settings > Windows Update and click Resume updates, then remove the AU policy keys under HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate.",
  },
  {
    title: "Restore the Windows 11 context menu",
    detail:
      "Delete the key HKCU\\SOFTWARE\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2} and restart Explorer.",
  },
];

export default function DocsPage() {
  return (
    <div className="px-6 py-16 text-slate-900">
      <section className="text-center max-w-3xl mx-auto">
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-red-600 border border-red-300 rounded-full px-4 py-1">
          Documentation
        </span>
        <h1 className="text-5xl font-bold pt-6">Installing GlendaOS</h1>
        <p className="text-lg text-slate-600 font-light pt-4 leading-relaxed">
          The playbook is applied to an existing Windows 11 install through AME
          Wizard — no ISO flashing needed.
        </p>
      </section>

      <section className="max-w-4xl mx-auto pt-16">
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold">Before you begin</h2>
          <ul className="pt-6 space-y-4">
            {beforeYouBegin.map((r) => (
              <li key={r.name} className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                <span className="text-slate-800 font-medium">{r.name}</span>
                <span className="text-slate-600 text-sm text-right">{r.detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border border-red-200 bg-red-50 rounded-lg p-4">
            <p className="text-xs text-red-700 leading-relaxed">
              GlendaOS is an overhaul playbook — it permanently removes apps and
              disables Defender and automatic updates by default. Back up
              anything you care about before applying.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto pt-12">
        <h2 className="text-2xl font-bold text-center">Step by step</h2>
        <div className="pt-8 space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-6 flex gap-6 items-start"
            >
              <div className="text-4xl font-bold text-red-700/70 shrink-0 w-14">
                {s.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-slate-600 pt-1 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-12">
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold">After install</h2>
          <ul className="pt-6 space-y-3">
            {afterInstall.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-600">
                <span className="text-red-600 select-none">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold">Reverting changes</h2>
          <ul className="pt-6 space-y-5">
            {reverting.map((r) => (
              <li key={r.title}>
                <div className="text-slate-800 font-medium">{r.title}</div>
                <p className="text-sm text-slate-600 pt-1 leading-relaxed">
                  {r.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
