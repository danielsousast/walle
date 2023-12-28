import {ListTransactionsUseCase, TransactionRepository} from '../interfaces';
//import {transactions} from '../repositories/localRepository';

export class ListAllTransactionUseCaseImpl implements ListTransactionsUseCase {
  private repository: TransactionRepository;
  constructor(repository: TransactionRepository) {
    this.repository = repository;
  }

  async execute() {
    return this.repository.getAll();
  }
}
