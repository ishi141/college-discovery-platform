"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const router = useRouter();

    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });

            login(res.data.token, res.data.user);

            toast.success("Login Successful");

            router.push("/");
        } catch (error) {
            toast.error("Invalid Credentials");
            console.log(error);
        }
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md"
            >

                <h1 className="text-4xl font-bold mb-8 text-center">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg p-3 mb-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg p-3 mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700"
                >
                    Login
                </button>
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Sign Up Now
                    </a>
                </p>

            </form>

        </main>
    );
}