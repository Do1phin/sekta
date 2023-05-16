import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'UI-Kit/Text',
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => <Text>Default Text</Text>,
};

export const TextSizes: Story = {
  args: {
    style: 'default',
  },
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text fontSize={'12px'}>Default Text</Text>
        <Text fontSize={'14px'}>Primary Text</Text>
        <Text fontSize={'16px'}>Success Text</Text>
      </div>
    </>
  ),
};

export const TextStyles: Story = {
  args: {
    fontSize: '14px',
  },
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text style={'default'}>Default Text</Text>
        <Text style={'primary'}>Primary Text</Text>
        <Text style={'success'}>Success Text</Text>
        <Text style={'info'}>Info Text</Text>
        <Text style={'danger'}>Danger Text</Text>
        <Text style={'warning'}>Warning Text</Text>
      </div>
    </>
  ),
};
