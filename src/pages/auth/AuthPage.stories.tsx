import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AuthPage } from './AuthPage';

const meta: Meta<typeof AuthPage> = {
  component: AuthPage,
  title: 'Pages/AuthPage',
};
export default meta;

type Story = StoryObj<typeof AuthPage>;

export const Default: Story = {
  render: (args) => <AuthPage {...args} action={'login'} />,
};

export const Register: Story = {
  render: (args) => <AuthPage {...args} action={'register'} />,
};

export const Login: Story = {
  render: (args) => <AuthPage {...args} action={'login'} />,
};
