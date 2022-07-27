import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default function DragNDropZone({ sizePx }) {
  const overrideRootStyle = {
    width: sizePx,
    height: sizePx,
  };

  const draggedPiece = undefined;

  return (
    <View style={{ ...styles.root, ...overrideRootStyle }}>
      { draggedPiece }
    </View>
  );
}

DragNDropZone.defaultProps = {
  sizePx: 100,
};

DragNDropZone.propTypes = {
  sizePx: PropTypes.number,
};
