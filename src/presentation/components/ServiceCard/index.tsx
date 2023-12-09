import React, {Fragment} from 'react';

import {useTheme} from 'styled-components/native';
import AppIcon, {IconName} from '../Shared/Icon';
import {Label} from '../Shared/Typography';
import {ServiceCardContainer} from './styles';

type ServiceCardProps = {
  title: string;
  icon: IconName;
  onPress: () => void;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  onPress,
}) => {
  const {colors} = useTheme();

  return (
    <ServiceCardContainer onPress={onPress}>
      <Fragment>
        <AppIcon icon={icon} color={colors.text} />
        <Label style={{marginTop: 6}}>{title}</Label>
      </Fragment>
    </ServiceCardContainer>
  );
};
