import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Input } from './Input';

const icons = ['alien'];

const meta: Meta<typeof Input> = {
  argTypes: {
    icon: {
      control: 'select',
      description: 'Icon name from svg-sprite',
      options: [...icons],
    },
    placeholder: {
      description: 'Some text placeholder  for your Input element',
    },
    style: {
      control: 'select',
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
  component: Input,
  title: 'UI-Kit/Input',
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <Input
      {...args}
      onBlur={() => console.log('onBlur event')}
      onChange={() => console.log('onChange event')}
    />
  ),
};

export const InputStyles: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input {...args} style={'info'} />
        <Input {...args} style={'info'} label={'Label'} />
        <Input {...args} style={'info'} label={'Label'} helper={'Helper'} />
        <Input {...args} style={'info'} label={'Label'} helper={'Helper'} icon={'alien'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input {...args} style={'danger'} />
        <Input {...args} style={'danger'} label={'Label'} />
        <Input {...args} style={'danger'} label={'Label'} helper={'Helper'} />
        <Input {...args} style={'danger'} label={'Label'} helper={'Helper'} icon={'alien'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input {...args} style={'success'} />
        <Input {...args} style={'success'} label={'Label'} />
        <Input {...args} style={'success'} label={'Label'} helper={'Helper'} />
        <Input {...args} style={'success'} label={'Label'} helper={'Helper'} icon={'alien'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input {...args} style={'warning'} />
        <Input {...args} style={'warning'} label={'Label'} />
        <Input {...args} style={'warning'} label={'Label'} helper={'Helper'} />
        <Input {...args} style={'warning'} label={'Label'} helper={'Helper'} icon={'alien'} />
      </div>
    </>
  ),
};

export const InputPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
    style: 'info',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input {...args} />
        <Input {...args} label={'Label'} />
        <Input helper={'Helper'} label={'Label'} {...args} />
        <Input helper={'Helper'} label={'Label'} {...args} icon={'alien'} />
      </div>
    </>
  ),
};
