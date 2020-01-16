import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react';
import tw from 'tailwind.macro';
import {} from '../src/components/index';
import { GlobalStyle, mixins, styled } from '../src/styles';
import '../src/styles/globals.css';

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`h-screen border-2 border-black w-screen`}
  svg {
    ${tw`w-1/3 fill-current`}
  }
`;

addDecorator(S => (
  <>
    <GlobalStyle />
    <Container>
      <S />
    </Container>
  </>
));

const theme = create({
  base: 'light',
  colorPrimary: 'hotpink',
  brandTitle: 'DennisVash.com Storybook',
  brandUrl: 'https://dennisvash.com',
  brandImage:
    'https://user-images.githubusercontent.com/27515937/72454262-72567400-37b8-11ea-99bd-799c13c1638f.png',
});

addParameters({
  options: {
    showRoots: true,
    showPanel: false,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
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
