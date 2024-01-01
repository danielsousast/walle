import {TransactionModel, TransactionRepository} from '../interfaces';

export const transactions: TransactionModel[] = [
  {
    id: '1',
    title: 'Salário Developer',
    category: {
      name: 'Salário',
      icon: 'dollar-sign',
      color: '#12A454',
    },
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'income',
  },
  {
    id: '2',
    title: 'Almoço',
    category: {
      name: 'Alimentação',
      icon: 'coffee',
      color: '#FFAC30',
    },
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
  {
    id: '3',
    title: 'Compra Roupa',
    category: {
      name: 'Compras',
      icon: 'shopping-bag',
      color: '#E83F5B',
    },
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
];

function getAll(): Promise<TransactionModel[]> {
  //@ts-ignore
  return transactions;
}

function create(params: TransactionModel) {
  console.log(params);
}

export const transactionRepository: TransactionRepository = {
  getAll,
  create,
};
