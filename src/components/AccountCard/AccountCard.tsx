import { usePrefix } from '../../hooks/usePrefix';
import { useConvertValue } from '../../hooks/useConvertValue';
import './AccountCard.scss';

type AccountCardProps = {
  title: string;
  img: string;
  description?: string;
  balance: number;
  liquid?: boolean;
  total?: number;
};

export function AccountCard({ title, img, description, balance, total }: AccountCardProps) {

  const prefix = usePrefix();
  const convertValue = useConvertValue();

  return (
    <article className={`${prefix}--account-card`}>
      <div className={`${prefix}--account-card-content`}>
        <img src={img} className={`${prefix}--account-card-img`} alt=""></img>
        <div className={`${prefix}--account-card-text-content`}>
          <header className={`${prefix}--account-card-header`}>
            <h2 className={`${prefix}--account-card-title`}>
              {title}
            </h2>
            <span className={`${prefix}--account-card-description`}>{description}</span>
          </header>
          <div className={`${prefix}--account-price`}>
            <p className={`${prefix}--test`}>{convertValue(balance)}</p>
            {total &&
              <p className={`${prefix}--test total`}>{convertValue(total)}</p>
            }
          </div>
        </div>
      </div>
    </article>
  );
}
