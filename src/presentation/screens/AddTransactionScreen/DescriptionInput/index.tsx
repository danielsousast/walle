import React from 'react';
import {AppIcon} from '~/presentation/components/Shared/Icon';
import {Container, Input} from './styles';
import {TextInputProps} from 'react-native';

const DescriptionInput = (props: TextInputProps) => {
  return (
    <Container>
      <AppIcon icon="edit" size={18} />
      <Input placeholder="Description" {...props} />
    </Container>
  );
};

export default DescriptionInput;
