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
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BlWGslXMm6orA9moN7cwlb/Sekta-UI-Kit-(Copy)?type=design&node-id=1006-439&mode=design&t=xE44ChNIGeMwD1rz-4',
    },
  },
  title: 'UI-Kit/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default button',
    type: 'primary',
  },
  render: (args) => <Button {...args}>Default Button</Button>,
};

export const ButtonSizes: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'primary'} text={'Small Size'} size={'small'} />
        <Button {...args} type={'primary'} text={'Normal Size'} size={'normal'} />
        <Button {...args} type={'primary'} text={'Large Size'} size={'large'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} icon={'alien'} type={'primary'} text={'Small Size'} size={'small'} />
        <Button {...args} icon={'alien'} type={'primary'} text={'Normal Size'} size={'normal'} />
        <Button {...args} icon={'alien'} type={'primary'} text={'Large Size'} size={'large'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} icon={'alien'} type={'primary'} size={'small'} />
        <Button {...args} icon={'alien'} type={'primary'} size={'normal'} />
        <Button {...args} icon={'alien'} type={'primary'} size={'large'} />
      </div>
    </>
  ),
};

export const ButtonTypes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
      <Button {...args} type={'primary'} text={'Primary Icon'} size={'normal'} />
      <Button {...args} type={'secondary'} text={'Secondary Icon'} size={'normal'} />
      <Button {...args} type={'tertiary'} text={'Tertiary Icon'} size={'normal'} />
    </div>
  ),
};

