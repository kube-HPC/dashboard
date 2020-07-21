import {addDecorator, addParameters} from '@storybook/react';
import {useSocket} from 'hooks';
import React from 'react';
import {Provider} from 'react-redux';
import {ReusableProvider} from 'reusable';
import createStore from 'state/store/createStore';
import styled from 'styled-components';
import {GlobalStyle} from 'styles';
import 'tailwindcss/dist/base.css';
import tw from 'twin.macro';
import 'typeface-rajdhani';
import 'typeface-roboto';
import {ThemeProvider} from '../src/components';

const DefaultDecorator = styled.div`
  ${tw`h-screen`}
`;

const Container = ({children}) => {
  useSocket();
  return <DefaultDecorator>{children}</DefaultDecorator>;
};

const decorator = Story => {
  const store = createStore();
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ReusableProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Container>
              <Story />
            </Container>
          </ThemeProvider>
        </ReusableProvider>
      </Provider>
    </React.StrictMode>
  );
};

const parameter = {
  options: {
    showRoots: true,
    showPanel: false,
    storySort: (a, b) => b[1].id.localeCompare(a[1].id),
    sidebarAnimations: false,
  },
};

addParameters(parameter);
addDecorator(decorator);

// import { useSelector} from 'react-redux';
// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [[useSelector, 'useSelector']],
//     exclude: [/List/, /AutoSizer/],
//   });
// }
