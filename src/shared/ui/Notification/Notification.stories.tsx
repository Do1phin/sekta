import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  args: {
    header: 'Notification Header',
    isOpen: true,
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

export const NotificationsWithoutIcon: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Notification {...args} state={'primary'} />
      <Notification {...args} state={'info'} />
      <Notification {...args} state={'success'} />
      <Notification {...args} state={'danger'} />
      <Notification {...args} state={'warning'} />
    </div>
  ),
};

export const NotificationsWithIcon: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Notification {...args} icon={'alert-circle'} state={'primary'} />
      <Notification {...args} icon={'alert-circle'} state={'info'} />
      <Notification {...args} icon={'warning-circle'} state={'success'} />
      <Notification {...args} icon={'alert-triangle'} state={'danger'} />
      <Notification {...args} icon={'warning-diamond'} state={'warning'} />
    </div>
  ),
};
