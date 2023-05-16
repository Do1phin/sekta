import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  args: {
    isOpen: true,
    label: 'Modal Header',
    message:
      'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape.',
    onClose: () => alert('click'),
  },
  component: Modal,
  title: 'UI-Kit/Modal',
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => <Modal {...args} />,
};

export const ModalStyles: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Modal {...args} style={'info'} />
      <Modal {...args} style={'success'} />
      <Modal {...args} style={'danger'} />
      <Modal {...args} style={'warning'} />
    </div>
  ),
};

export const ModalStylesWithIcon: Story = {
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
      <Modal {...args} icon={'alert-circle'} style={'info'} />
      <Modal {...args} icon={'warning-circle'} style={'success'} />
      <Modal {...args} icon={'alert-triangle'} style={'danger'} />
      <Modal {...args} icon={'warning-diamond'} style={'warning'} />
    </div>
  ),
};
