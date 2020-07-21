import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Thumb from '../Scrollbar/Thumb.react';

// https://codesandbox.io/s/t4352
const CustomScrollbars = ({ onScroll, forwardedRef, style, children }) => {
  const refSetter = useCallback(
    scrollbarsRef => forwardedRef(scrollbarsRef ? scrollbarsRef.view : null),
    [forwardedRef],
  );

  return (
    <Scrollbars
      ref={refSetter}
      autoHide
      style={{ ...style, overflow: `hidden` }}
      onScroll={onScroll}
      renderThumbHorizontal={Thumb}
      renderThumbVertical={Thumb}>
      {children}
    </Scrollbars>
  );
};

const CustomScrollbarsVirtualList = React.forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
));

CustomScrollbars.propTypes = {
  onScroll: PropTypes.func,
  forwardedRef: PropTypes.func.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
};

CustomScrollbarsVirtualList.displayName = `Custom Scrollbar`;

export default CustomScrollbarsVirtualList;
