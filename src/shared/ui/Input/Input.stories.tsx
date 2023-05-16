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
  render: (args) => <Input onChange={args.onChange} />,
};

export const InputStyles: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input onChange={args.onChange} style={'info'} />
        <Input onChange={args.onChange} style={'info'} label={'Label'} />
        <Input onChange={args.onChange} style={'info'} label={'Label'} helper={'Helper'} />
        <Input
          onChange={args.onChange}
          style={'info'}
          label={'Label'}
          helper={'Helper'}
          icon={'alien'}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input onChange={args.onChange} style={'danger'} />
        <Input onChange={args.onChange} style={'danger'} label={'Label'} />
        <Input onChange={args.onChange} style={'danger'} label={'Label'} helper={'Helper'} />
        <Input
          onChange={args.onChange}
          style={'danger'}
          label={'Label'}
          helper={'Helper'}
          icon={'alien'}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input onChange={args.onChange} style={'success'} />
        <Input onChange={args.onChange} style={'success'} label={'Label'} />
        <Input onChange={args.onChange} style={'success'} label={'Label'} helper={'Helper'} />
        <Input
          onChange={args.onChange}
          style={'success'}
          label={'Label'}
          helper={'Helper'}
          icon={'alien'}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input onChange={args.onChange} style={'warning'} />
        <Input onChange={args.onChange} style={'warning'} label={'Label'} />
        <Input onChange={args.onChange} style={'warning'} label={'Label'} helper={'Helper'} />
        <Input
          onChange={args.onChange}
          style={'warning'}
          label={'Label'}
          helper={'Helper'}
          icon={'alien'}
        />
      </div>
    </>
  ),
};

export const InputPlaceholder: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Input onChange={args.onChange} placeholder={'Placeholder'} style={'info'} />
        <Input
          onChange={args.onChange}
          placeholder={'Placeholder'}
          label={'Label'}
          style={'info'}
        />
        <Input
          helper={'Helper'}
          label={'Label'}
          onChange={args.onChange}
          placeholder={'Placeholder'}
          style={'info'}
        />
        <Input
          helper={'Helper'}
          label={'Label'}
          onChange={args.onChange}
          placeholder={'Placeholder'}
          icon={'alien'}
          style={'info'}
        />
      </div>
    </>
  ),
};
