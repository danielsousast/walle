import {
  CreateTransactionsUseCase,
  TransactionModel,
  TransactionRepository,
} from '../interfaces';

export class CreateTransactionUseCaseImpl implements CreateTransactionsUseCase {
  constructor(private readonly repository: TransactionRepository) {}

  async execute(params: TransactionModel) {
    await this.repository.create(params);
  }
}
