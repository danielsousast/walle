import {Transaction} from '~/domain/models';

export interface TransactionRepository {
  getAllTransactions(): Promise<Transaction[]>;
  createTransaction(params: Transaction): Promise<void>;
}
