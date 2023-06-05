import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Checkbox } from './Checkbox';
import { ICheckbox } from './Checkbox.types';

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

const CheckboxWithHooks = (args: ICheckbox) => {
  const [checked, setChecked] = useState(false);

  return <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Default: Story = {
  render: (args) => <CheckboxWithHooks {...args} />,
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
