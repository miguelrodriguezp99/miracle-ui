import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { semanticColors } from '../../lib/colors';
import { radius, sizes, variants } from './constants';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

export const Example: Story = {
  args: {
    label: 'Button',
  },
};

export const GroupButtons: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',

    }}>
      {
        Object.values(semanticColors).map((color) => (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
          }}>
            {
              Object.values(variants).map((variant) => (
                <Button
                  key={`${color}-${variant}`}
                  color={color}
                  variant={variant}
                  label="Button"
                />

              ))
            }
          </div>
        ))
      }
    </div>
  ),
};


