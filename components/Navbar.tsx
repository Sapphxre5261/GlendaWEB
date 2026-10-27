"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { logout } from "@/app/login/actions";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <nav className="bg-white/70 text-slate-900 w-full sticky top-0 z-50 backdrop-blur-md border-b border-slate-200 px-4">

      <div className="flex justify-between items-center max-w-7xl w-full mx-auto py-2">

        <div className="flex gap-2 items-center">
          <Image
            src="/G-icon-removebg.png"
            alt="โลโก้ SVG"
            width={50}
            height={50}
          />
          <div className="text-slate-900 font-sans text-xl font-bold">
            Glenda
          </div>
        </div>

        <div className="flex gap-6 text-slate-600 font-medium text-base">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/playbook" className="hover:text-red-600 transition-colors">
            Playbook
          </Link>
          <Link href="/programs" className="hover:text-red-600 transition-colors">
            Programs
          </Link>
          <Link href="/docs" className="hover:text-red-600 transition-colors">
            Documentation
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <Link
              href="https://github.com/Sapphxre5261/GlendaOS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity block"
            >
              <Image
                src="/github-white-icon.svg"
                alt="GitHub Icon"
                width={30}
                height={30}
                className="invert"
              />
            </Link>
          </div>

          <div>
            <Link
              href="https://discord.gg/24teYVRrcC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity block"
            >
              <Image
                src="/discord-round-color-icon.svg"
                alt="Discord Icon"
                width={30}
                height={30}
              />
            </Link>
          </div>

          <form action={logout}>
            <button
              type="submit"
              className="text-sm font-medium text-slate-600 border border-slate-300 hover:border-red-400 hover:text-red-600 transition-colors px-4 py-1.5 rounded-lg"
            >
              Logout
            </button>
          </form>
        </div>

      </div>

    </nav>
  );
}
