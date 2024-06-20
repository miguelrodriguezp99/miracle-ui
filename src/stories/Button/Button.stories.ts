import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'; // Asegúrate de que la ruta sea correcta
import { semanticColors } from '../../lib/colors';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: semanticColors,
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define your stories
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
  },
};
