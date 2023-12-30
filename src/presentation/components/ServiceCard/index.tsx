import React, {Fragment} from 'react';

import {useTheme} from 'styled-components/native';
import {IconName, AppIcon} from '../Shared/Icon';
import {Label} from '../Shared/Typography';
import {ServiceCardContainer} from './styles';
import {translate} from '~/common/locales';

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
        <AppIcon icon={icon} size={26} color={colors.text} />
        <Label style={{marginTop: 6, textAlign: 'center'}}>
          {translate(title as any)}
        </Label>
      </Fragment>
    </ServiceCardContainer>
  );
};
