import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';
import { AddOutlined } from '@mui/icons-material';
import ProfileImage from '../../icons/Profile.svg';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    children: {
      control: { type: 'object' },
      description: 'Inhalte des Buttons.',
    },
    round: {
      control: { type: 'boolean' },
      description: 'Entscheidet, ob der Button rund ist.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Ob der Button disabled ist.',
    },
    onClick: {
      control: false,
      description: 'Onclick Funktion.',
    },
  },
};
export default meta;


type Story = StoryObj<typeof Button>;

export const _Button: Story = {
  args: {
    children: <AddOutlined />,
  },
};
export const Text: Story = {
  args: {
    children: 'Add',
  },
};
export const Round: Story = {
  args: {
    children: <AddOutlined />,
    round: true,
  },
};
export const Home: Story = {
  args: {
    children: <img src={ProfileImage} alt="Profilepicture" />,
    round: true,
  },
};
export const Disabled: Story = {
  args: {
    children: 'Add',
    disabled: true,
  },
};
