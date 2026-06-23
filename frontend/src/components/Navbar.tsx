"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <Link href="/" className="text-2xl md:text-3xl font-bold">
            CollegeHub
          </Link>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-base font-medium">

            <Link href="/">Home</Link>

            <Link href="/compare">Compare</Link>

            <Link href="/predictor">Predictor</Link>

            <Link href="/discussion">Discussion</Link>

            <Link href="/saved">Saved</Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="hover:underline"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">Login</Link>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
}