import type { IAccordionProps } from './Accordion';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { useAppSelector } from '../../../app/store/hooks';
import { selectPermittedPlaces } from '../../../app/store/selectors/selectors';
import { Checkbox } from '../Checkbox/Checkbox';

const meta: Meta<typeof Accordion> = {
  title: 'UI-Kit/Accordion',
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      {/*<AccordionItem {...args} >{args.children}</AccordionItem>*/}
      {/*<AccordionItem {...args}>{args.children}</AccordionItem>*/}
      {/*<AccordionItem {...args}>{args.children}</AccordionItem>*/}
    </Accordion>
  ),
};

const AccordionWithData = (args: IAccordionProps) => {
  const permittedPlaces = useAppSelector(selectPermittedPlaces);

  return (
    <Accordion {...args}>
      <AccordionItem isOpen={false} isPreview={true} label={'Страны'} appendLabel={'Все страны'}>
        {Object.entries(permittedPlaces).map((place) => (
          <Checkbox
            checked={place[1]}
            key={place[0]}
            label={place[0]}
            onChange={() => alert(place[0])}
            value={place[0]}
          />
        ))}
      </AccordionItem>

      <AccordionItem isOpen={false} isPreview={false} label={'Страны'} appendLabel={'Все страны'}>
        {Object.entries(permittedPlaces).map((place) => (
          <Checkbox
            checked={place[1]}
            key={place[0]}
            label={place[0]}
            onChange={() => alert(place[0])}
            value={place[0]}
          />
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export const Accordion2: Story = {
  render: (args) => {
    return <AccordionWithData {...args}></AccordionWithData>;
  },
};
