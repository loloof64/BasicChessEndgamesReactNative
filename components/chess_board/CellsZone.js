import React from 'react';
import {
  StyleSheet, Animated,
} from 'react-native';
import PropTypes from 'prop-types';

import SingleCell from './SingleCell';

const styles = StyleSheet.create({
  cellContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CellsZone({
  singleCellSizePx, whiteCellColor, blackCellColor,
  positionFen,
  reversed,
}) {
  const piecesLines = positionFen.split(' ')[0].split('/');
  const orderedPiecesLines = reversed ? piecesLines.reverse().map((line) => line.split('').reverse().join('')) : piecesLines;
  const piecesArray = orderedPiecesLines.reduce((acc, line) => {
    line.split('').forEach((elem) => {
      const elemAsInt = parseInt(elem, 10);
      if (Number.isNaN(elemAsInt)) {
        acc.push(elem);
      } else {
        for (let i = 0; i < elemAsInt; i += 1) {
          acc.push(' ');
        }
      }
    });
    return acc;
  }, []);

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

    const pieceValue = piecesArray[index];

    const fileText = String.fromCharCode(reversed ? ('H'.charCodeAt(0) - lineIndex) : ('A'.charCodeAt(0) + lineIndex));
    const rankText = String.fromCharCode(reversed ? ('1'.charCodeAt(0) + colIndex) : ('8'.charCodeAt(0) - colIndex));
    const key = fileText + rankText;

    return (
      <Animated.View
        style={{
          ...styles.cellContainer,
          ...cellStyle,
          ...(whiteCell ? whiteCellStyle : blackCellStyle),
        }}
        key={key}
      >
        <SingleCell piece={pieceValue} cellSizePx={singleCellSizePx} key={key} />
      </Animated.View>
    );
  });
}

CellsZone.defaultProps = {
  singleCellSizePx: 30,
  whiteCellColor: 'navajowhite',
  blackCellColor: 'peru',
  reversed: false,
};

CellsZone.propTypes = {
  singleCellSizePx: PropTypes.number,
  whiteCellColor: PropTypes.string,
  blackCellColor: PropTypes.string,
  positionFen: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
};
