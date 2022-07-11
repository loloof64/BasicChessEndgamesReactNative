import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessPdt45({ widthPx, heightPx }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width={widthPx ?? 45} height={heightPx ?? 45}>
      <Path
        d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
        style={{
          opacity: 1,
          fill: '#000',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: '#000',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
    </Svg>
  );
}

export default SvgChessPdt45;

SvgChessPdt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessPdt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
