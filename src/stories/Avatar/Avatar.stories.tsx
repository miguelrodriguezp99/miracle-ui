import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { } from './constants';
import { } from '../../lib/colors';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
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


