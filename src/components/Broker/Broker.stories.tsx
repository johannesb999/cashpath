import type { Meta, StoryObj } from '@storybook/react';
import { Broker } from './Broker';
import Bison from '../../icons/image-1.svg';
import C24 from '../../icons/image-2.svg';
import Trade from '../../icons/image.svg';

const meta: Meta<typeof Broker> = {
  component: Broker,
  title: 'Components/Broker',
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Inhallte des Elements.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Broker>;
export const _Broker: Story = {
  args: {
    items: [
      { src: Bison, description: 'Bison-broker' },
      { src: C24, description: 'C24-broker' },
      { src: Trade, description: 'Trade-broker' },
    ],
  },
};
