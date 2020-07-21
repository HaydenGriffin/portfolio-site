import React, { Props } from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title }) => (
  <div className="mx-4">
    <Link href={href}>
      <a>
        <span>
          <p className="nav-item">{title}</p>
        </span>
      </a>
    </Link>
  </div>
);

const Navigation = () => (
  <nav className="flex flex-wrap fixed w-full bg-white border-b-4 border-gray-100 items-center justify-between">
    <div className="flex flex-row items-center justify-between">
      <span className="font-bold text-xl">
        <NavItem href="/" title="H"></NavItem>
      </span>
    </div>
    <div className="flex justify-end flex-row px-2 py-4">
      <NavItem href="about" title="About"></NavItem>
      <NavItem href="portfolio" title="Portfolio"></NavItem>
      <NavItem href="contact" title="Contact"></NavItem>
    </div>
  </nav>
);

export default Navigation;
