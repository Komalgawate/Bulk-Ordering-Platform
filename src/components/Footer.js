import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} FreshBulk. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="./Contact.js" className="hover:underline">Contact</Link>
          <Link href="/order/new" className="hover:underline">Order</Link>
        </div>
      </div>
    </footer>
  );
}
