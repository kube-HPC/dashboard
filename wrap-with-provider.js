import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { ReusableProvider } from 'reusable';
import createStore from './src/state/store/createStore';

// Instantiating store in `wrapRootElement` handler ensures:
//  - there is fresh store for each SSR page
//  - it will be called only once in browser, when React mounts
const WrapWithProvider = ({ element }) => {
  const store = createStore();
  return (
    <Provider store={store}>
      <ReusableProvider>{element}</ReusableProvider>
    </Provider>
  );
};

WrapWithProvider.propTypes = {
  element: PropTypes.node.isRequired,
};

export default WrapWithProvider;
