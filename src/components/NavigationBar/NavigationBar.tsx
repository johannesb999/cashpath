import { useEffect, useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import './NavigationBar.scss';

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  url: string;
  isActive: boolean;
  position: boolean;
};

type NavigationBarProps = {
  items: NavigationItemProps[];
  setCurrentPage: (index: number) => void;
  top: boolean;
  reset: boolean;
  setActiveBar: (index: number) => void;
};

export function NavigationBar({ items, setCurrentPage, top, reset, setActiveBar }: NavigationBarProps) {
  const prefix = usePrefix();
  const [activeIndex, setActiveIndex] = useState<number | null>(items.findIndex(item => item.isActive));

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setCurrentPage(top? index + 4 : index + 1);
    setActiveBar(top? 1 : 2);
  };

  useEffect(() => {
    if(reset) setActiveIndex(null);
  }, [reset])
  

  return (
    <div role="tablist" className={`${prefix}--navigation-bar`}>
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          {...item}
          isActive={index === activeIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
