import React, { ReactNode } from 'react'
import "./Button.scss"

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void; // Add onClick property
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className='button-wrapper'>
        <button className="button-btn" onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default Button