import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

import { semanticColors } from '../../lib/colors';


const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        color: {
            options: Object.values(semanticColors),
            control: { type: 'select' },
        },

    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

