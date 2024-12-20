import React, { ReactNode } from 'react'
import "./Button.scss"

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className='button-wrapper'>
        <button className="button-btn">
            {children}
        </button>
    </div>
  )
}

export default Button