import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import Stepper from "../components/Stepper/Stepper";

const meta = {
  title: 'Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Stepper>;

export default meta;

export const Primary = {
  args: {
    activeStep: 0,
    steps: ["1", "2", "3"]
  },
};
