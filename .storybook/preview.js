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
    <React.StrictMode>
      <Provider store={store}>
        <ReusableProvider>
          <GlobalStyle />
          <Container>
            <S />
          </Container>
        </ReusableProvider>
      </Provider>
    </React.StrictMode>
  );
});

const theme = create({
  base: 'light',
  brandTitle: 'HKube Dashboard',
  brandUrl: 'http://hkube.io/',
});

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    storySort: (a, b) => b[1].id.localeCompare(a[1].id),
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
