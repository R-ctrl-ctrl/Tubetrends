import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Tubetrends</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/comparision">comparison</Link>
      <Link href="/channel">channels</Link>
    </nav>
  );
}

export default Navbar;