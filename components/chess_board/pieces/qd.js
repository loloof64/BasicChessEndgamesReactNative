import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

function SvgChessQdt45({ widthPx, heightPx }) {
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
        <G
          style={{
            fill: '#000',
            stroke: 'none',
          }}
        >
          <Circle cx={6} cy={12} r={2.75} />
          <Circle cx={14} cy={9} r={2.75} />
          <Circle cx={22.5} cy={8} r={2.75} />
          <Circle cx={31} cy={9} r={2.75} />
          <Circle cx={39} cy={12} r={2.75} />
        </G>
        <Path
          d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"
          style={{
            strokeLinecap: 'butt',
            stroke: '#000',
          }}
        />
        <Path
          d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
          style={{
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M11 38.5a35 35 1 0 0 23 0"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinecap: 'butt',
          }}
        />
        <Path
          d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0"
          style={{
            fill: 'none',
            stroke: '#fff',
          }}
        />
      </G>
    </Svg>
  );
}

export default SvgChessQdt45;

SvgChessQdt45.defaultProps = {
  widthPx: 45,
  heightPx: 45,
};

SvgChessQdt45.propTypes = {
  widthPx: PropTypes.number,
  heightPx: PropTypes.number,
};
