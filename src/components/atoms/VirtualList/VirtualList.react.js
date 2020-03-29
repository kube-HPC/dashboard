import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import CustomScrollbarsVirtualList from './CustomScrollbar.react';

const DEFAULT_DIV_HEIGHT = 24;

const VirtualList = ({ className, children = null, itemSize = DEFAULT_DIV_HEIGHT, list = [] }) => {
  const listRef = useRef();
  const outerRef = useRef();

  return (
    <AutoSizer className={className}>
      {({ height, width }) => (
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
      )}
    </AutoSizer>
  );
};

VirtualList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  itemSize: PropTypes.number,
  list: PropTypes.array.isRequired,
};

const MemoList = memo(VirtualList);
MemoList.displayName = `Virtual List`;
export default MemoList;
