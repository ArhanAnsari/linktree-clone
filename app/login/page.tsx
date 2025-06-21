'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Login to Linktree</h2>
      <button
        onClick={() => signIn('github')}
        className="bg-black text-white px-6 py-3 rounded hover:opacity-80"
      >
        Sign in with GitHub
      </button>
    </main>
  );
}