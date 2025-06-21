export default function PublicProfilePage({ params }: { params: { username: string } }) {
  const sampleLinks = ['https://github.com/arhanansari', 'https://codewitharhan.infinityfreeapp.com'];

  return (
    <main className="flex flex-col items-center p-6">
      <img
        src="/avatar.png"
        alt="Avatar"
        className="w-24 h-24 rounded-full border mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">@{params.username}</h1>
      <p className="mb-6 text-gray-600">Full Stack Developer</p>

      {sampleLinks.map((link, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          className="bg-white shadow p-4 rounded w-full max-w-md text-center mb-4 hover:bg-gray-50"
        >
          {link}
        </a>
      ))}
    </main>
  );
}
