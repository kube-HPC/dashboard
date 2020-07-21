import {useSocket} from '@hooks';
import {GlobalStyle} from '@styles';
import {Dashboard} from '@templates';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReusableProvider} from 'reusable';
import createStore from 'state/store/createStore';
import {ThemeProvider} from 'styled-components';
import 'tailwindcss/dist/base.css';
import 'typeface-rajdhani';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';

const store = createStore();

const App = () => {
  useSocket();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ReusableProvider>
        <ThemeProvider>
          <main>
            <Dashboard />
          </main>
        </ThemeProvider>
      </ReusableProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(`root`),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
