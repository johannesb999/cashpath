import React, { useEffect, useState } from 'react';
import { usePrefix } from '../../hooks/usePrefix';
import { useConvertValue } from '../../hooks/useConvertValue';
import './Budget.scss';

type BudgetProps = {
  icon: React.ReactNode;
  size: number;
  timeFrame: number;
  monthVal: number;
  weeklyProgress: number;
  monthlyProgress: number;
  yearlyProgress: number;
  title: string;
};

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function calculateTimeFrameProgress(timeFrame: number): number {
  const now = new Date();
  const day = now.getDate();
  const weekDay = now.getDay();
  const year = now.getFullYear();
  const month = now.getMonth();

  switch (timeFrame) {
    case 1:
      return parseFloat((Math.min(((weekDay || 7) - 1 + now.getHours() / 24) / 7, 1) * 100).toFixed(2));
    case 2:
      return parseFloat((Math.min((day + now.getHours() / 24) / getDaysInMonth(year, month), 1) * 100).toFixed(2));
    case 3:
      {
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year + 1, 0, 1);
        return parseFloat((Math.min((now.getTime() - startOfYear.getTime()) / (endOfYear.getTime() - startOfYear.getTime()), 1) * 100).toFixed(2));
      }
    default:
      return 0;
  }
}

export function Budget({ icon, weeklyProgress, monthlyProgress, yearlyProgress, monthVal, size, timeFrame, title }: BudgetProps): JSX.Element {
  const prefix = usePrefix();
  const convertValue = useConvertValue();
  const [progress, setProgress] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [timeProgress, setTimeProgress] = useState<number>(0);

  useEffect(() => {
    setTimeProgress(calculateTimeFrameProgress(timeFrame));

    const weeksCount = Math.round(getDaysInMonth(new Date().getFullYear(), new Date().getMonth()) / 7);
    const values = {
      1: { progress: weeklyProgress, value: Math.round(monthVal / weeksCount) },
      2: { progress: monthlyProgress, value: monthVal },
      3: { progress: yearlyProgress, value: monthVal * 12 },
    }[timeFrame] || { progress: 0, value: 0 };

    setProgress(values.progress);
    setValue(values.value);
  }, [timeFrame, weeklyProgress, monthlyProgress, yearlyProgress, monthVal]);

  const percentage = Math.min((progress / value) * 100, 100);

function getStrokeClass(perc: number): string {
  return perc <= timeProgress + 5
    ? `${prefix}--budget-circle-progress--good`
    : perc <= timeProgress + 10
    ? `${prefix}--budget-circle-progress--warning`
    : `${prefix}--budget-circle-progress--alert`;
}

  return (
    <article className={`${prefix}--budget-container`} aria-label={`Budget für ${title}`}>
      <div className={`${prefix}--budget`}>
        <svg className={`${prefix}--budget-chart`} width={size} height={size} viewBox="0 0 36 36" aria-labelledby={`${prefix}-budget-spent`}>
          <title id={`${prefix}-budget-spent`}>bisher {progress}€ ausgegeben</title>
          <circle className={`${prefix}--budget-circle-bg`} cx="18" cy="18" r="15.915" fill="none" strokeWidth="4" aria-hidden="true" />
          <circle
            className={`${prefix}--budget-circle-progress ${getStrokeClass(percentage)}`}
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            strokeWidth="4"
            strokeDasharray="100, 100"
            strokeDashoffset={`${100 - percentage}`}
            aria-hidden="true"
          />
        </svg>
        <div className={`${prefix}--budget-icon`} aria-hidden="true">{icon}</div>
      </div>
      <p className={`${prefix}--value-budget`}>{convertValue(value)}</p>
    </article>
  );
}
