import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessRlt45({ widthPx, heightPx }) {
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
        <Path
          d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path d="m34 14-3 3H14l-3-3" />
        <Path
          d="M31 17v12.5H14V17"
          style={{
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
          }}
        />
        <Path d="m31 29.5 1.5 2.5h-20l1.5-2.5" />
        <Path
          d="M11 14h23"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinejoin: 'miter',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessRlt45;

SvgChessRlt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessRlt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
