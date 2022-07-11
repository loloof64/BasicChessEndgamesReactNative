import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessRdt45({ widthPx, heightPx }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width={widthPx ?? 45} height={heightPx ?? 45}>
      <G
        style={{
          opacity: 1,
          fill: '#000',
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
          d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M14 29.5v-13h17v13H14z"
          style={{
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
          }}
        />
        <Path
          d="M14 16.5 11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
          style={{
            fill: 'none',
            stroke: '#fff',
            strokeWidth: 1,
            strokeLinejoin: 'miter',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessRdt45;

SvgChessRdt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessRdt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
