import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { useSocket } from 'hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { ReusableProvider } from 'reusable';
import createStore from 'state/store/createStore';
import styled from 'styled-components';
import { GlobalStyle } from 'styles';
import 'tailwindcss/dist/base.css';
import 'typeface-rajdhani';
import { ThemeProvider } from '../src/components';
import { mixins } from '../src/styles';

const FillScreen = styled.div`
  ${mixins.fillScreen}
`;

const Container = ({ children }) => {
  useSocket();
  return <FillScreen>{children}</FillScreen>;
};

addDecorator(S => {
  const store = createStore();
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ReusableProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Container>
              <S />
            </Container>
          </ThemeProvider>
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
    selectedPanel: `storybook/dashboard/default`,
    sidebarAnimations: false,
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

// import { useSelector} from 'react-redux';
// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [[useSelector, 'useSelector']],
//     exclude: [/List/, /AutoSizer/],
//   });
// }
