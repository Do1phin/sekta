import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Route } from './Route';

const meta: Meta<typeof Route> = {
  component: Route,
  title: 'Widgets/Route',
};
export default meta;

type Story = StoryObj<typeof Route>;

export const Default: Story = {
  render: (args) => <Route {...args} />,
};
