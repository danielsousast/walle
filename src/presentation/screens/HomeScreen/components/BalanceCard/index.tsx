import React from 'react';
import {Label, SectionTitle} from '../../../../components/Shared/Typography';
import {Container, MainValue} from './styles';
import {translate} from '~/common/locales';

export const BalanceCard: React.FC = () => {
  return (
    <Container>
      <SectionTitle colorStyle="light">
        {translate('accountOverview')}
      </SectionTitle>
      <Label
        style={{
          fontSize: 13,
          marginTop: 26,
          color: 'rgba(255, 255, 255, 0.6)',
        }}>
        {translate('currentBalance')}
      </Label>
      <MainValue>R$ 19.000,00</MainValue>
    </Container>
  );
};
