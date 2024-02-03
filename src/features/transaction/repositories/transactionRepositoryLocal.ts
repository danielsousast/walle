import {Storage} from '~/infra/cache/Storage';
import {
  TransactionModel,
  TransactionRepository,
} from '../transaction.interfaces';

export const transactions: TransactionModel[] = [
  {
    id: '1',
    title: 'Salário Developer',
    category: {
      id: '1',
      name: 'Salário',
      icon: 'dollar-sign',
      color: '#12A454',
      description: 'Recebimento de salário',
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
      id: '2',
      name: 'Alimentação',
      icon: 'coffee',
      color: '#FFAC30',
      description: 'Almoço em restaurante',
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
      id: '3',
      name: 'Compras',
      icon: 'shopping-bag',
      color: '#E83F5B',
      description: 'Compra de roupa',
    },
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
];

function getAll(): Promise<TransactionModel[]> {
  const response = Storage.getItem('transactions');
  return response as Promise<TransactionModel[]>;
}

async function create(params: TransactionModel) {
  await Storage.setItem('transactions', params);
}

function update() {}

function remove() {}

export const transactionRepositoryLocal: TransactionRepository = {
  getAll,
  create,
  update,
  remove,
};
