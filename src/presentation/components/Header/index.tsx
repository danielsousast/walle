import React, {useCallback} from 'react';
import BackButton from '../BackButton';
import Icon from 'react-native-vector-icons/Feather';
import {DateSelectText, HeaderContainer, RightButton} from './styles';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  onBackPress?: () => void;
  onRightButtonPress?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress,
  onRightButtonPress,
}) => {
  const {goBack} = useNavigation();

  const handleOnBackPress = useCallback(() => {
    if (onBackPress) {
      return onBackPress();
    }
    goBack();
  }, [onBackPress]);

  const handleRightButtonPress = useCallback(() => {
    if (onRightButtonPress) {
      return onRightButtonPress();
    }
  }, [onRightButtonPress]);

  return (
    <HeaderContainer>
      <BackButton onPress={handleOnBackPress} />
      <DateSelectText>{title}</DateSelectText>

      {onRightButtonPress && (
        <RightButton onPress={handleRightButtonPress}>
          <Icon name="plus" size={28} color="#ccc" />
        </RightButton>
      )}
    </HeaderContainer>
  );
};
