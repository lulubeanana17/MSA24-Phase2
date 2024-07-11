import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Pagination from "../components/Pagination/PaginationControl"

const meta = {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Pagination>;

export default meta;

const onChange = () => {};

export const Primary = {
  args: {
    count: 10,
    page: 1,
    onChange: onChange
  },
};
