import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
  };

  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    // Check if it's an external link
    if (href.startsWith('http')) {
      return (
        <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    
    // Internal link using React Router
    return (
      <Link to={href} className={allClasses}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;