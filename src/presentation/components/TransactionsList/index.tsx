import React, {useCallback} from 'react';
import AppIcon from '../Shared/Icon';
import {Label} from '../Shared/Typography';
import {
  Container,
  IconWrapper,
  ItemDescription,
  ItemWrapper,
  LeftContainer,
  RightContainer,
} from './styles';

const transactions: Transaction[] = [
  {
    id: 1,
    description: 'Salário Developer',
    category: 'Salário',
    value: 'R$ 1.000,00',
    date: '01/01/2020',
    type: 'income',
  },
  {
    id: 2,
    description: 'Almoço',
    category: 'Alimentação',
    value: 'R$ 1.000,00',
    date: '01/01/2020',
    type: 'expense',
  },
  {
    id: 3,
    description: 'Compra Roupa',
    category: 'Vestuário',
    value: 'R$ 1.000,00',
    date: '01/01/2020',
    type: 'expense',
  },
];

type Transaction = {
  id: number;
  description: string;
  category: string;
  value: string;
  date: string;
  type: 'income' | 'expense';
};

export const TransactionsList: React.FC = () => {
  const renderItem = useCallback((transaction: Transaction) => {
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
    <Container>
      {transactions.map(transaction => renderItem(transaction))}
    </Container>
  );
};
