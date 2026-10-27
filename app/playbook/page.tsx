const stats = [
  { value: "v1.0.0", label: "Playbook version" },
  { value: "59", label: "AppX package patterns stripped" },
  { value: "300+", label: "Registry & system changes" },
  { value: "7", label: "Supported Windows 11 builds" },
];

const features = [
  {
    title: "Bloatware Removal",
    description:
      "59 AppX package patterns are uninstalled — Teams, Outlook for Windows, Clipchamp, Spotify, Disney+, OneNote, Office Hub, Skype, Solitaire, Phone Link, Widgets, Feedback Hub, Maps, and more.",
    items: [
      "Microsoft Edge removed completely — services, update tasks, file associations, and folders",
      "Internet Explorer remnants and PC Health Check deleted",
      "Windows Mail program folders removed",
      "Windows Security UI intentionally kept functional",
    ],
  },
  {
    title: "OneDrive Uninstalled",
    description:
      "OneDrive is fully removed — sync services, shell extensions, context menu handlers, and ~200 leftover registry registrations.",
    items: [
      "Files in OneDrive folders are moved back to your local Desktop, Documents, Pictures, Videos and Music before removal",
      "Explorer sidebar entry and startup hooks deleted",
      "OneDrive scheduled tasks and update tasks removed",
    ],
  },
  {
    title: "Privacy & Telemetry",
    description:
      "Microsoft's data collection channels are shut down at the service, task, and policy level.",
    items: [
      "DiagTrack (telemetry) service deleted outright",
      "Customer Experience Improvement Program and Compatibility Appraiser scheduled tasks deleted",
      "Web results, Bing and Cortana removed from Start Menu search",
      "Advertising ID, Timeline/activity feed, Error Reporting and typing/inking data collection disabled",
      "Device metadata downloads and Delivery Optimization P2P disabled",
    ],
  },
  {
    title: "Interface & Shell",
    description:
      "The desktop is cleaned up: fewer buttons, no suggested content, sane Explorer defaults.",
    items: [
      "Widgets, Chat, Copilot and Meet Now taskbar buttons hidden",
      "Explorer opens to This PC, shows file extensions and hidden files",
      "Gallery removed from Explorer navigation pane",
      "Start Menu suggestions, lock screen ads, Spotlight and 'Let's finish setting up' disabled",
      "Settings home page ads and the Explorer help pane removed",
      "Pinned Start items and dead taskbar icons cleared for every user",
    ],
  },
  {
    title: "Windows Update Control",
    description:
      "Default-on option: updates switch to manual-only so nothing installs or reboots without you.",
    items: [
      "Updates set to notify-only — download and install when you choose",
      "All updates paused until end of 2036 in Settings > Windows Update",
      "UpdateOrchestrator scheduled tasks removed",
      "Enforced via registry policy and a SYSTEM-level script",
    ],
  },
  {
    title: "Software & Appearance",
    description:
      "A usable, themed desktop out of the box — not just a stripped one.",
    items: [
      "Brave Browser installed via Chocolatey, with first-run caches pre-warmed",
      "OEM default file associations configured for the new browser",
      "GlendaOS wallpaper applied to desktop and lock screen",
      "Dark theme enforced for apps and the Windows shell",
    ],
  },
];

const installOptions = [
  {
    name: "Pause Windows Updates until 2036 (manual only)",
    option: "manual-updates",
    defaultOn: true,
  },
  {
    name: "Disable Windows Defender",
    option: "defender",
    defaultOn: true,
  },
  {
    name: "Restore Windows 10 right-click menu",
    option: "win10-menu",
    defaultOn: true,
  },
];

const requirements = [
  { name: "Windows 11", detail: "Builds 22000, 22621, 22631, 22635, 26100, 26200, 26300" },
  { name: "AME Wizard", detail: "Required to apply the .apbx playbook" },
  { name: "Internet", detail: "Needed during install (Chocolatey downloads Brave)" },
  { name: "Clean state", detail: "No pending updates, no third-party antivirus or tweakware" },
  { name: "Power", detail: "Laptop must be plugged in during deployment" },
];

export default function PlaybookPage() {
  return (
    <div className="px-6 py-16 text-slate-900">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-red-600 border border-red-300 rounded-full px-4 py-1">
          AME Wizard Playbook
        </span>
        <h1 className="text-7xl font-bold pt-6">
          Glenda<span className="text-red-700">OS</span> Playbook
        </h1>
        <p className="text-xl text-slate-600 font-light pt-6 leading-relaxed">
          The official GlendaOS playbook for Windows 11. It modifies your
          installation — removing bloat, telemetry, Edge and OneDrive, then
          re-theming the desktop — in a single AME Wizard pass.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <a
            href="https://github.com/Sapphxre5261/GlendaOS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white transition-colors font-semibold px-8 py-3 rounded-lg"
          >
            Download v1.0.0
          </a>
          <a
            href="https://github.com/Sapphxre5261/GlendaOS"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-300 hover:border-slate-500 bg-white/60 transition-colors px-8 py-3 rounded-lg text-slate-700"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-20">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-red-600">{s.value}</div>
            <div className="text-sm text-slate-600 pt-2">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto pt-24">
        <h2 className="text-4xl font-bold text-center">What's inside</h2>
        <p className="text-slate-600 text-center pt-4 max-w-2xl mx-auto">
          Every change below is an actual playbook action in{" "}
          <code className="text-slate-700">Configuration/tasks/</code> — inspect
          the YAML yourself before running.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-6 hover:border-red-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-red-600">{f.title}</h3>
              <p className="text-sm text-slate-600 pt-3 leading-relaxed">
                {f.description}
              </p>
              <ul className="pt-4 space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-red-600 select-none">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Options + Requirements */}
      <section className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto pt-24">
        <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold">Install-time options</h2>
          <p className="text-sm text-slate-600 pt-3">
            AME Wizard shows these checkboxes before deploying. All are on by
            default — untick any you want to skip.
          </p>
          <ul className="pt-6 space-y-4">
            {installOptions.map((o) => (
              <li key={o.option} className="border-b border-slate-200 pb-4">
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 text-xs font-semibold px-2 py-0.5 rounded ${
                      o.defaultOn
                        ? "bg-red-100 text-red-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {o.defaultOn ? "ON" : "OFF"}
                  </span>
                  <span className="text-slate-800 text-sm">{o.name}</span>
                </div>
                <span className="text-xs text-slate-500 pl-1">
                  option: {o.option}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 pt-4">
            Disabling Defender is reversible — originals are backed up to{" "}
            <code className="text-slate-700">%ProgramData%\GlendaOS\Backups</code>{" "}
            and ENABLE-DEFENDER.bat is included.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm rounded-xl p-8">
          <h2 className="text-2xl font-bold">Requirements</h2>
          <ul className="pt-6 space-y-4">
            {requirements.map((r) => (
              <li key={r.name} className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                <span className="text-slate-800 font-medium">{r.name}</span>
                <span className="text-slate-600 text-sm text-right">{r.detail}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border border-red-200 bg-red-50 rounded-lg p-4">
            <p className="text-xs text-red-700 leading-relaxed">
              Heads up: this is an "Overhaul" playbook. By default it disables
              Windows Defender and automatic updates — untick those options in
              AME Wizard if you'd rather keep them. Back up before applying.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
