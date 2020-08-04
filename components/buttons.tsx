import { PropsWithChildren, FC, MouseEvent } from 'react';
import Link from 'next/link';

type ButtonProps = {
  href: string;
};

type ButtonOnClickProps = {
  extraClasses?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const buttonClass = 'button';

const InternalButton: FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <Link href={href}>
    <button className={buttonClass}>{children}</button>
  </Link>
);

const ExternalButton: FC<PropsWithChildren<ButtonProps>> = ({
  href,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <a href={href}>
    <button className={buttonClass}>{children}</button>
  </a>
);

const OnClickButton: FC<PropsWithChildren<ButtonOnClickProps>> = ({
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
