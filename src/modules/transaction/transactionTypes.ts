export interface TransactionModel {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: string;
}

export interface CreateTransactionsUseCase {
  execute: (params: any) => Promise<void>;
}

export interface ListTransactionsUseCase {
  execute: () => Promise<TransactionModel[]>;
}

export interface TransactionRepository {
  create: (params: TransactionModel) => void;
  getAll: () => Promise<TransactionModel[]>;
}
