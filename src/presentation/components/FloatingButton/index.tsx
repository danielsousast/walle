import React, {Fragment, useCallback, useState} from 'react';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import {useModal} from '~/presentation/hooks/useModal';
import AppIcon from '~/presentation/components/Shared/Icon';
import {
  ButtonWrapperPlus,
  ButtonWrapperSecondary,
  Container,
  Overlay,
} from './styles';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const FROM_VERTICAL_POSITION = SCREEN_WIDTH / 2 - 24;
const TO_VERTICAL_POSITION = SCREEN_WIDTH / 2 - 100;

export const FloatingButton: React.FC = () => {
  const {colors} = useTheme();
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

  return (
    <Fragment>
      {isExpanded && (
        <TouchableWithoutFeedback onPress={handlePlusPress}>
          <Overlay />
        </TouchableWithoutFeedback>
      )}
      <Container>
        <TouchableWithoutFeedback onPress={handlePlusPress}>
          <ButtonWrapperPlus>
            <Icon name="plus" color={colors.shape} size={28} />
          </ButtonWrapperPlus>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => handleAddTransaction('Incomes')}>
          <ButtonWrapperSecondary style={primaryButtonStyles}>
            <Icon name="arrow-up" color="green" size={24} />
          </ButtonWrapperSecondary>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <ButtonWrapperSecondary style={secondaryButtonStyles}>
            <AppIcon icon="transaction" color="grey" size={24} />
          </ButtonWrapperSecondary>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => handleAddTransaction('Outcomes')}>
          <ButtonWrapperSecondary style={tertiaryButtonStyles}>
            <Icon name="arrow-down" color="red" size={24} />
          </ButtonWrapperSecondary>
        </TouchableWithoutFeedback>
      </Container>
    </Fragment>
  );
};
