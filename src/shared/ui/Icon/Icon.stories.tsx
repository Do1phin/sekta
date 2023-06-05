import { Story } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  args: {
    icon: 'alien',
    style: 'basic',
  },
  component: Icon,
  title: 'UI-Kit/Icons',
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  argTypes: {
    icon: {
      defaultValue: 'mega',
    },
  },
  args: {
    icon: 'alien',
    size: 'normal',
  },
  render: (args) => <Icon {...args} />,
};

export const IconStyles: Story = {
  args: {
    icon: 'alien',
  },
  render: (args) => (
    <div className='icons' style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Icon {...args} size={'mega'} style={'basic'} />
      <Icon {...args} size={'mega'} style={'primary'} />
      <Icon {...args} size={'mega'} style={'success'} />
      <Icon {...args} size={'mega'} style={'info'} />
      <Icon {...args} size={'mega'} style={'danger'} />
      <Icon {...args} size={'mega'} style={'warning'} />
    </div>
  ),
};

export const IconSizes: Story = {
  args: {
    icon: 'alien',
  },
  render: (args) => (
    <div className='icons' style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Icon {...args} size={'small'} />
      <Icon {...args} size={'normal'} />
      <Icon {...args} size={'large'} />
      <Icon {...args} size={'extra-large'} />
      <Icon {...args} size={'mega'} />
    </div>
  ),
};

export const AllIcons: Story = {
  args: {
    size: 'mega',
    style: 'primary',
  },
  render: (args) => (
    <div className='icons' style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Icon {...args} icon={'alien'} />
      <Icon {...args} icon={'x'} />
      <Icon {...args} icon={'alert-circle'} />
      <Icon {...args} icon={'alert-octagon'} />
      <Icon {...args} icon={'alert-triangle'} />
      <Icon {...args} icon={'warning-circle'} />
      <Icon {...args} icon={'warning-diamond'} />
      <Icon {...args} icon={'caret-down'} />
      <Icon {...args} icon={'eye'} />
      <Icon {...args} icon={'vec'} />
    </div>
  ),
};
