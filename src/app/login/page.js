"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   function handleFormSubmit(ev) {
    ev.preventDefault();
    const response = fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

  }

  return (
    <section className="mt-10 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-center text-red-500 text-3xl font-bold mb-6">Login</h1>

        <form action="" className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        <div className="my-5 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          className="flex items-center justify-center gap-3 w-full border py-2 rounded-md bg-white hover:bg-gray-100 active:bg-blue-500 active:text-white transition duration-300 font-semibold"
        >
          <Image
            src="/google-logo.png"
            alt="Google logo"
            width={28}
            height={28}
          />
          Log in with Google
        </button>
      </div>
    </section>
  );
}
