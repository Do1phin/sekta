import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AuthLayout } from './AuthLayout';
import { AuthPage } from '../../../../pages';

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  title: 'Features/Authorization',
};
export default meta;

type Story = StoryObj<typeof AuthLayout>;

export const Default: Story = {
  render: (args) => <AuthPage {...args} action={'register'} />,
};
