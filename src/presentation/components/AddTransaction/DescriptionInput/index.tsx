import React from 'react';
import AppIcon from '~/presentation/components/Shared/Icon';
import {Container, Input} from './styles';

const DescriptionInput: React.FC = () => {
  return (
    <Container>
      <AppIcon icon="edit" size={18} />
      <Input placeholder="Description" />
    </Container>
  );
};

export default DescriptionInput;
