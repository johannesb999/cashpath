import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';
import { Payments, AccountBalanceOutlined, BarChartOutlined, WatchOutlined, CreditCardOutlined, DescriptionOutlined} from '@mui/icons-material';

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  title: 'Components/NavigationBar',
  argTypes: {
    items: {
      control: 'object',
      description: 'Ein Array mit den verschiedenen Navitems. Siehe NavigationItem',
      table: {
        type: {
          summary: 'Array<{ icon: JSX.Element, label: string, url: string, isActive: boolean, position: boolean }>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Bottom: Story = {
  args: {
    items: [
      { icon: <AccountBalanceOutlined />, label: 'Konten', url: '/', isActive: false, position: false },
      { icon: <BarChartOutlined />, label: 'Anlagen', url: '/favorites', isActive: true, position: false },
      { icon: <WatchOutlined />, label: 'Objekte', url: '/favorites', isActive: false, position: false },
    ],
  },
};

export const Top: Story = {
  args: {
    items: [
      { icon: <DescriptionOutlined />, label: 'Fixkosten', url: '/settings', isActive: false, position: true },
      { icon: <Payments />, label: 'Budgets', url: '/dashboard', isActive: false, position: true },
      { icon: <CreditCardOutlined />, label: 'Kredite', url: '/settings', isActive: true, position: true },
    ],
  },
};
