import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Pl from './pieces/pl';
import Nl from './pieces/nl';
import Bl from './pieces/bl';
import Rl from './pieces/rl';
import Ql from './pieces/ql';
import Kl from './pieces/kl';
import Pd from './pieces/pd';
import Nd from './pieces/nd';
import Bd from './pieces/bd';
import Rd from './pieces/rd';
import Qd from './pieces/qd';
import Kd from './pieces/kd';

function parsePieceValueToPiece(pieceValue, singleCellSizePx) {
  let imageSource;
  switch (pieceValue) {
    case 'P':
      imageSource = <Pl widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'N':
      imageSource = <Nl widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'B':
      imageSource = <Bl widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'R':
      imageSource = <Rl widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'Q':
      imageSource = <Ql widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'K':
      imageSource = <Kl widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'p':
      imageSource = <Pd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'n':
      imageSource = <Nd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'b':
      imageSource = <Bd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'r':
      imageSource = <Rd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'q':
      imageSource = <Qd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    case 'k':
      imageSource = <Kd widthPx={singleCellSizePx} heightPx={singleCellSizePx} />;
      break;
    default:
  }

  return imageSource;
}

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
    const piece = parsePieceValueToPiece(pieceValue, singleCellSizePx);

    return (
      <View
        style={{
          ...styles.cellContainer,
          ...cellStyle,
          ...(whiteCell ? whiteCellStyle : blackCellStyle),
        }}
        key={index}
      >
        {piece}
      </View>
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
