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
  root: {

  },
});

export default function SingleCell({ piece, cellSizePx }) {
  const overrideRootStyle = {
    width: cellSizePx,
    height: cellSizePx,
  };

  const pieceComponent = parsePieceValueToPiece(piece, cellSizePx);
  return (
    <View style={{ ...styles.root, overrideRootStyle }}>
      {pieceComponent}
    </View>
  );
}

SingleCell.defaultProps = {
  piece: undefined,
  cellSizePx: 30,
};

SingleCell.propTypes = {
  piece: PropTypes.string,
  cellSizePx: PropTypes.number,
};
