import { usePrefix } from '../../hooks/usePrefix';
import { useConvertValue } from '../../hooks/useConvertValue';

import './Networth.scss';

type NetworthProps = {
  backImg: string;
  progress: number;
  value: number;
  size: number;
};

export function Networth({ backImg, progress, value, size }: NetworthProps) {
  const prefix = usePrefix();
  const convertValue = useConvertValue();

  const percentage = Math.min((progress / value) * 100, 100);

  return (
    <article
      className={`${prefix}--networth-container`}
      aria-label={`Dein Nettowert beträgt ${convertValue(progress)} und entspricht ${percentage.toFixed(2)}% deines Gesamtziels von ${convertValue(value)}.`}
    >
      <div
        className={`${prefix}--networth`}
        role="img"
      >
        <svg
          className={`${prefix}--networth-chart`}
          width={size}
          height={size}
          viewBox="0 0 36 36"
          role='img'
          aria-hidden="true"
        >
          <circle
            className={`${prefix}--networth-circle-bg`}
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            strokeWidth="5"
          />
          <circle
            className={`${prefix}--networth-circle-progress`}
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            strokeWidth="5"
            strokeDasharray="100, 100"
            strokeDashoffset={`${100 - percentage}`}
          />
        </svg>
        <div className={`${prefix}--networth-icon`}>
          <img
            src={backImg}
            alt="Profilbild"
            className={`${prefix}--networth-img`}
          />
        </div>
      </div>
      <p className={`${prefix}--value`} aria-hidden="true">
        {convertValue(value)}
      </p>
    </article>
  );
}
