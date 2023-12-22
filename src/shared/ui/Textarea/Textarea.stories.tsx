import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    value: {
      control: 'text',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BlWGslXMm6orA9moN7cwlb/Sekta-UI-Kit-(Copy)?type=design&node-id=25-24455&mode=design',
    },
  },
  title: 'UI-Kit/Textarea',
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};
