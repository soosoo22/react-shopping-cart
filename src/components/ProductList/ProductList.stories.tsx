import type { Meta, StoryObj } from '@storybook/react';
import ProductList from './ProductList';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'ProductList',
  component: ProductList,
  decorators: [
    (Story) => {
      return (
        <RecoilRoot>
          <Router>
            <Story />
          </Router>
        </RecoilRoot>
      );
    },
  ],
} satisfies Meta<typeof ProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
