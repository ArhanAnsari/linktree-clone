'use client';
import { useState } from 'react';
import { LinkCard } from '@/components/LinkCard';

export default function DashboardPage() {
  const [links, setLinks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addLink = () => {
    if (input.trim()) setLinks([...links, input]);
    setInput('');
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter your link"
        />
        <button onClick={addLink} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Link
        </button>
      </div>
      <div>
        {links.map((link, i) => <LinkCard key={i} link={link} />)}
      </div>
    </main>
  );
}