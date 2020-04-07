import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from './CustomScrollbar.react';

const DEFAULT_DIV_HEIGHT = () => 24;

const SizerMemo = React.memo(AutoSizer);

const VirtualList = ({ className, children = null, itemSize = DEFAULT_DIV_HEIGHT, list = [] }) => {
  const listRef = useRef();
  const outerRef = useRef();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0, false);
    }
  }, [itemSize]);

  const ListFunc = useCallback(
    ({ height, width }) => (
      <List
        height={height}
        itemCount={list.length}
        itemSize={itemSize}
        width={width}
        itemData={list}
        ref={listRef}
        outerElementType={CustomScrollbarsVirtualList}
        outerRef={outerRef}>
        {children}
      </List>
    ),
    [children, itemSize, list],
  );

  return <SizerMemo className={className}>{ListFunc}</SizerMemo>;
};

VirtualList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object.isRequired,
  itemSize: PropTypes.func,
  list: PropTypes.array.isRequired,
};

export default VirtualList;
