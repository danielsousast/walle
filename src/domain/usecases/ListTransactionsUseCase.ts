import { Transaction } from '~/domain/models/TransactionModel';

export interface ListTransactionsUseCase {
  execute: () => Promise<Transaction[]>;
}
