import styled from 'styled-components/native';

export const IconWrapper = styled.View<{bgColor?: string}>`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 20px;
  width: 36px;
  height: 36px;

  background-color: ${({bgColor}) => bgColor};
`;

export const LeftContainer = styled.View`
  flex: 1;
`;

export const RightContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
`;
