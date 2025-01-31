import { useEffect, useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import './NavigationItem.scss';

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  url: string;
  isActive: boolean;
  position: boolean;
  onClick?: () => void;
};

export function NavigationItem({ icon, label, isActive, position, onClick }: NavigationItemProps) {

  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive])
  
  
  const prefix = usePrefix();


  return (
    <button
      role="tab"
      aria-controls={`${label.toLowerCase()}-panel`} // Links to the panel
      id={`${label.toLowerCase()}-tab`} // Unique ID for the tab
      aria-selected={active}
      // href={url}
      className={`${prefix}--navigation-item ${position ? 'top' : 'bottom'} ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className='icon'>{icon}</span>
      <span className="label">{label}</span>
    </button>
  );
}
