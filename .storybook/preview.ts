import type { Preview } from '@storybook/react-webpack5'
import '../src/index.css'; // 👈 Make sure this line is present

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;