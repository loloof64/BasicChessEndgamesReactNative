import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessKdt45({ widthPx, heightPx }) {
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
          d="M22.5 11.63V6"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
          style={{
            fill: '#000',
            fillOpacity: 1,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
          style={{
            fill: '#000',
            stroke: '#000',
          }}
        />
        <Path
          d="M20 8h5"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9"
          style={{
            fill: 'none',
            stroke: '#fff',
          }}
        />
        <Path
          d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"
          style={{
            fill: 'none',
            stroke: '#fff',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessKdt45;

SvgChessKdt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessKdt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
