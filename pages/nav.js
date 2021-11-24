import Link from 'next/link';
function Nav() {
    return (
        <ul className="nav">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            
        </ul>
    )
}

export default Nav
