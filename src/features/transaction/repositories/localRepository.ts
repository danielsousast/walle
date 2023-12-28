import {TransactionModel, TransactionRepository} from '../interfaces';

export const transactions: TransactionModel[] = [
  {
    id: '1',
    title: 'Salário Developer',
    category: 'Salário',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'income',
  },
  {
    id: '2',
    title: 'Almoço',
    category: 'Alimentação',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
  {
    id: '3',
    title: 'Compra Roupa',
    category: 'Vestuário',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
];

function getAll(): Promise<TransactionModel[]> {
  console.log('getAllTransactions');
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
