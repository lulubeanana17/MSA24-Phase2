import type { Meta } from '@storybook/react';
import RequestCell from '@/components/RequestCell/RequestCell';

const meta = {
  title: 'RequestCell',
  component: RequestCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof RequestCell>;

export default meta;

export const Primary = {
  args: {
    borderColor: "primary",
    width: "18rem",
    height: "18rem",
    title: "Amenity delivery",
    location: "Room 0402",
    detail: "2 x toilet paper",
    urgency: "within 20 mins",
    department: "housekeeping",
    startTime: "15:39pm",
    progress: "Not Started"
  },
};
