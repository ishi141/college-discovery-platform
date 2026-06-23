"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "@/services/api";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSignup(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Account Created");

      router.push("/login");

    } catch (err) {

  if (axios.isAxiosError(err)) {
    toast.error(err.response?.data?.message || "Signup Failed");
  } else {
    toast.error("Signup Failed");
  }

  console.log(err);

}
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSignup}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold mb-8">

          Signup

        </h1>

        <input
          placeholder="Full Name"
          className="w-full border rounded-lg p-3 mb-4"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full border rounded-lg p-3 mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white rounded-lg py-3"
        >

          Create Account

        </button>

      </form>

    </main>
  );
}