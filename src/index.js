import {ThemeProvider} from '@components';
import {useSocket} from '@hooks';
import {GlobalStyle} from '@styles';
import {Dashboard} from '@templates';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReusableProvider} from 'reusable';
import createStore from 'state/store/createStore';
import 'tailwindcss/dist/base.css';
import 'typeface-rajdhani';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';

const store = createStore();

const App = () => {
  useSocket();
  return (
    <>
      <GlobalStyle />
      <main>
        <Dashboard />
      </main>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReusableProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReusableProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById(`root`),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