export const ButtonStyles: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'primary'} text={'Info Primary'} style={'info'} />
        <Button {...args} type={'primary'} text={'Info Primary'} style={'info'} />
        <Button {...args} type={'primary'} text={'Info Primary'} style={'info'} />
        <Button {...args} icon={'alien'} type={'primary'} text={'Info Primary'} style={'info'} />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'primary'}
          text={'Info Primary'}
          style={'info'}
        />
        <Button {...args} icon={'alien'} type={'primary'} style={'info'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'secondary'} text={'Info Secondary'} style={'info'} />
        <Button {...args} type={'secondary'} text={'Info Secondary'} style={'info'} />
        <Button {...args} type={'secondary'} text={'Info Secondary'} style={'info'} />
        <Button
          {...args}
          icon={'alien'}
          type={'secondary'}
          text={'Info Secondary'}
          style={'info'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'secondary'}
          text={'Info Secondary'}
          style={'info'}
        />
        <Button {...args} icon={'alien'} type={'secondary'} style={'info'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'tertiary'} text={'Info Tertiary'} style={'info'} />
        <Button {...args} type={'tertiary'} text={'Info Tertiary'} style={'info'} />
        <Button {...args} type={'tertiary'} text={'Info Tertiary'} style={'info'} />
        <Button {...args} icon={'alien'} type={'tertiary'} text={'Info Tertiary'} style={'info'} />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'tertiary'}
          text={'Info Tertiary'}
          style={'info'}
        />
        <Button {...args} icon={'alien'} type={'tertiary'} style={'info'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'primary'} text={'Success Primary'} style={'success'} />
        <Button {...args} type={'primary'} text={'Success Primary'} style={'success'} />
        <Button {...args} type={'primary'} text={'Success Primary'} style={'success'} />
        <Button
          {...args}
          icon={'alien'}
          type={'primary'}
          text={'Success Primary'}
          style={'success'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'primary'}
          text={'Success Primary'}
          style={'success'}
        />
        <Button {...args} icon={'alien'} type={'primary'} style={'success'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'secondary'} text={'Success Secondary'} style={'success'} />
        <Button {...args} type={'secondary'} text={'Success Secondary'} style={'success'} />
        <Button {...args} type={'secondary'} text={'Success Secondary'} style={'success'} />
        <Button
          {...args}
          icon={'alien'}
          type={'secondary'}
          text={'Success Secondary'}
          style={'success'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'secondary'}
          text={'Success Secondary'}
          style={'success'}
        />
        <Button {...args} icon={'alien'} type={'secondary'} style={'success'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'tertiary'} text={'Success Tertiary'} style={'success'} />
        <Button {...args} type={'tertiary'} text={'Success Tertiary'} style={'success'} />
        <Button {...args} type={'tertiary'} text={'Success Tertiary'} style={'success'} />
        <Button
          {...args}
          icon={'alien'}
          type={'tertiary'}
          text={'Success Tertiary'}
          style={'success'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'tertiary'}
          text={'Success Tertiary'}
          style={'success'}
        />
        <Button {...args} icon={'alien'} type={'tertiary'} style={'success'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'primary'} text={'Danger Primary'} style={'danger'} />
        <Button {...args} type={'primary'} text={'Danger Primary'} style={'danger'} />
        <Button {...args} type={'primary'} text={'Danger Primary'} style={'danger'} />
        <Button
          {...args}
          icon={'alien'}
          type={'primary'}
          text={'Danger Primary'}
          style={'danger'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'primary'}
          text={'Danger Primary'}
          style={'danger'}
        />
        <Button {...args} icon={'alien'} type={'primary'} style={'danger'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'secondary'} text={'Danger Secondary'} style={'danger'} />
        <Button {...args} type={'secondary'} text={'Danger Secondary'} style={'danger'} />
        <Button {...args} type={'secondary'} text={'Danger Secondary'} style={'danger'} />
        <Button
          {...args}
          icon={'alien'}
          type={'secondary'}
          text={'Danger Secondary'}
          style={'danger'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'secondary'}
          text={'Danger Secondary'}
          style={'danger'}
        />
        <Button {...args} icon={'alien'} type={'secondary'} style={'danger'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'tertiary'} text={'Danger Tertiary'} style={'danger'} />
        <Button {...args} type={'tertiary'} text={'Danger Tertiary'} style={'danger'} />
        <Button {...args} type={'tertiary'} text={'Danger Tertiary'} style={'danger'} />
        <Button
          {...args}
          icon={'alien'}
          type={'tertiary'}
          text={'Danger Tertiary'}
          style={'danger'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'tertiary'}
          text={'Danger Tertiary'}
          style={'danger'}
        />
        <Button {...args} icon={'alien'} type={'tertiary'} style={'danger'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'primary'} text={'Warning Primary'} style={'warning'} />
        <Button {...args} type={'primary'} text={'Warning Primary'} style={'warning'} />
        <Button {...args} type={'primary'} text={'Warning Primary'} style={'warning'} />
        <Button
          {...args}
          icon={'alien'}
          type={'primary'}
          text={'Warning Primary'}
          style={'warning'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'primary'}
          text={'Warning Primary'}
          style={'warning'}
        />
        <Button {...args} icon={'alien'} type={'primary'} style={'warning'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'secondary'} text={'Warning Secondary'} style={'warning'} />
        <Button {...args} type={'secondary'} text={'Warning Secondary'} style={'warning'} />
        <Button {...args} type={'secondary'} text={'Warning Secondary'} style={'warning'} />
        <Button
          {...args}
          icon={'alien'}
          type={'secondary'}
          text={'Warning Secondary'}
          style={'warning'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'secondary'}
          text={'Warning Secondary'}
          style={'warning'}
        />
        <Button {...args} icon={'alien'} type={'secondary'} style={'warning'} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button {...args} type={'tertiary'} text={'Warning Tertiary'} style={'warning'} />
        <Button {...args} type={'tertiary'} text={'Warning Tertiary'} style={'warning'} />
        <Button {...args} type={'tertiary'} text={'Warning Tertiary'} style={'warning'} />
        <Button
          {...args}
          icon={'alien'}
          type={'tertiary'}
          text={'Warning Tertiary'}
          style={'warning'}
        />
        <Button
          {...args}
          icon={'alien'}
          iconPosition={'right'}
          type={'tertiary'}
          text={'Warning Tertiary'}
          style={'warning'}
        />
        <Button {...args} icon={'alien'} type={'tertiary'} style={'warning'} />
      </div>
    </>
  ),
};
