import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { useSocket } from 'hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { ReusableProvider } from 'reusable';
import createStore from 'state/store/createStore';
import { GlobalStyle } from 'styles';
import 'tailwindcss/dist/base.css';
import 'typeface-rajdhani';
import {} from '../src/components';

const Container = ({ children }) => {
  useSocket();
  return children;
};

addDecorator(S => {
  const store = createStore();
  return (
    <Provider store={store}>
      <ReusableProvider>
        <GlobalStyle />
        <Container>
          <S />
        </Container>
      </ReusableProvider>
    </Provider>
  );
});

const theme = create({
  base: 'light',
  colorPrimary: 'hotpink',
  brandTitle: 'HKube Dashboard Storybook',
  brandUrl: 'https://dennisvash.dev',
  brandImage: `https://user-images.githubusercontent.com/27515937/76857209-e4951480-684c-11ea-8d65-434de9c4aaa8.png`,
});

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    selectedPanel: `templates-dashboard--default`,
    theme,
  },
});

// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.js$/), module);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
