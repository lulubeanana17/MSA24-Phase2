import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import TextField from "../components/TextField/TextField";

const meta = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;

export const Primary = {
  args: {
  },
};
