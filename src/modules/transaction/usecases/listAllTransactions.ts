import {
  ListTransactionsUseCase,
  TransactionRepository,
} from '../transactionTypes';
import {transactions} from '../trasactionRepository';

export class ListAllTransactionUseCaseImpl implements ListTransactionsUseCase {
  private repository: TransactionRepository;
  constructor(repository: TransactionRepository) {
    this.repository = repository;
  }

  async execute() {
    return transactions;
  }
}
