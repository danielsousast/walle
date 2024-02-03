import React from 'react';
import {Input} from './styles';
import {TextInputProps} from 'react-native';

export const CurrencyInput = (props: TextInputProps) => {
  return <Input placeholder="0,00" keyboardType="numeric" {...props} />;
};
