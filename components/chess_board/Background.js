import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import FilesCoordinates from './FilesCoordinates';
import RanksCoordinates from './RankCoordinates';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function Background({ sizePx, coordinatesColor, reversed }) {
  const overrideRootStyle = {
    width: sizePx,
    height: sizePx,
  };

  const indexes = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <View style={{ ...styles.root, overrideRootStyle }}>
      <FilesCoordinates
        widthPx={sizePx}
        heightPx={sizePx / 18}
        color={coordinatesColor}
        reversed={reversed}
      />
      {
        indexes.map((index) => {
          const key = reversed ? '8'.charCodeAt(0) - index : '1'.charCodeAt(0) + index;
          return (
            <RanksCoordinates
              widthPx={sizePx}
              heightPx={sizePx / 9}
              lineIndex={7 - index}
              color={coordinatesColor}
              key={key}
              reversed={reversed}
            />
          );
        })
      }
      <FilesCoordinates
        widthPx={sizePx}
        heightPx={sizePx / 18}
        color={coordinatesColor}
        reversed={reversed}
      />
    </View>
  );
}

Background.defaultProps = {
  sizePx: 100,
  coordinatesColor: 'yellow',
  reversed: false,
};

Background.propTypes = {
  sizePx: PropTypes.number,
  coordinatesColor: PropTypes.string,
  reversed: PropTypes.bool,
};
