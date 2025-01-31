import type { Meta, StoryObj } from '@storybook/react';
import { AccountCard } from './AccountCard.tsx';
import Image from '../../icons/n26.svg';
import Netflix from '../../icons/netflix.svg';
import './AccountCard.scss';

const meta: Meta<typeof AccountCard> = {
  component: AccountCard,
  title: 'Components/AccountCard',
  argTypes: {
    title: {
      tsType: { summary: "number" },
      control: { type: 'text' },
      description: 'Name des Ziels.',
    },
    img: {
      control: { type: 'object' },
      description: 'Bild des Ziels.',
    },
    description: {
      control: { type: 'text' },
      description: 'Beschreibung des Ziels.',
    },
    balance: {
      control: { type: 'number' },
      description: 'Preis des Ziels.',
    },
  },
};
export default meta;


type Story = StoryObj<typeof AccountCard>;

export const Default: Story = {
  args: {
    title: 'N26',
    img: Image,
    description: 'IBAN: DE25********5385',
    balance: 1300,
    liquid: true,
  },
};
export const Fixkosten: Story = {
  args: {
    title: 'Netflix',
    img: Netflix,
    description: 'künbar bis 15.02.25',
    balance: 1300,
    total: 200,
  },
};
