import { useEffect, useRef, useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import './Chart.scss';
import { dayData, weekData, monthData, yearData, yearHalfData } from './fakeData';

type ChartProps = {
  data: object;
  period?: number;
  isValue?: number;
  payedValue?: number;
  onclick?: () => void;
};

export function Chart({ period = 0, isValue = 80, payedValue = 100, onclick }: ChartProps) {
  const prefix = usePrefix();
  const chartRef = useRef<SVGSVGElement>(null);

  const [path, setPath] = useState('');

  const isGood = (isValue >= payedValue);
  const strokeClass = isGood ? `${prefix}--chart--good` : `${prefix}--chart--warning`;


  const p = Math.max(0, Math.min(period, 4));
  let values: number[] = [];
  switch (p) {
    case 0: values = dayData; break;
    case 1: values = weekData; break;
    case 2: values = monthData; break;
    case 3: values = yearData; break;
    case 4: values = yearHalfData; break;
    default: values = dayData;
  }

  if (values.length > 0) {
    values = [...values];
    values[values.length - 1] = isValue ?? 80;
  }

  useEffect(() => {
    if (!chartRef.current) return;

    const n = values.length;
    if (n === 0) {
      setPath('');
      return;
    }

    const xStep = n > 1 ? 200 / (n - 1) : 0;

    const topMargin = 10;
    const bottomMargin = 10;

    const startY = calcY(values[0], topMargin, bottomMargin);
    let d = `M 0,${startY}`;

    let prevX = 0;
    let prevY = startY;

    for (let i = 1; i < n; i++) {
      const x = i * xStep;
      const y = calcY(values[i], topMargin, bottomMargin);

      const midX = (prevX + x) / 2;
      d += ` Q ${midX},${prevY} ${x},${y}`;

      prevX = x;
      prevY = y;
    }

    setPath(d);
  }, [values]);

  return (
    <button className={`${prefix}--chart__container`}
      onClick={onclick}>

      <svg
        role="img"
        ref={chartRef}
        className={`${prefix}--chart`}
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-label="Stock chart"
      >
        <path
          d={path}
          fill="none"
          strokeWidth="3"
          className={strokeClass}
        />
      </svg>
    </button>
  );
}


function calcY(val: number, topMargin: number, bottomMargin: number) {
  return (200 - bottomMargin) - val;
}
