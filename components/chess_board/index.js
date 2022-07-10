import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

  const cellStyle = {
    width: cellSizePx,
    height: cellSizePx,
  };

  const whiteCellStyle = {
    backgroundColor: whiteCellColor,
  };

  const blackCellStyle = {
    backgroundColor: blackCellColor,
  };

  const CellsZone = () => {
    const indexes = [];
    for (let i = 0; i < 64; i += 1) indexes[i] = i;
    return indexes.map((index) => {
      const lineIndex = parseInt(index / 8, 10);
      const colIndex = index % 8;
      const whiteCell = (lineIndex + colIndex) % 2 === 0;
      return <View style={{ ...cellStyle, ...(whiteCell ? whiteCellStyle : blackCellStyle) }} />;
    });
  };

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <CellsZone />
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
