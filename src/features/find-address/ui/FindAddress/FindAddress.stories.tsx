import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { FindAddress } from './FindAddress';

const meta: Meta<typeof FindAddress> = {
  title: 'Features/FindAddress/UI/FindAddress',
};
export default meta;

type Story = StoryObj<typeof FindAddress>;

export const Default: Story = {
  render: (args) => <FindAddress {...args} />,
};
