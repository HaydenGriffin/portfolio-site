import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title }: NavItemProps) => (
  <div className="p-2">
    <Link href={href}>
      <a>
        <h3>{title}</h3>
      </a>
    </Link>
  </div>
);

const Navigation = () => (
  <div>
    <div className="py-5 px-10 text-center">
      <div className="p-2">
        <img
          src="/images/profile.jpg"
          className="rounded-full"
          alt="Picture of me"
        />
      </div>
      <p className="text-2xl font-semibold pb-1">Hayden Griffin</p>
      <span className="inline-block align-middle">
        <svg
          className="fill-current text-gray-800 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
      </span>
      <span className="inline-block align-middle">Bournemouth, Dorset</span>
    </div>
    <div className="border-t-2 border-gray-400"></div>
    <ul>
      <NavItem title="Home" href="/" />
      <NavItem title="About" href="/about" />
    </ul>
  </div>
);

export default Navigation;
