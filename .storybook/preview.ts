import '../src/tailwind.output.css';
import { addParameters } from '@storybook/react';

addParameters({
  options: {
    showPanel: true,
    sortStoriesByKind: true,
    panelPosition: 'bottom',
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
