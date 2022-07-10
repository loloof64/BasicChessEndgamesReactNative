import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    position: 'relative',
    top: 125,
    left: 200,
  },
});

function ChessBoard({
  sizePx, relativeLeftPx, relativeTopPx, backgroundColor,
}) {
  const overrideRootStyle = {
    width: sizePx,
    height: sizePx,
    left: relativeLeftPx,
    top: relativeTopPx,
    backgroundColor,
  };
  return (
    <View style={{ ...styles.root, ...overrideRootStyle }} />
  );
}

ChessBoard.defaultProps = {
  sizePx: 100,
  relativeLeftPx: 0,
  relativeTopPx: 0,
  backgroundColor: '#124589',
};

ChessBoard.propTypes = {
  sizePx: PropTypes.number,
  relativeLeftPx: PropTypes.number,
  relativeTopPx: PropTypes.number,
  backgroundColor: PropTypes.string,
};

export default ChessBoard;
