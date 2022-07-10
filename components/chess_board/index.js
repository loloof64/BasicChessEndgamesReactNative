import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Background from './Background';
import CellsZone from './CellsZone';
import PlayerTurn from './PlayerTurn';

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  cellsZoneContainerStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

function ChessBoard({
  sizePx, relativeLeftPx, relativeTopPx, backgroundColor,
  whiteCellColor, blackCellColor, coordinatesColor,
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
    width: sizePx,
    height: sizePx,
    padding: cellsPaddingPx,
  };

  const cellSizePx = sizePx * 0.111;

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <View style={{ ...styles.cellsZoneContainerStyle, ...overrideCellsZoneContainerStyle }}>
        <Background sizePx={sizePx} coordinatesColor={coordinatesColor} />
        <CellsZone
          singleCellSizePx={cellSizePx}
          whiteCellColor={whiteCellColor}
          blackCellColor={blackCellColor}
        />
        <PlayerTurn
          boardSizePx={sizePx}
          whiteTurn={false}
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
  coordinatesColor: 'yellow',
};

ChessBoard.propTypes = {
  sizePx: PropTypes.number,
  relativeLeftPx: PropTypes.number,
  relativeTopPx: PropTypes.number,
  backgroundColor: PropTypes.string,
  whiteCellColor: PropTypes.string,
  blackCellColor: PropTypes.string,
  coordinatesColor: PropTypes.string,
};

export default ChessBoard;
