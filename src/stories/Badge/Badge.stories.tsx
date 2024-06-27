import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { radii, variants } from './constants';
import { semanticColors } from '../../lib/colors';
import Avatar from '../Avatar';
import React from 'react';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        color: {
            options: Object.values(semanticColors),
            control: { type: 'select' },
        },
        radius: {
            options: Object.values(radii),
            control: { type: 'select' },
        },
        variant: {
            options: Object.values(variants),
            control: { type: 'select' },
        },
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Avatar radius="lg" avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        isCircular: false,
        badgeContent: "2",
        bordered: true,
    },
};

export const Circular: Story = {
    args: {
        children: <Avatar radius="full" avatar="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
        isCircular: true,
        badgeContent: "2",
        bordered: true,
    },
};

