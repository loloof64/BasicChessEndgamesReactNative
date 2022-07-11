import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessQlt45({ widthPx, heightPx }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width={widthPx ?? 45} height={heightPx ?? 45}>
      <G
        style={{
          opacity: 1,
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      >
        <Path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" />
        <Path
          d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"
          style={{
            fill: 'none',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessQlt45;

SvgChessQlt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessQlt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
