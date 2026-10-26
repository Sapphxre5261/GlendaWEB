import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-6 py-32 text-white text-center">
      <h1 className="text-8xl font-bold text-red-700">404</h1>
      <p className="text-xl text-slate-300 font-light pt-6">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="inline-block bg-red-700 hover:bg-red-600 transition-colors font-semibold px-8 py-3 rounded-lg mt-10"
      >
        Back to Home
      </Link>
    </div>
  );
}
