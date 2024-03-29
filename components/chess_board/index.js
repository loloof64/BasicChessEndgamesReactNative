import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Chess } from 'chess.js';

import Background from './Background';
import CellsZone from './CellsZone';
import PlayerTurn from './PlayerTurn';
import DragNDropZone from './DragNDropZone';

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
  whiteCellColor, blackCellColor, coordinatesColor,
  reversed,
}) {
  const [position] = useState(Chess());

  const cellsZoneSizePx = sizePx * 0.8888;
  const cellsZoneMarginPx = sizePx * 0.05555;

  const overrideRootStyle = {
    width: sizePx,
    height: sizePx,
    left: relativeLeftPx,
    top: relativeTopPx,
    backgroundColor,
  };

  const overrideCellsZoneContainerStyle = {
    width: cellsZoneSizePx,
    height: cellsZoneSizePx,
    margin: cellsZoneMarginPx,
  };

  const cellSizePx = sizePx * 0.1111;

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <Background sizePx={sizePx} coordinatesColor={coordinatesColor} reversed={reversed} />
      <View style={{ ...styles.cellsZoneContainerStyle, ...overrideCellsZoneContainerStyle }}>
        <CellsZone
          singleCellSizePx={cellSizePx}
          whiteCellColor={whiteCellColor}
          blackCellColor={blackCellColor}
          positionFen={position.fen()}
          reversed={reversed}
        />
        <DragNDropZone
          sizePx={cellSizePx * 8}
        />
      </View>
      <PlayerTurn
        boardSizePx={sizePx}
        whiteTurn={position.turn() === 'w'}
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
  coordinatesColor: 'yellow',
  reversed: false,
};

ChessBoard.propTypes = {
  sizePx: PropTypes.number,
  relativeLeftPx: PropTypes.number,
  relativeTopPx: PropTypes.number,
  backgroundColor: PropTypes.string,
  whiteCellColor: PropTypes.string,
  blackCellColor: PropTypes.string,
  coordinatesColor: PropTypes.string,
  reversed: PropTypes.bool,
};

export default ChessBoard;
