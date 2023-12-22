import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MapContainer } from './MapContainer';

const meta: Meta<typeof MapContainer> = {
  component: MapContainer,
  title: 'Entities/MapContainer',
};
export default meta;

type Story = StoryObj<typeof MapContainer>;

export const Default: Story = {
  render: (args) => <MapContainer {...args} />,
};
