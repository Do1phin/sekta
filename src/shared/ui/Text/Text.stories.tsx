import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  argTypes: {
    style: {
      control: 'select',
      defaultValue: 'basic',
      description: 'Text style',
    },
  },
  component: Text,
  title: 'UI-Kit/Text',
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args}>Default Text</Text>,
};

export const TextSizes: Story = {
  args: {
    style: 'basic',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text {...args} fontSize={'12px'}>
          Default Text
        </Text>
        <Text {...args} fontSize={'14px'}>
          Primary Text
        </Text>
        <Text {...args} fontSize={'16px'}>
          Success Text
        </Text>
      </div>
    </>
  ),
};

export const TextStyles: Story = {
  args: {
    fontSize: '14px',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Text {...args} style={'basic'}>
          Default Text
        </Text>
        <Text {...args} style={'primary'}>
          Primary Text
        </Text>
        <Text {...args} style={'success'}>
          Success Text
        </Text>
        <Text {...args} style={'info'}>
          Info Text
        </Text>
        <Text {...args} style={'danger'}>
          Danger Text
        </Text>
        <Text {...args} style={'warning'}>
          Warning Text
        </Text>
      </div>
    </>
  ),
};
