import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DeleteWaypointBtn } from './DeleteWaypointBtn';

const meta: Meta<typeof DeleteWaypointBtn> = {
  component: DeleteWaypointBtn,
  title: 'Features/DeleteWaypoint/UI/DeleteWaypointBtn',
};
export default meta;

type Story = StoryObj<typeof DeleteWaypointBtn>;

export const Default: Story = {
  render: (args) => <DeleteWaypointBtn {...args} />,
};
