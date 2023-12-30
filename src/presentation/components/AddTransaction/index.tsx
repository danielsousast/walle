import React from 'react';
import {Modal, ModalProps} from 'react-native';
import {CurrencyInput} from '~/presentation/components/CurrencyInput';
import {Header} from '~/presentation/components/Header';
import {
  DefaultContainer,
  DefaultContent,
} from '~/presentation/components/Shared/Layout';
import {DateItem} from './DateItem';
import DescriptionInput from './DescriptionInput';
import {ItemButton} from './ItemButton';
import {translate} from '~/common/locales';

interface AddTransactionModalProps extends ModalProps {
  title: string;
}

export const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  title,
  onRequestClose,
  ...rest
}) => {
  return (
    <Modal {...rest} animationType="slide">
      <DefaultContainer invert>
        <Header
          title={translate(title?.toLocaleLowerCase() as any)}
          onBackPress={onRequestClose as any}
        />
        <CurrencyInput />
        <DefaultContent paddingTop={24}>
          <DateItem />
          <DescriptionInput />
          <ItemButton />
          <ItemButton />
        </DefaultContent>
      </DefaultContainer>
    </Modal>
  );
};
