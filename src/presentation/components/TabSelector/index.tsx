/* eslint-disable no-lone-blocks */
/* eslint-disable react/display-name */
import React, {useCallback, useImperativeHandle} from 'react';
import {Dimensions} from 'react-native';
import {
  interpolate,
  useSharedValue,
  Extrapolation,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import {useTheme} from 'styled-components';
import {Button, Container, Label, Shape, Row, Line} from './styles';

const LINE_WIDTH = 46;
const SELECTOR_WIDTH = Dimensions.get('window').width / 2;
export type SelectorType = 'left' | 'right';

export interface SelectorRef {
  change(type: SelectorType): void;
}

interface Selector {
  onPress(type: SelectorType): void;
  leftTitle: string;
  rightTitle: string;
  width?: number;
  current?: SelectorType;
}
const clamp = {
  extrapolateLeft: Extrapolation.CLAMP,
  extrapolateRight: Extrapolation.CLAMP,
};

const TabSelector = React.forwardRef<SelectorRef, Selector>(
  ({onPress, leftTitle, rightTitle, width = SELECTOR_WIDTH, current}, ref) => {
    {
      useImperativeHandle(ref, () => ({
        change: handlePress,
      }));

      const {colors} = useTheme();

      const anim = useSharedValue(current === 'left' ? 0 : 1);

      const handlePress = useCallback(
        (type: SelectorType) => {
          const toValue = type === 'left' ? 0 : 1;
          anim.value = withTiming(toValue, {duration: 250}, finished => {
            if (finished) runOnJS(onPress)(type);
          });
        },
        [anim, onPress],
      );

      const availableAnimatedStyle = useAnimatedStyle(() => {
        const colorsArray = [colors.primary, colors.text];
        return {
          color: colorsArray[anim.value],
          fontSize: interpolate(anim.value, [0, 1], [16, 12], clamp),
        };
      });

      const rightAnimatedStyle = useAnimatedStyle(() => {
        const colorsArray = [colors.text, colors.primary];
        return {
          color: colorsArray[anim.value],
          fontSize: interpolate(anim.value, [0, 1], [12, 16], clamp),
        };
      });

      const shapeAnimatedStyle = useAnimatedStyle(() => {
        const shapePos = interpolate(
          anim.value,
          [0, 1],
          [width / 2 - LINE_WIDTH / 2, width + width / 2 - LINE_WIDTH / 2],
        );
        return {
          left: shapePos,
        };
      });
      return (
        <Container>
          <Row>
            <Button onPress={() => handlePress('left')}>
              <Label style={availableAnimatedStyle}>{leftTitle}</Label>
            </Button>
            <Button onPress={() => handlePress('right')}>
              <Label style={rightAnimatedStyle}>{rightTitle}</Label>
            </Button>
          </Row>
          <Shape style={shapeAnimatedStyle} />
          <Line />
        </Container>
      );
    }
  },
);

export default TabSelector;
