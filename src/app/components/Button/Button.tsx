import React, { ReactNode } from 'react'
import Link from 'next/link'
import "./Button.scss"

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ children, onClick, href, className }: ButtonProps) => {
  const buttonClassName = className ? `button-btn ${className}` : 'button-btn';

  if (href) {
    return (
      <div className="button-wrapper">
        <Link href={href} className={buttonClassName}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className="button-wrapper">
      <button className={buttonClassName} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button