import {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useModal} from '~/presentation/hooks/useModal';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const FROM_VERTICAL_POSITION = SCREEN_WIDTH / 2 - 24;
const TO_VERTICAL_POSITION = SCREEN_WIDTH / 2 - 100;

export function useFloatingButton() {
  const {showAddTransactionModal} = useModal();
  const [isExpanded, setIsExpanded] = useState(false);
  const primaryButtonTopPosition = useSharedValue(0);
  const primaryButtonLeftPosition = useSharedValue(FROM_VERTICAL_POSITION);
  const secondaryButtonTopPosition = useSharedValue(0);
  const tertiaryButtonTopPosition = useSharedValue(0);
  const tertiaryButtonRightPosition = useSharedValue(FROM_VERTICAL_POSITION);

  const primaryButtonStyles = useAnimatedStyle(() => ({
    bottom: primaryButtonTopPosition.value,
    left: primaryButtonLeftPosition.value,
  }));
  const secondaryButtonStyles = useAnimatedStyle(() => ({
    bottom: secondaryButtonTopPosition.value,
  }));
  const tertiaryButtonStyles = useAnimatedStyle(() => ({
    bottom: tertiaryButtonTopPosition.value,
    right: tertiaryButtonRightPosition.value,
  }));

  const resetAnimation = useCallback(() => {
    primaryButtonTopPosition.value = withTiming(0);
    primaryButtonLeftPosition.value = withTiming(FROM_VERTICAL_POSITION);
    secondaryButtonTopPosition.value = withTiming(0);
    tertiaryButtonTopPosition.value = withTiming(0);
    tertiaryButtonRightPosition.value = withTiming(FROM_VERTICAL_POSITION);
  }, [
    primaryButtonTopPosition,
    primaryButtonLeftPosition,
    secondaryButtonTopPosition,
    tertiaryButtonTopPosition,
    tertiaryButtonRightPosition,
  ]);

  const handlePlusPress = useCallback(() => {
    if (isExpanded) {
      resetAnimation();
    } else {
      primaryButtonTopPosition.value = withTiming(65);
      primaryButtonLeftPosition.value = withTiming(TO_VERTICAL_POSITION);
      secondaryButtonTopPosition.value = withTiming(120);
      tertiaryButtonTopPosition.value = withTiming(65);
      tertiaryButtonRightPosition.value = withTiming(TO_VERTICAL_POSITION);
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const handleAddTransaction = useCallback((transactionType: string) => {
    resetAnimation();
    setIsExpanded(false);
    showAddTransactionModal(transactionType);
  }, []);

  return {
    isExpanded,
    primaryButtonStyles,
    secondaryButtonStyles,
    tertiaryButtonStyles,
    handlePlusPress,
    handleAddTransaction,
  };
}
