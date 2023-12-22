import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CreateWaypoint } from './CreateWaypoint';

const meta: Meta<typeof CreateWaypoint> = {
  title: 'Features/CreateWaypoint/UI/CreateWaypoint',
};
export default meta;

type Story = StoryObj<typeof CreateWaypoint>;

export const Default: Story = {
  render: (args) => <CreateWaypoint {...args} />,
};
