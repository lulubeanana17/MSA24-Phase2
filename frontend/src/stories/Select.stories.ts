import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Select from "../components/Select/Select";

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;

export const Primary = {
  args: {
    options: []
  },
};
