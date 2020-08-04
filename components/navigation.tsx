import { useContext, FC } from 'react';
import Link from 'next/link';
import { ThemeContext } from './theme-provider';

type NavItemProps = {
  href: string;
  title: string;
};

const NavItem: FC<NavItemProps> = ({ href, title }) => (
  <div className="mx-4">
    <Link href={href}>
      <a>
        <p className="nav-item">{title}</p>
      </a>
    </Link>
  </div>
);

const Navigation: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex flex-wrap fixed w-full bg-white border-b-4 border-gray-100 items-center justify-between h-16">
      <div className="flex flex-row items-center justify-between">
        <span className="font-bold text-xl">
          <NavItem href="/" title="H"></NavItem>
        </span>
      </div>
      <div className="flex justify-end flex-row px-2 py-4">
        <a onClick={toggleTheme}>
          <p className="nav-item">{theme}</p>
        </a>
        <NavItem href="/about" title="About"></NavItem>
        <NavItem href="/portfolio" title="Portfolio"></NavItem>
        <NavItem href="/contact" title="Contact"></NavItem>
      </div>
    </nav>
  );
};

export default Navigation;
