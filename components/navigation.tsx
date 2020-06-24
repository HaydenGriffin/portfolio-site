import React, { PropsWithChildren } from 'react';
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

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  href,
  title,
  children,
}: PropsWithChildren<NavItemProps>) => (
  <Link href={href}>
    <a>
      <li className="py-3 pl-6 hover:bg-gray-200">
        <span className="inline-block align-middle pr-4">{children}</span>
        <span className="inline-block align-middle">
          <h3>{title}</h3>
        </span>
      </li>
    </a>
  </Link>
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
        <Location className="fill-current text-gray-800" />
      </span>
      <span className="inline-block align-middle">Bournemouth, Dorset</span>
    </div>
    <div className="border-t-2 border-gray-400 pb-2" />
    <ul className="grid grid-cols-1">
      <NavItem title="Home" href="/">
        <Home className="svg-icon" />
      </NavItem>
      <NavItem title="About" href="/about">
        <Person className="svg-icon" />
      </NavItem>
      <NavItem title="Portfolio" href="/portfolio">
        <Code className="svg-icon" />
      </NavItem>
      <div className="border-t-2 border-gray-400 pt-2 mt-2" />
      <NavItem title="Contact" href="/contact">
        <Mail className="svg-icon" />
      </NavItem>
    </ul>
  </div>
);

export default Navigation;
