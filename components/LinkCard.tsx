export function LinkCard({ link }: { link: string }) {
  return (
    <div className="bg-white shadow p-4 rounded mb-4 w-full text-center">
      <a href={link} className="text-blue-600 underline">{link}</a>
    </div>
  );
}