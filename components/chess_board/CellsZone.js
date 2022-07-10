import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function CellsZone({ singleCellSizePx, whiteCellColor, blackCellColor }) {
  const cellStyle = {
    width: singleCellSizePx,
    height: singleCellSizePx,
  };

  const whiteCellStyle = {
    backgroundColor: whiteCellColor,
  };

  const blackCellStyle = {
    backgroundColor: blackCellColor,
  };

  const indexes = [];
  for (let i = 0; i < 64; i += 1) indexes[i] = i;
  return indexes.map((index) => {
    const lineIndex = parseInt(index / 8, 10);
    const colIndex = index % 8;
    const whiteCell = (lineIndex + colIndex) % 2 === 0;
    return <View style={{ ...cellStyle, ...(whiteCell ? whiteCellStyle : blackCellStyle) }} />;
  });
}

CellsZone.defaultProps = {
  singleCellSizePx: 30,
  whiteCellColor: 'navajowhite',
  blackCellColor: 'peru',
};

CellsZone.propTypes = {
  singleCellSizePx: PropTypes.number,
  whiteCellColor: PropTypes.string,
  blackCellColor: PropTypes.string,
};
