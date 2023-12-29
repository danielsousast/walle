import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './types';

export function TransactionsIcon({size = 24, color = '#0F1729'}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5a1 1 0 011 1v9.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L6 15.586V6a1 1 0 011-1zm9.293.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L18 8.414V18a1 1 0 11-2 0V8.414l-2.293 2.293a1 1 0 01-1.414-1.414l4-4z"
        fill={color}
      />
    </Svg>
  );
}
