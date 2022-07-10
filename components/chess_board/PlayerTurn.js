import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
  },
  turn: {
    position: 'absolute',
  },
});

export default function PlayerTurn({ whiteTurn, boardSizePx }) {
  const overrideRootStyle = {
    width: boardSizePx,
    height: boardSizePx,
  };

  const turnSizePx = boardSizePx * 0.055;
  const commonLocationPx = boardSizePx * 0.9435;

  const overrideTurnStyle = {
    left: commonLocationPx,
    top: commonLocationPx,
    borderRadius: turnSizePx,
    width: turnSizePx,
    height: turnSizePx,
    backgroundColor: whiteTurn ? 'white' : 'black',
  };

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <View style={{ ...styles.turn, ...overrideTurnStyle }} />
    </View>
  );
}

PlayerTurn.defaultProps = {
  whiteTurn: true,
  boardSizePx: 100,
};

PlayerTurn.propTypes = {
  whiteTurn: PropTypes.bool,
  boardSizePx: PropTypes.number,
};
