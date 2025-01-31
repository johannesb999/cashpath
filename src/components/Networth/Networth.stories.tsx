import type { Meta, StoryObj } from '@storybook/react';
import { Networth } from './Networth.tsx';
import Profile from '../../icons/Profile.svg';

const meta: Meta<typeof Networth> = {
  component: Networth,
  argTypes: {
    backImg: {
      control: 'text',
      description: 'Hintergrundbild/Profilbild.',
    },
    progress: {
      control: 'number',
      description: 'Das aktuelle Vermögen/Fortschritt zum Ziel.',
    },
    value: {
      control: 'number',
      description: 'Das Vermögen, dass man sich als Ziel gesetzt hat.',
    },
    size: {
      control: 'number',
      description: 'Die Größe der Komponente in rem.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Networth>;

export const _Networth: Story = {
  args: {
    backImg: Profile,
    progress: 32000,
    value: 1000000,
    size: 300,
  },
};
