import { addDecorator, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";
import { useSocket } from "hooks";
import React from "react";
import { Provider } from "react-redux";
import { ReusableProvider } from "reusable";
import createStore from "state/store/createStore";
import styled from "styled-components";
import { GlobalStyle } from "styles";
import "tailwindcss/dist/base.css";
import "typeface-rajdhani";
import "typeface-roboto";
import { ThemeProvider } from "../src/components";
import { mixins } from "../src/styles";

const DefaultDecorator = styled.div`
  ${mixins.fillScreen}
`;

const Container = ({ children }) => {
  useSocket();
  return <DefaultDecorator>{children}</DefaultDecorator>;
};

addDecorator((S) => {
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
  base: "light",
  brandTitle: "HKube Dashboard",
  brandUrl: "http://hkube.io/",
});

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    storySort: (a, b) => b[1].id.localeCompare(a[1].id),
    sidebarAnimations: false,
    theme,
  },
});

// import { useSelector} from 'react-redux';
// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [[useSelector, 'useSelector']],
//     exclude: [/List/, /AutoSizer/],
//   });
// }
