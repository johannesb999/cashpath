import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './Progressbar';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    argTypes: {
        isValue: {
            control: { type: 'number', min: 0 },
            description: 'Der aktuelle Fortschrittswert.',
        },
        maxValue: {
            control: { type: 'number', min: 1 },
            description: 'Der maximale Wert für die Fortschrittsanzeige.',
        },
        showValue: {
            control: { type: 'boolean' },
            description: 'Entscheidet, ob der maximale Wert angezeigt wird.',
        },
        showPercent: {
            control: { type: 'boolean' },
            description: 'Entscheidet, ob der maximale Wert oder der Fortschritt in Prozent angezeigt wird.',
        },
        showLabel: {
            control: { type: 'boolean' },
            description: 'Zeigt das Prozent-Label neben der Fortschrittsanzeige an.',
        },
        remaining: {
            control: { type: 'boolean' },
            description: 'Zeigt die Differenz zwischen dem aktuellen Wert und dem maximalen Wert als separaten Abschnitt.',
        },
        barLabels: {
            control: { type: 'boolean' },
            description: 'Zeigt Beschriftungen über und unter der Fortschrittsanzeige (für aktuellen Wert und Differenz).',
        }
    },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        isValue: 72,
        maxValue: 210,
        showLabel: false,
        remaining: false,
        barLabels: false,
    },
};

export const Remaining: Story = {
    args: {
        isValue: 25,
        maxValue: 100,
        showLabel: true,
        remaining: true,
        barLabels: true,
    },
};
