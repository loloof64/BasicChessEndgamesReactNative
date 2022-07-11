import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessKlt45({ widthPx, heightPx }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width={widthPx ?? 45} height={heightPx ?? 45}>
      <G
        style={{
          fill: 'none',
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
        <Path
          d="M22.5 11.63V6M20 8h5"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
          style={{
            fill: '#fff',
            stroke: '#000',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
          style={{
            fill: '#fff',
            stroke: '#000',
          }}
        />
        <Path
          d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"
          style={{
            fill: 'none',
            stroke: '#000',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessKlt45;

SvgChessKlt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessKlt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
