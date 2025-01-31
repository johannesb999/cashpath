import { usePrefix } from '../../hooks/usePrefix';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  round?: boolean;
  onClick?: () => void;
}

export function Button({ children, disabled, round, onClick }: ButtonProps) {

  const prefix = usePrefix();

  return (
    <button onClick={onClick} className={`${prefix}--button ${round ? 'round' : ''}`} disabled={disabled}>
      {children}
    </button>
  )
}
