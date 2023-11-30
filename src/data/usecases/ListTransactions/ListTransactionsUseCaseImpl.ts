import { TransactionRepository } from '~/data/repositories/TransactionRepository';
import { ListTransactionsUseCase } from '~/domain/usecases';

export class ListTransactionsUseCaseImpl implements ListTransactionsUseCase {
  constructor(private readonly repository: TransactionRepository) {}

  async execute() {
    const transactions = await this.repository?.getAllTransactions();
    return transactions;
  }
}
