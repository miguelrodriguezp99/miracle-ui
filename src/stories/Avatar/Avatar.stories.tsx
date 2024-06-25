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

export const Primary: Story = {
    args: {
    },
};

