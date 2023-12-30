import React from 'react';
import {AppIcon, IconName} from '~/presentation/components/Shared/Icon';
import {Container, Input} from './styles';

type InputIconProps = {
  icon: IconName;
};

export const InputIcon: React.FC<InputIconProps> = ({icon}) => {
  return (
    <Container>
      <AppIcon icon={icon} size={18} />
      <Input placeholder="Description" />
    </Container>
  );
};
