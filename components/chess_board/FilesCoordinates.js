import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default function FilesCoordinates({
  widthPx, heightPx, color, reversed,
}) {
  const overrideRootStyle = {
    width: widthPx,
    height: heightPx,
    paddingLeft: widthPx * 0.055,
    paddingRight: widthPx * 0.055,
  };

  const fontSizePx = widthPx * 0.04;

  const textStyle = {
    fontSize: fontSizePx,
    fontWeight: 'bold',
    color,
    width: widthPx * 0.1111,
    textAlign: 'center',
  };

  const indexes = reversed ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      {indexes.map((index) => {
        const text = String.fromCharCode('A'.charCodeAt(0) + index);
        return <Text style={textStyle} key={text}>{text}</Text>;
      })}
    </View>
  );
}

FilesCoordinates.defaultProps = {
  widthPx: 100,
  heightPx: 11.11,
  color: 'yellow',
  reversed: false,
};

FilesCoordinates.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
  color: PropTypes.string,
  reversed: PropTypes.bool,
};
