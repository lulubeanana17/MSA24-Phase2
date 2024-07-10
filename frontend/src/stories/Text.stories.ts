import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Text from '../components/Text/Text';

const meta = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;

export const Primary = {
  args: {
    children: "text",
    color: "primary"
  },
};
