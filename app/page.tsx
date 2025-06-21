import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Linktree Clone</h1>
      <p className="mb-6">Share all your links with one profile. Built with Next.js 15.</p>
      <Link href="/login" className="bg-black text-white px-6 py-3 rounded hover:opacity-80">
        Get Started
      </Link>
    </main>
  );
}