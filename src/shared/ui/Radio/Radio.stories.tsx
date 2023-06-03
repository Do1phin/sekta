import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Radio } from './Radio';
import { IRadioProps } from './Radio.types';

const meta: Meta<typeof Radio> = {
  args: {
    label: 'Label',
  },
  component: Radio,
  title: 'UI-Kit/Radio',
};
export default meta;

type Story = StoryObj<typeof Radio>;

const RadioWithHooks = (args: IRadioProps) => {
  const [checked, setChecked] = useState(false);

  return <Radio {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Default: Story = {
  render: (args) => <RadioWithHooks {...args} value={'value'} />,
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
