import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './types';

export function HomeIcon({color = '#000', size = 24}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.28 3.716a1 1 0 00-.56 0c-.052.015-.145.053-.341.202-.207.157-.46.38-.854.731l-5.24 4.657c-.642.571-.824.744-.95.934a2 2 0 00-.27.598c-.057.221-.065.472-.065 1.331V16c0 .946 0 1.605.036 2.12.034.508.099.803.192 1.028a3 3 0 001.624 1.624c.225.093.52.158 1.027.192C7.395 21 8.054 21 9 21h6c.945 0 1.605 0 2.12-.036.507-.034.803-.099 1.028-.192a3 3 0 001.624-1.624c.093-.225.158-.52.192-1.027C20 17.605 20 16.945 20 16v-3.831c0-.86-.008-1.11-.066-1.331a2 2 0 00-.268-.598c-.127-.19-.31-.363-.951-.934l-5.24-4.657c-.394-.35-.647-.574-.854-.73-.197-.15-.289-.188-.341-.203zm-1.119-1.92a3 3 0 011.678 0c.38.11.695.305.99.528.276.21.588.487.947.806l5.267 4.682.084.074c.522.463.916.813 1.204 1.247a4 4 0 01.537 1.196c.133.503.132 1.03.132 1.728v3.978c0 .902 0 1.63-.04 2.222-.042.608-.13 1.147-.34 1.656a5 5 0 01-2.707 2.706c-.51.212-1.048.3-1.656.34-.592.041-1.32.041-2.222.041h-6.07c-.902 0-1.63 0-2.222-.04-.608-.042-1.147-.13-1.656-.34a5 5 0 01-2.706-2.707c-.212-.51-.3-1.048-.34-1.656C2 17.665 2 16.937 2 16.035V12.17v-.112c0-.698 0-1.225.132-1.728a4 4 0 01.537-1.196c.288-.434.682-.784 1.204-1.247.027-.024.055-.05.084-.074L9.224 3.13c.359-.32.67-.597.948-.806.294-.223.609-.418.99-.528z"
        fill={color}
      />
    </Svg>
  );
}