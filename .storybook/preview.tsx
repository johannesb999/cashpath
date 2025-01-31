import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import './styles.scss';

function Frame({ children, globals }) {
  const { theme, direction } = globals;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.style.backgroundColor = '#0D0D0D'; // Black for dark theme
      document.documentElement.style.color = '#FFFFFF'; // Optional: Text color for contrast
    } else {
      document.documentElement.style.backgroundColor = '#FFFFFF'; // White for light theme
      document.documentElement.style.color = '#0D0D0D'; // Optional: Text color for contrast
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
  }, [direction]);

  return children;
}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        iphone16: {
          name: 'iPhone 16',
          styles: {
            width: '393px',
            height: '852px',
          },
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        const aCat = a.title.split('/')[0];
        const bCat = b.title.split('/')[0];

        if (aCat !== bCat) {
          const priority = ['intro', 'guidelines', 'components'];

          return priority.indexOf(aCat) > priority.indexOf(bCat) ? 1 : -1;
        }

        if (a.type !== b.type) {
          const priority = ['docs', 'story'];

          return priority.indexOf(a.type) > priority.indexOf(b.type) ? 1 : -1;
        }

        return a.title.localeCompare(b.title);
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Change in which theme the stories are previewed',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        {
          value: 'light',
          title: 'Light',
        },
        {
          value: 'dark',
          title: 'Dark',
        },
      ],
    },
  },
  direction: {
    name: 'Direction',
    description: 'Change the text directionality',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'paragraph',
      items: [
        {
          value: 'ltr',
          title: 'LTR',
          right: '→',
        },
        {
          value: 'rtl',
          title: 'RTL',
          right: '←',
        },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <Frame globals={context.globals}>
        <Story {...context} />
      </Frame>
    );
  },
];

export default preview;
