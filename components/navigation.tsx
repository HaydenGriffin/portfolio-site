import React, { Props } from 'react';
import Link from 'next/link';
import Location from '~/public/svg/location.svg';
import Home from '~/public/svg/home.svg';
import Person from '~/public/svg/person.svg';
import Code from '~/public/svg/code.svg';
import Mail from '~/public/svg/mail.svg';

interface NavItemProps {
  href: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, title }) => (
  <div className="mx-4">
    <Link href={href}>
      <a>
        <span>
          <h3>{title}</h3>
        </span>
      </a>
    </Link>
  </div>
);

const Navigation = () => (
  <nav className="flex flex-row items-center p-4 flex-shrink-0 border-b-4 border-gray-100">
    <div className="flex-grow justify-left">
      <span className="font-bold text-xl">
        <NavItem href="/" title="H"></NavItem>
      </span>
    </div>
    <NavItem href="about" title="About"></NavItem>
    <NavItem href="portfolio" title="Portfolio"></NavItem>
    <NavItem href="contact" title="Contact"></NavItem>
  </nav>
);

export default Navigation;
