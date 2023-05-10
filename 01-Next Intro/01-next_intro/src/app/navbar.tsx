import Link from 'next/link';

interface navbarProp {
    homeName : string
    aboutName : string
}

export default function Navbar({homeName, aboutName} : navbarProp) {
    return (
        <div>
            <Link href="/">{homeName}</Link>
            <Link href="/about">{aboutName}</Link>
        </div>
    );
  }