export function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between">
      <span className="font-bold text-xl">LinkTree</span>
      <div>
        <a href="/dashboard" className="mr-4">Dashboard</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}