import { useEffect, useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import './TimeSelect.scss';

type TimeSelectProps = {
  extended: boolean;
  setTime: (index: number) => void;
  color?: boolean;
};

export function TimeSelect({ extended, setTime, color }: TimeSelectProps) {
  const prefix = usePrefix();
  const [currentTime, setCurrentTime] = useState<number>(2);

  const items = [
    ...(extended ? [{ label: '1T', value: 0 }] : []),
    { label: '1W', value: 1 },
    { label: '1M', value: 2 },
    { label: '1J', value: 3 },
    ...(extended ? [{ label: 'All', value: 4 }] : []),
  ];

  useEffect(() => {
    if (setTime) {
      setTime(currentTime);
    }
  }, [currentTime, setTime]);


  //frage hier für jeden button label`?

  return (
    <div role='group' aria-label='zeitfenster auswahl' className={`${prefix}--timeSelect-wrapper ${extended ? 'extended' : ''}`}>
      {items.map((item) => (
        <button 
          aria-pressed={currentTime === item.value}
          key={item.value}
          className={`${prefix}--timeSelect-item ${currentTime === item.value ? 'active' : ''} ${color? 'negative' : ''}`}
          onClick={() => {
            setCurrentTime(item.value);
            console.log(item.value);
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
