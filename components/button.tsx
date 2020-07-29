import { PropsWithChildren, Props, ReactChild, ReactChildren } from 'react';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
}

const InternalButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <Link href={href}>
    <button className="button">{children}</button>
  </Link>
);

const ExternalButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <a href={href}>
    <button className="button">{children}</button>
  </a>
);

export { InternalButton, ExternalButton };
