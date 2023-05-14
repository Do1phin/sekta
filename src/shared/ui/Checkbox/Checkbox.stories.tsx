import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    checked: {
      description: 'desc',
    },
    disabled: {
      description: 'desc',
    },
  },
  args: {
    label: 'Label',
  },
  component: Checkbox,
  title: 'UI-Kit/Checkbox',
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: (args) => <Checkbox {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => <Checkbox {...args} />,
};
