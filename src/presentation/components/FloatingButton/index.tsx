import React, {Fragment} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';
import {AppIcon} from '~/presentation/components';
import {ButtonWrapperPlus, ButtonWrapperSecondary, Container} from './styles';
import {useFloatingButton} from './hook';

export const FloatingButton: React.FC = () => {
  const {colors} = useTheme();
  const {
    primaryButtonStyles,
    secondaryButtonStyles,
    tertiaryButtonStyles,
    handlePlusPress,
    handleAddTransaction,
  } = useFloatingButton();

  return (
    <Fragment>
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
          onPress={() => handleAddTransaction('Expenses')}>
          <ButtonWrapperSecondary style={tertiaryButtonStyles}>
            <Icon name="arrow-down" color="red" size={24} />
          </ButtonWrapperSecondary>
        </TouchableWithoutFeedback>
      </Container>
    </Fragment>
  );
};
