import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import CellsZone from './CellsZone';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

function ChessBoard({
  sizePx, relativeLeftPx, relativeTopPx, backgroundColor,
  whiteCellColor, blackCellColor,
}) {
  const cellsPaddingPx = sizePx * 0.055;

  const overrideRootStyle = {
    padding: cellsPaddingPx,
    width: sizePx,
    height: sizePx,
    left: relativeLeftPx,
    top: relativeTopPx,
    backgroundColor,
  };

  const cellSizePx = sizePx * 0.111;

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <CellsZone
        singleCellSizePx={cellSizePx}
        whiteCellColor={whiteCellColor}
        blackCellColor={blackCellColor}
      />
    </View>
  );
}

ChessBoard.defaultProps = {
  sizePx: 100,
  relativeLeftPx: 0,
  relativeTopPx: 0,
  backgroundColor: '#124589',
  whiteCellColor: 'navajowhite',
  blackCellColor: 'peru',
};

ChessBoard.propTypes = {
  sizePx: PropTypes.number,
  relativeLeftPx: PropTypes.number,
  relativeTopPx: PropTypes.number,
  backgroundColor: PropTypes.string,
  whiteCellColor: PropTypes.string,
  blackCellColor: PropTypes.string,
};

export default ChessBoard;
