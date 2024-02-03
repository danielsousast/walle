import React from 'react';
import * as S from './styles';
import {AppIcon} from '~/presentation/components';
import {useTheme} from 'styled-components/native';

interface MovimentsItemProps {
  type: 'income' | 'outcome';
}

function MovimentsItem({type = 'income'}: MovimentsItemProps) {
  const {colors} = useTheme();
  return (
    <S.Container>
      <AppIcon
        icon={type === 'income' ? 'arrow-up' : 'arrow-down'}
        size={26}
        color={type === 'income' ? colors.green : colors.red}
      />
      <S.Text>R$ 5.000,00</S.Text>
    </S.Container>
  );
}

export default function MovmentsSection() {
  return (
    <S.ItemsWrapper>
      <MovimentsItem type="income" />
      <MovimentsItem type="outcome" />
    </S.ItemsWrapper>
  );
}
