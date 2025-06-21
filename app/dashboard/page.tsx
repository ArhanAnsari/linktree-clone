'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [links, setLinks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input) setLinks([...links, input]);
    setInput('');
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border w-full p-2 mb-4"
        placeholder="Paste your link"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Add Link
      </button>

      {links.map((link, index) => (
        <div key={index} className="bg-white shadow p-4 rounded mb-3 text-center">
          <a href={link} target="_blank" className="text-blue-600 underline">{link}</a>
        </div>
      ))}

      <div className="mt-6 text-center">
        <Link href={`/codewitharhan`} className="text-sm underline text-gray-700">View your public profile</Link>
      </div>
    </main>
  );
}
