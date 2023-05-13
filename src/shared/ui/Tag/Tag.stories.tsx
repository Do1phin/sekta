import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Tag } from './Tag';

const icons = ['alien'];

const componentStates = ['default', 'primary', 'success', 'info', 'danger', 'warning'];

const meta: Meta<typeof Tag> = {
  argTypes: {
    args: {
      text: 'my text',
    },
    icon: {
      control: 'select',
      description: 'Tag icon name from svg-sprite',
      options: [...icons],
    },
    iconPosition: {
      control: 'inline-radio',
      description: 'Tag value',
    },
    state: {
      control: 'select',
      defaultValue: 'default',
      description: 'Tag state',
      options: [...componentStates],
    },
  },
  args: {
    state: 'default',
  },
  component: Tag,
  decorators: [withDesign],
  title: 'UI-Kit/Tag',
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    state: 'default',
    text: 'Default Tag',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => <Tag {...args}>Default Tag</Tag>,
};

export const TagStates: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tag {...args} state={'default'} text={'Default Tag'} />
      <Tag {...args} state={'primary'} text={'Primary Tag'} />
      <Tag {...args} state={'success'} text={'Success Tag'} />
      <Tag {...args} state={'info'} text={'Info Tag'} />
      <Tag {...args} state={'danger'} text={'Danger Tag'} />
      <Tag {...args} state={'warning'} text={'Warning Tag'} />
    </div>
  ),
};

export const TagStatesWithLeftIcon: Story = {
  args: {
    icon: 'alien',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tag {...args} icon={'alien'} state={'default'} text={'Default Tag'} />
      <Tag {...args} icon={'alien'} state={'primary'} text={'Primary Tag'} />
      <Tag {...args} icon={'alien'} state={'success'} text={'Success Tag'} />
      <Tag {...args} icon={'alien'} state={'info'} text={'Info Tag'} />
      <Tag {...args} icon={'alien'} state={'danger'} text={'Danger Tag'} />
      <Tag {...args} icon={'alien'} state={'warning'} text={'Warning Tag'} />
    </div>
  ),
};

export const TagStatesWithRightIcon: Story = {
  args: {
    icon: 'alien',
    iconPosition: 'right',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tag {...args} state={'default'} text={'Default Tag'} />
      <Tag {...args} state={'primary'} text={'Primary Tag'} />
      <Tag {...args} state={'success'} text={'Success Tag'} />
      <Tag {...args} state={'info'} text={'Info Tag'} />
      <Tag {...args} state={'danger'} text={'Danger Tag'} />
      <Tag {...args} state={'warning'} text={'Warning Tag'} />
    </div>
  ),
};

export const TagSizes: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} state={'default'} size={'small'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'small'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'small'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'small'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'small'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'small'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} state={'default'} size={'normal'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'normal'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'normal'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'normal'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'normal'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'normal'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Tag {...args} state={'default'} size={'large'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'large'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'large'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'large'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'large'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'large'} text={'Warning Tag'} />
      </div>
    </>
  ),
};

export const TagSizesWithIcon: Story = {
  args: {
    icon: 'alien',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    design: [
      {
        accessToken: process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        name: 'DESIGN',
        type: 'figspec',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
      {
        type: 'link',
        url: 'https://www.figma.com/file/l9Dr10AwifoYc9q5JkONKP/Transport-and-Logistics-Webflow-Website-Template-(Community)-(Copy)?node-id=1-4060&t=VT5SWV96RkD3Jk6F-4',
      },
    ],
  },
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} state={'default'} size={'small'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'small'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'small'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'small'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'small'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'small'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <Tag {...args} state={'default'} size={'normal'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'normal'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'normal'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'normal'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'normal'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'normal'} text={'Warning Tag'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Tag {...args} state={'default'} size={'large'} text={'Default Tag'} />
        <Tag {...args} state={'primary'} size={'large'} text={'Primary Tag'} />
        <Tag {...args} state={'success'} size={'large'} text={'Success Tag'} />
        <Tag {...args} state={'info'} size={'large'} text={'Info Tag'} />
        <Tag {...args} state={'danger'} size={'large'} text={'Danger Tag'} />
        <Tag {...args} state={'warning'} size={'large'} text={'Warning Tag'} />
      </div>
    </>
  ),
};
