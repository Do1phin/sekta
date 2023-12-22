import type { ISelectProps } from './Select.types';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Select } from './index';

const meta: Meta<typeof Select> = {
  title: 'UI-Kit/Select',
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => <Select {...args} />,
};

const SelectorWithData = (args: ISelectProps) => {
  const data = [
    {
      icon: 'alien',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Донецк',
    },
    {
      icon: 'alert-octagon',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Луганск',
    },
    {
      icon: 'eye',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Одесса',
    },
    {
      icon: 'alien',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Донецк',
    },
    {
      icon: 'alert-octagon',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Луганск',
    },
    {
      icon: 'eye',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Одесса',
    },
    {
      icon: 'alien',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Донецк',
    },
    {
      icon: 'alert-octagon',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Луганск',
    },
    {
      icon: 'eye',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Одесса',
    },
    {
      icon: 'alien',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Донецк',
    },
    {
      icon: 'alert-octagon',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Луганск',
    },
    {
      icon: 'eye',
      subtitle: 'Подзаголовок',
      title: 'Заголовок',
      value: 'Одесса',
    },
  ];

  return <Select {...args} list={data} isOpen={false} isSearch={true} />;
};

export const Selector: Story = {
  render: (args) => <SelectorWithData {...args} />,
};
