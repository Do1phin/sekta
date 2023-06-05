import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Tag } from './Tag';

const icons = ['alien'];

const meta: Meta<typeof Tag> = {
  argTypes: {
    icon: {
      control: 'select',
      description: 'Tag icon name from svg-sprite',
      options: [...icons],
    },
    iconPosition: {
      control: 'inline-radio',
      description: 'Tag value',
    },
    style: {
      control: 'select',
      defaultValue: 'basic',
      description: 'Tag state',
    },
  },
  args: {
    disabled: false,
  },
  component: Tag,
  decorators: [withDesign],
  title: 'UI-Kit/Tag',
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    style: 'basic',
    text: 'Basic Tag',
  },
  render: (args) => <Tag {...args} text={'Basic Tag'} />,
};

export const TagSizes: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'basic'} size={'small'} text={'Basic Tag'} />
        <Tag {...args} style={'primary'} size={'small'} text={'Primary Tag'} />
        <Tag {...args} style={'success'} size={'small'} text={'Success Tag'} />
        <Tag {...args} style={'info'} size={'small'} text={'Info Tag'} />
        <Tag {...args} style={'danger'} size={'small'} text={'Danger Tag'} />
        <Tag {...args} style={'warning'} size={'small'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'basic'} size={'normal'} text={'Basic Tag'} />
        <Tag {...args} style={'primary'} size={'normal'} text={'Primary Tag'} />
        <Tag {...args} style={'success'} size={'normal'} text={'Success Tag'} />
        <Tag {...args} style={'info'} size={'normal'} text={'Info Tag'} />
        <Tag {...args} style={'danger'} size={'normal'} text={'Danger Tag'} />
        <Tag {...args} style={'warning'} size={'normal'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Tag {...args} style={'basic'} size={'large'} text={'Basic Tag'} />
        <Tag {...args} style={'primary'} size={'large'} text={'Primary Tag'} />
        <Tag {...args} style={'success'} size={'large'} text={'Success Tag'} />
        <Tag {...args} style={'info'} size={'large'} text={'Info Tag'} />
        <Tag {...args} style={'danger'} size={'large'} text={'Danger Tag'} />
        <Tag {...args} style={'warning'} size={'large'} text={'Warning Tag'} />
      </div>
    </>
  ),
};

export const TagStyles: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'basic'} text={'Basic Tag'} />
        <Tag {...args} style={'basic'} text={'Basic Tag'} icon={'alien'} />
        <Tag {...args} style={'basic'} text={'Basic Tag'} icon={'alien'} iconPosition={'right'} />
      </div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'primary'} text={'Primary Tag'} />
        <Tag {...args} style={'primary'} text={'Primary Tag'} icon={'alien'} />
        <Tag
          {...args}
          style={'primary'}
          text={'Primary Tag'}
          icon={'alien'}
          iconPosition={'right'}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'success'} text={'Success Tag'} />
        <Tag {...args} style={'success'} text={'Success Tag'} icon={'alien'} />
        <Tag
          {...args}
          style={'success'}
          text={'Success Tag'}
          icon={'alien'}
          iconPosition={'right'}
        />
      </div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'info'} text={'Info Tag'} />
        <Tag {...args} style={'info'} text={'Info Tag'} icon={'alien'} />
        <Tag {...args} style={'info'} text={'Info Tag'} icon={'alien'} iconPosition={'right'} />
      </div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} style={'danger'} text={'Danger Tag'} />
        <Tag {...args} style={'danger'} text={'Danger Tag'} icon={'alien'} />
        <Tag {...args} style={'danger'} text={'Danger Tag'} icon={'alien'} iconPosition={'right'} />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Tag {...args} style={'warning'} text={'Warning Tag'} />
        <Tag {...args} style={'warning'} text={'Warning Tag'} icon={'alien'} />
        <Tag
          {...args}
          style={'warning'}
          text={'Warning Tag'}
          icon={'alien'}
          iconPosition={'right'}
        />
      </div>
    </>
  ),
};
