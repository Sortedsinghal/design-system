import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5'; // ✅ Correct for CRA/Webpack
import DataTable from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {},
};
