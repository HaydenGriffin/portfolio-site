import { PropsWithChildren, Props, ReactChild, ReactChildren } from 'react';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
}

interface ButtonOnClickProps {
  extraClasses?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonClass = 'button';

const InternalButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <Link href={href}>
    <button className={buttonClass}>{children}</button>
  </Link>
);

const ExternalButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <a href={href}>
    <button className={buttonClass}>{children}</button>
  </a>
);

const OnClickButton: React.FC<PropsWithChildren<ButtonOnClickProps>> = ({
  extraClasses,
  onClick,
  children,
}: PropsWithChildren<ButtonOnClickProps>) => (
  <button
    className={
      extraClasses ? `${buttonClass} ${extraClasses}` : `${buttonClass}`
    }
    onClick={onClick}
  >
    {children}
  </button>
);

export { InternalButton, ExternalButton, OnClickButton };
