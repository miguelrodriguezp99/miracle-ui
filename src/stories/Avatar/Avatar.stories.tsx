import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { AvatarGroup as Group } from './AvatarGroup'; // Renamed the import to resolve the conflict
import { radii, sizes } from './constants';
import { semanticColors } from '../../lib/colors';
import React from 'react';

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

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};

export const AvatarGroup: Story = {
    render: () => (
        <Group animation='horizontal'> {/* Use the renamed import */}
            <Avatar name="John Doe" bordered />
            <Avatar name="John Doe" bordered />
            <Avatar name="John Doe" bordered />
        </Group>
    )
}

