import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { radius, sizes, variants, widths } from './constants';
import { semanticColors } from '../../lib/colors';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    color: {
      options: Object.values(semanticColors),
      control: { type: 'select' },
    },
    variant: {
      options: Object.values(variants),
      control: { type: 'select' },
    },
    size: {
      options: Object.values(sizes),
      control: { type: 'select' },
    },
    radius: {
      options: Object.values(radius),
      control: { type: 'select' },
    },
    width: {
      options: Object.values(widths),
      control: { type: 'select' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};

