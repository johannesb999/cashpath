import type { Meta, StoryObj } from '@storybook/react';
import { GoalsCard } from './GoalsCard.tsx';
import Image from '../../icons/tesla.svg';

const meta: Meta<typeof GoalsCard> = {
  component: GoalsCard,
  title: 'Components/GoalsCard',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Name des Ziels.',
    },
    img: {
      control: { type: 'text' },
      description: 'Die src des Bildes.',
    },
    description: {
      control: { type: 'text' },
      description: 'Beschreibung des Ziels.',
    },
    date: {
      control: { type: 'text' },
      description: 'Datum bis zu dem das Ziel erreicht wird.',
    },
    progress: {
      progress: { control: { type: 'range', min: 0, max: 100 } },
      description: 'Wie viel Prozent man von dem Ziel erreicht hat.',
    },
    price: {
      control: { type: 'text' },
      description: 'Der Gesamtpreis des Ziels.',
    },
  },
};
export default meta;


type Story = StoryObj<typeof GoalsCard>;

export const Default: Story = {
  args: {
    title: 'Lorem Ipsum',
    img: Image, //<img src={Image} alt="Black circle" className={`cashpath--card-image`} />,
    description: 'Lorem Ipsum dolor sit. ',
    date: 'wahrsch. bis xxxx',
    progress: 60,
    price: 1300,
  },
};
