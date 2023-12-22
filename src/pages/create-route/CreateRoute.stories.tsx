import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { CreateRoutePage } from './CreateRoute';

const meta: Meta<typeof CreateRoutePage> = {
  component: CreateRoutePage,
  title: 'Pages/CreateRoute',
};
export default meta;

type Story = StoryObj<typeof CreateRoutePage>;

export const Default: Story = {
  render: (args) => <CreateRoutePage {...args} />,
};
