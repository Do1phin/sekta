import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  args: {
    label: 'Label',
  },
  component: Radio,
  title: 'UI-Kit/Radio',
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args) => <Radio {...args} />,
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: (args) => <Radio label={'some label'} {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => <Radio label={'some label'} {...args} />,
};
