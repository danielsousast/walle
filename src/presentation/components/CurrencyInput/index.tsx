import React from 'react';
import { Input } from './styles';

export const CurrencyInput: React.FC = () => {
    return <Input placeholder='0,00' keyboardType='numeric'/>;
}
