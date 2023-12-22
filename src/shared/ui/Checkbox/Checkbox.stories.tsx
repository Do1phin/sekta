import type { ICheckboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Checkbox } from './Checkbox';
// @ts-ignore
import icon from '../../icons/house.svg';

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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BlWGslXMm6orA9moN7cwlb/Sekta-UI-Kit-(Copy)?type=design&node-id=1016-458&mode=design&t=xE44ChNIGeMwD1rz-4',
    },
  },
  title: 'UI-Kit/Checkbox',
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxWithHooks = (args: ICheckboxProps) => {
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
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Checkbox {...args} />
        <Checkbox {...args} icon={icon} />
      </div>
    </>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Checkbox {...args} />
        <Checkbox {...args} icon={icon} />
      </div>
    </>
  ),
};
