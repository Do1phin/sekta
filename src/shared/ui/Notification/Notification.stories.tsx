import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  args: {
    isOpen: true,
    label: 'Notification Label',
    message:
      'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape.',
    onClose: () => alert('click'),
  },
  component: Notification,
  title: 'UI-Kit/Notification',
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: (args) => <Notification {...args} />,
};

export const NotificationStyles: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Notification {...args} style={'info'} />
      <Notification {...args} style={'success'} />
      <Notification {...args} style={'danger'} />
      <Notification {...args} style={'warning'} />
    </div>
  ),
};

export const NotificationStylesWithIcon: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Notification {...args} icon={'alert-circle'} style={'info'} />
      <Notification {...args} icon={'warning-circle'} style={'success'} />
      <Notification {...args} icon={'alert-triangle'} style={'danger'} />
      <Notification {...args} icon={'warning-diamond'} style={'warning'} />
    </div>
  ),
};
