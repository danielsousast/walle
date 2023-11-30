import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import BackButton from '../BackButton';
import Icon from 'react-native-vector-icons/Feather';
import { DateSelectText, HeaderContainer, RightButton } from './styles';

type HeaderProps = {
  title: string;
  navigation: any;
  onBackPress?: () => void;
  onRightButtonPress?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  navigation,
  title,
  onBackPress,
  onRightButtonPress,
}) => {
  const { colors } = useTheme();

  const handleOnBackPress = useCallback(() => {
    if (onBackPress) {
      return onBackPress();
    }
    navigation.goBack();
  }, []);

  const handleRightButtonPress = useCallback(() => {
    if (onRightButtonPress) {
      return onRightButtonPress();
    }
  }, []);

  return (
    <HeaderContainer>
      <BackButton onPress={handleOnBackPress} />
      <DateSelectText>{title}</DateSelectText>
      <StatusBar backgroundColor={colors.shape} />
      {onRightButtonPress && (
        <RightButton onPress={handleRightButtonPress}>
          <Icon name="plus" size={28} color="#ccc" />
        </RightButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
