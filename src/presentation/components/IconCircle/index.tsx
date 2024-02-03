import React from 'react';
import styled from 'styled-components/native';
import {AppIcon, IconName} from '../Shared/Icon';

interface Props {
  color: string;
  icon: IconName;
}

export function IconCircle({color, icon}: Props) {
  return (
    <IconWrapper color={color}>
      <AppIcon icon={icon} size={22} color="#fff" />
    </IconWrapper>
  );
}

export const IconWrapper = styled.View<{color: string}>`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  background-color: ${({color}) => color || '#ccc'};
`;
