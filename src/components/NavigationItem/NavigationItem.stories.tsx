import type { Meta, StoryObj } from '@storybook/react';
import { NavigationItem } from './NavigationItem';
import { AccountBalanceOutlined, PaymentsOutlined } from '@mui/icons-material';

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/NavigationItem',
  component: NavigationItem,
  argTypes: {
    icon: {
      control: false,
      description: 'Das Bild, dass angezeigt wird.',
    },
    label: {
      control: 'text',
      description: 'Das Label, dass die Seite Beschreibt.',
    },
    url: {
      control: 'text',
      description: 'Der Pfad, zu dem verlinkt wird.',
    },
    isActive: {
      control: 'boolean',
      description: 'Ob das NavItem aktuell als aktiv geladen wird.',
    },
    position: {
      control: 'boolean',
      description: 'Ob das NavItem am oberen oder unteren Bildschirmrand ist (Unterschiedliche Farbe).',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationItem>;

export const Bottom: Story = {
  args: {
    icon: <AccountBalanceOutlined />,
    label: 'Konten',
    url: '/',
    isActive: false,
    position: false,
  },
};

export const Top: Story = {
  args: {
    icon: <PaymentsOutlined />,
    label: 'Budgets',
    url: '/favorites',
    isActive: true,
    position: true,
  },
};
