import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

//const Image = styled.Image``;

const UserVatar: React.FC = () => {
  return <Button></Button>;
};

export default UserVatar;
