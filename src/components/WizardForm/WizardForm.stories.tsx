import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import WizardForm from './WizardForm';

const meta: Meta<typeof WizardForm> = {
  title: 'Components/WizardForm',
  component: WizardForm,
};

export default meta;
type Story = StoryObj<typeof WizardForm>;

export const Default: Story = {
  args: {},
};
