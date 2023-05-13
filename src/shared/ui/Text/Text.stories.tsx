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
  render: (args) => (
    <Text state={args.state} fontSize={args.fontSize}>
      Default Text
    </Text>
  ),
};

export const TextSizes: Story = {
  args: {
    state: 'default',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text fontSize={'12px'} state={args.state}>
          Default Text
        </Text>
        <Text fontSize={'14px'} state={args.state}>
          Primary Text
        </Text>
        <Text fontSize={'16px'} state={args.state}>
          Success Text
        </Text>
      </div>
    </>
  ),
};

export const TextStates: Story = {
  args: {
    fontSize: '14px',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text fontSize={args.fontSize} state={'default'}>
          Default Text
        </Text>
        <Text fontSize={args.fontSize} state={'primary'}>
          Primary Text
        </Text>
        <Text fontSize={args.fontSize} state={'success'}>
          Success Text
        </Text>
        <Text fontSize={args.fontSize} state={'info'}>
          Info Text
        </Text>
        <Text fontSize={args.fontSize} state={'danger'}>
          Danger Text
        </Text>
        <Text fontSize={args.fontSize} state={'warning'}>
          Warning Text
        </Text>
      </div>
    </>
  ),
};
