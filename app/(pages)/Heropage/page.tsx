import React from 'react';
import Link from 'next/link';

export default function HeroPage() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 flex flex-col h-screen">
      <nav className="bg-white py-6 px-8 flex justify-between items-center">
        <Link href="/"
           className="text-xl font-bold text-gray-800">Rekonsys
        </Link>
        <ul className="flex space-x-6">
          {/*<li><Link href="/" className="text-gray-800">Home</Link></li>
          <li><Link href="/about" className="text-gray-800">Dashboard</Link></li>*/}
            {/*<Link href="/Dashboard">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</button>
        </Link>*/}
          <li><Link href="/services" className="text-gray-800">Services</Link></li>
          <li><Link href="/contact" className="text-gray-800">Contact</Link></li>
        </ul>
      </nav>
      <header className="flex-grow flex flex-col justify-center items-center px-8">
        <h1 className="text-5xl font-bold text-white text-center mb-8">Rekonsys software</h1>
        <p className="text-white text-lg text-center mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis lobortis sapien, eu tincidunt metus semper eget. Sed at malesuada arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <Link href="/get-started">
          <button className="text-lg bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg font-bold shadow-md">Get started</button>
        </Link>
      </header>
    </div>
  );
}
