import type { Meta, StoryObj } from '@storybook/react';
import { Budget } from './Budget.tsx';
import { ShoppingCartOutlined } from '@mui/icons-material';

const meta: Meta<typeof Budget> = {
  component: Budget,
  title: 'Components/Budget',
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'verwendetes Icon.',
    },
    size: {
      control: { type: 'number' },
      description: 'Die Größe der Komponente.',
    },
    timeFrame: {
      control: { type: 'number' },
      description: 'Zeitfenster das angezeigt wird [Week|Mont|Year].',
    },
    monthVal: {
      control: { type: 'number' },
      description: 'Budget für den Monat (wird für Woche und Jahr berechnet).',
    },
    weeklyProgress: {
      control: { type: 'number' },
      description: 'Wie viel diese Woche ausgegeben wurde.',
    },
    monthlyProgress: {
      control: { type: 'number' },
      description: 'Wie viel diesn Monat ausgegeben wurde.',
    },
    yearlyProgress: {
      control: { type: 'number' },
      description: 'Wie viel dieses Jahr ausgegeben wurde.',
    },
    title: {
      control: { type: 'text' },
      description: 'Für was das Budget ist',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Budget>;

export const _Budget: Story = {
  args: {
    icon: <ShoppingCartOutlined />,
    size: 80,
    timeFrame: 1,
    monthVal: 350,
    weeklyProgress: 80,
    monthlyProgress: 200,
    yearlyProgress: 2600,
    title: 'shopping',
  },
};
