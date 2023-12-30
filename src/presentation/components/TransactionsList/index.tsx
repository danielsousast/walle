import React, {useCallback} from 'react';
import {AppIcon} from '../Shared/Icon';
import {Label} from '../Shared/Typography';
import {
  Container,
  IconWrapper,
  ItemDescription,
  ItemWrapper,
  LeftContainer,
  RightContainer,
} from './styles';
import {TransactionModel, useAllTransactions} from '~/features/transaction';

export const TransactionsList: React.FC = () => {
  const {data} = useAllTransactions();
  const renderItem = useCallback((transaction: TransactionModel) => {
    return (
      <ItemWrapper key={transaction.id}>
        <IconWrapper>
          <AppIcon icon="category" size={22} color="#fff" />
        </IconWrapper>
        <LeftContainer>
          <ItemDescription>Compra em Loja</ItemDescription>
          <Label>Saúde</Label>
        </LeftContainer>
        <RightContainer>
          <ItemDescription
            style={{
              color: transaction.type === 'income' ? '#00BFA5' : '#E57373',
            }}>
            R$ 100,00
          </ItemDescription>
          <Label>11AM</Label>
        </RightContainer>
      </ItemWrapper>
    );
  }, []);
  return (
    <Container>{data?.map(transaction => renderItem(transaction))}</Container>
  );
};
