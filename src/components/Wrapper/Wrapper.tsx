import { usePrefix } from '../../hooks/usePrefix';
import './Wrapper.scss';



type WrapperProps = {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {

  const prefix = usePrefix();

  return (
    <div className={`${prefix}--wrapper`}>
      {children}
    </div>
  )
}
