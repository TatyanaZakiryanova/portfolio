import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`bg-button-default hover:bg-button-hover disabled:bg-button-disabled text-text-light rounded-lg border-none px-6 py-4 shadow-md transition duration-300 ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
