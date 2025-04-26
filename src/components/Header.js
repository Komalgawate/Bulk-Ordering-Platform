import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between shadow-lg bg-white px-4 py-2 z-6">
            {/* Logo */}
            <a className="text-green-400 font-bold text-3xl" href="/">
                FreshBulk
            </a>

            {/* Main Navigation */}
            <nav className="flex gap-8 items-center text-gray-500 font-semibold">
                <Link href="/">Home</Link>
                <Link href="/catalog">Product Catalog</Link>
                <Link href="/track">Track Order</Link>
                <Link href="/admin">Admin</Link>
                <Link href="/login" className="bg-red-600 text-white px-4 py-2 rounded-2xl">
                    Login
                </Link>
            </nav>
        </header>
    );
}
