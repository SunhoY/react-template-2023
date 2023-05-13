import { action } from '@storybook/addon-actions';
import { type Meta, type StoryFn } from '@storybook/react';
import { type ComponentProps } from 'react';

import { MyButton } from './Button';

const meta: Meta<typeof MyButton> = {
  title: 'components/MyButton',
  component: MyButton,
};

export default meta;

const Template: StoryFn<typeof MyButton> = ({
  text,
  onClick,
}: ComponentProps<typeof MyButton>) => (
  <MyButton text={text} onClick={onClick} />
);

export const basic = Template.bind({});
basic.args = {
  text: 'Hello',
  onClick: action('click'),
};
