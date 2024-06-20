import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'; // Asegúrate de que la ruta sea correcta
import { semanticColors } from '../../lib/colors';
import { radius, sizes, variants } from './constants';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: semanticColors,
      control: { type: 'select' },
    },
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    radius: {
      options: radius,
      control: { type: 'select' },
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const IsDisabled: Story = {
  args: {
    label: 'Button',
    isDisabled: true,
  },
};

export const DisabledRipple: Story = {
  args: {
    label: 'Button',
    disabledRipple: true,
  },
};
