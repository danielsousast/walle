import React from 'react';
import {useTheme} from 'styled-components';
import {AppIcon} from '../Shared/Icon';
import {DefaultItemContainer} from '../Shared/Layout';
import {Description, Label} from '../Shared/Typography';
import {IconWrapper, LeftContainer, RightContainer} from './styles';

type ListItemProps = {
  description: string;
  label: string;
  monetaryValue: string;
  date: string;
  icon?: any;
  iconColor?: string;
  itemType?: 'income' | 'outcome' | 'default';
};

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  description,
  label,
  monetaryValue,
  date,
  itemType = 'default',
  iconColor = '#ddd',
}) => {
  const {colors} = useTheme();

  const monetaryValueColors = {
    income: colors.green,
    outcome: colors.red,
    default: colors.text,
  };

  return (
    <DefaultItemContainer>
      {icon && (
        <IconWrapper bgColor={iconColor}>
          <AppIcon icon="category" size={20} color={colors.shape} />
        </IconWrapper>
      )}

      <LeftContainer>
        <Description bold>{description}</Description>
        <Label>{label}</Label>
      </LeftContainer>
      <RightContainer>
        <Description
          style={{
            color: monetaryValueColors[itemType],
          }}>
          R$ {monetaryValue}
        </Description>
        <Label>{date}</Label>
      </RightContainer>
    </DefaultItemContainer>
  );
};
