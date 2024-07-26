import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Loading from '@/components/Loading/Loading';

const meta = {
  title: 'Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Loading>;

export default meta;

export const Primary = {
  
};
