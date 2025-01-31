import { usePrefix } from '../../hooks/usePrefix';
import { useConvertValue } from '../../hooks/useConvertValue';
import './GoalsCard.scss';
import { DragIndicatorOutlined } from '@mui/icons-material';
import { ProgressBar } from '../ProgressBar/Progressbar';

type GoalProps = {
  title: string;
  img: string;
  description: string;
  date: string;
  progress: number;
  price: number;
  remaining?: boolean;
  barLabels?: boolean;
  onClick?: () => void;
};

export function GoalsCard({ title, img, date, progress, price, onClick }: GoalProps) {

  const prefix = usePrefix();
  const convertValue = useConvertValue();

  return (
    <article className={`${prefix}--card`}>
      <button className={`${prefix}--card-content`} onClick={onClick}>
        <DragIndicatorOutlined />
        <img src={img} className={`${prefix}--card-img`} alt="" />
        <div className={`${prefix}--card-text-content`}>
          <header className={`${prefix}--card-header`}>
            <h2 className={`${prefix}--card-title`}>
              {title}
            </h2>
            <p className={`${prefix}--card-date`}>{date}</p>
          </header>

          <div className={`${prefix}--progress`}>

            <ProgressBar isValue={progress} maxValue={price} remaining={false} barLabels={false} showLabel={false} />
            <p className={`${prefix}--card-price`}>{convertValue(price)}</p>
          </div>
        </div>
      </button>
    </article>
  );
}
