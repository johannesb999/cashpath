import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';


const meta: Meta<typeof Chart> = {
  component: Chart,
  title: 'Components/Chart',
  argTypes: {
    data: {
      control: 'object',
      description: 'Zeitreihendaten zur Portfolio-Performance.',
    },
    isValue: {
      control: 'number',
      description: 'Aktueller Wert des Portfolio (zur Farbgebung der Linie).',
    },
    payedValue: {
      control: 'number',
      description: 'Investierter Betrag.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {
    period: 1,
    isValue: 110,
    payedValue: 100,
  },
};
