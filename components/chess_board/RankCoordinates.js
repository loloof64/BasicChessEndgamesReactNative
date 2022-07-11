import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function RanksCoordinates({
  widthPx, heightPx, color, lineIndex, reversed,
}) {
  const overrideRootStyle = {
    width: widthPx,
    height: heightPx,
  };

  const fontSizePx = widthPx * 0.04;

  const textStyle = {
    fontSize: fontSizePx,
    fontWeight: 'bold',
    color,
    width: widthPx * 0.05555,
    textAlign: 'center',
  };

  const text = String.fromCharCode(reversed
    ? ('8'.charCodeAt(0) - lineIndex)
    : ('1'.charCodeAt(0) + lineIndex));

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      <Text style={textStyle}>{text}</Text>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

RanksCoordinates.defaultProps = {
  widthPx: 100,
  heightPx: 11.11,
  color: 'yellow',
  reversed: false,
};

RanksCoordinates.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
  color: PropTypes.string,
  lineIndex: PropTypes.number.isRequired,
  reversed: PropTypes.bool,
};
