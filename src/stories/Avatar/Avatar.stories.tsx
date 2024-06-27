import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { radii, sizes } from './constants';
import { semanticColors } from '../../lib/colors';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: Object.values(sizes),
            control: { type: 'select' },
        },
        color: {
            options: Object.values(semanticColors),
            control: { type: 'select' },
        },
        radius: {
            options: Object.values(radii),
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

export const WithText: Story = {
    args: {
        name: "John Doe",
    },
};

export const WithImage: Story = {
    args: {
        avatar: "./src/stories/assets/hero-card-complete.jpeg",
    },
};

export const WithBorder: Story = {
    args: {
        bordered: true,
    },
};


