import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="px-6 py-32 text-slate-900 text-center">
      <span className="inline-block text-sm font-medium tracking-widest uppercase text-red-600 border border-red-300 rounded-full px-4 py-1">
        Glenda Programs
      </span>
      <h1 className="text-7xl font-bold pt-8">
        Coming <span className="text-red-700">Soon</span>
      </h1>
      <p className="text-xl text-slate-600 font-light pt-6 max-w-xl mx-auto leading-relaxed">
        A hand-picked set of lightweight, open-source tools to go with your
        GlendaOS install is on the way.
      </p>
      <Link
        href="/"
        className="inline-block border border-slate-300 hover:border-slate-500 bg-white/60 transition-colors px-8 py-3 rounded-lg mt-10 text-slate-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
