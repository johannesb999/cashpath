import type { Meta, StoryObj } from '@storybook/react';
import { TimeSelect } from './TimeSelect.tsx';

const meta: Meta<typeof TimeSelect> = {
  component: TimeSelect,
  title: 'Components/TimeSelect',
  argTypes: {
    extended: {
      control: 'boolean',
      description: 'Ob Day und Alltime angezeigt werden sollen oder nicht.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimeSelect>;

export const _TimeSelect: Story = {
  args: {
    extended: true,
  },
};
