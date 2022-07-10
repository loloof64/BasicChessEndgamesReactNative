import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import CellsZone from './CellsZone';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  cellsZoneContainerStyle: {
    position: 'absolute',
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
    width: sizePx,
    height: sizePx,
    left: relativeLeftPx,
    top: relativeTopPx,
    backgroundColor,
  };

  const overrideCellsZoneContainerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: sizePx,
    height: sizePx,
    padding: cellsPaddingPx,
  };

  const cellSizePx = sizePx * 0.111;

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <View style={{ ...styles.cellsZoneContainerStyle, ...overrideCellsZoneContainerStyle }}>
        <CellsZone
          singleCellSizePx={cellSizePx}
          whiteCellColor={whiteCellColor}
          blackCellColor={blackCellColor}
        />
      </View>
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
