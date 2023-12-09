import React, {useCallback} from 'react';
import {useTheme} from 'styled-components/native';
import {CustomAppIcon} from '../CustomIcon';
import AppIcon from '../Shared/Icon';
import {Label} from '../Shared/Typography';
import {
  Container,
  MainValue,
  OptionButton,
  OptionsWrapper,
  Value,
  TextWrapper,
  EyeButton,
} from './styles';

export const BalanceCard: React.FC = () => {
  const {colors} = useTheme();
  const [seeValues, setSeeValues] = React.useState(false);

  const toggleSeeValues = useCallback(() => {
    setSeeValues(!seeValues);
  }, [seeValues]);

  const balanceTotal = React.useMemo(() => {
    return seeValues ? 'R$ 1.000,00' : '- - - ';
  }, [seeValues]);

  const incomesTotal = React.useMemo(() => {
    return seeValues ? 'R$ 1.00,00' : '- - - ';
  }, [seeValues]);

  const expensesTotal = React.useMemo(() => {
    return seeValues ? 'R$ 19.000,00' : '- - -';
  }, [seeValues]);

  return (
    <Container>
      <EyeButton onPress={toggleSeeValues}>
        <AppIcon icon={seeValues ? 'eye-on' : 'eye-off'} size={28} />
      </EyeButton>
      <Label>Current Balance</Label>
      <MainValue>{balanceTotal}</MainValue>
      <OptionsWrapper>
        <OptionButton>
          <CustomAppIcon size={30} name="arrow-up" color={colors.green} />
          <TextWrapper>
            <Label>Incomes</Label>
            <Value color={colors.green}>{incomesTotal}</Value>
          </TextWrapper>
        </OptionButton>
        <OptionButton style={{paddingLeft: 16}}>
          <CustomAppIcon size={30} name="arrow-bottom" color={colors.red} />
          <TextWrapper>
            <Label>Outcomes</Label>
            <Value color={colors.red}>{expensesTotal}</Value>
          </TextWrapper>
        </OptionButton>
      </OptionsWrapper>
    </Container>
  );
};
