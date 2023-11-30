import {TransactionRepository} from '~/data/repositories';
import {CreateTransactionsUseCase} from '~/domain/usecases';

export class CreateTransactionUseCaseImpl implements CreateTransactionsUseCase {
  constructor(private readonly repository: TransactionRepository) {}

  async execute(params: any) {
    await this.repository.createTransaction(params);
  }
}
