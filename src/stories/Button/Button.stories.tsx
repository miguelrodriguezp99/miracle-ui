import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { semanticColors } from '../../lib/colors';
import { radius, sizes, variants } from './constants';
import React from 'react';
import { CameraIcon } from '../../Icons/CameraIcon';
import { UserIcon } from '../../Icons/UserIcon';

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
    },

    endContent: {
      table: { disable: true },
    },

    startContent: {
      table: { disable: true },
    },
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
              Object.values(variants).map((variant, index) => (
                <Button
                  key={`${color}-${variant}-${index}`}
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



export const WithStartContent: Story = {
  args: {
    label: 'Delete user',
    startContent: <UserIcon />,
    variant: "bordered",
    color: "danger",
    radius: 'medium',
  },
};



export const WithEndContent: Story = {
  args: {
    label: 'Take a photo',
    endContent: <CameraIcon />,
    color: "success",
    radius: 'medium',
  },
};

export const WithIcon: Story = {
  args: {
    label: '',
    isIconOnly: true,
    endContent: <CameraIcon />,
    color: "success",
    radius: 'medium',
  },
};
