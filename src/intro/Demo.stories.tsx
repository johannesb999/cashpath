import type { Meta, StoryObj } from '@storybook/react';
import { Demo } from './Demo';

const meta: Meta<typeof Demo> = {
  component: Demo,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const _Demo: Story = {};
