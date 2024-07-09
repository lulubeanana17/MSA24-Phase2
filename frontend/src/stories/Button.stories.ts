import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

export const Primary = {
  args: {
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    fontColorHover: "#FFFFFF",
    backgroundColorHover: "#333333",
    label: 'Button',
  },
};
