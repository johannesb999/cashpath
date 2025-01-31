import { usePrefix } from '../../hooks/usePrefix';
import './Broker.scss';
import { Button } from '../Button/Button';

type BrokerProps = {
  items: {
    src: string;
    description: string;
  }[];
};

export function Broker({ items }: BrokerProps) {
  const prefix = usePrefix();

  return (
    <section className={`${prefix}--broker`}>
      <h2 >Broker</h2>
      <div className={`${prefix}--broker-wrapper`}>
        <div className={`${prefix}--broker-container`} role="list">
          {items.map((item, index) => (
            <img
            key={index}
            className={`${prefix}--broker-img`}
            src={item.src}
            alt={`Logo von ${item.description}`}
            role="listitem"
            />
          ))}
        </div>
        {/* button kein lsititem -styling überprüfen */}
        <Button aria-label="Add a new broker" children='+' round={true}></Button>
      </div>
    </section>
  );
}
