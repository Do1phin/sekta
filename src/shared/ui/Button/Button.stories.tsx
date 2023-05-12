import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../index';

const icons = ['alien'];

const meta: Meta<typeof Button> = {
  argTypes: {
    icon: {
      control: 'select',
      description: 'Tag icon name from svg-sprite',
      options: [...icons],
    },
  },
  args: {
    text: 'Primary Button',
  },
  component: Button,
  title: 'UI-Kit/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    state: 'primary',
  },
  render: (args) => <Button {...args}>Primary Button</Button>,
};

export const ButtonSizes: Story = {
  args: {
    state: 'primary',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} size={'small'}>
          Primary Button
        </Button>
        <Button {...args} size={'normal'}>
          Primary Button
        </Button>
        <Button {...args} size={'large'}>
          Primary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'secondary'} size={'small'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'normal'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'large'}>
          Secondary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'tertiary'} size={'small'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'normal'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'large'}>
          Tertiary Button
        </Button>
      </div>
    </>
  ),
};

export const ButtonSizesWithLeftIcon: Story = {
  args: {
    icon: 'alien',
    state: 'primary',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} size={'small'}>
          Primary Button
        </Button>
        <Button {...args} size={'normal'}>
          Primary Button
        </Button>
        <Button {...args} size={'large'}>
          Primary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'secondary'} size={'small'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'normal'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'large'}>
          Secondary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'tertiary'} size={'small'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'normal'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'large'}>
          Tertiary Button
        </Button>
      </div>
    </>
  ),
};

export const ButtonSizesWithRightIcon: Story = {
  args: {
    icon: 'alien',
    iconPosition: 'right',
    state: 'primary',
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} size={'small'}>
          Primary Button
        </Button>
        <Button {...args} size={'normal'}>
          Primary Button
        </Button>
        <Button {...args} size={'large'}>
          Primary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'secondary'} size={'small'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'normal'}>
          Secondary Button
        </Button>
        <Button {...args} state={'secondary'} size={'large'}>
          Secondary Button
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Button {...args} state={'tertiary'} size={'small'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'normal'}>
          Tertiary Button
        </Button>
        <Button {...args} state={'tertiary'} size={'large'}>
          Tertiary Button
        </Button>
      </div>
    </>
  ),
};
