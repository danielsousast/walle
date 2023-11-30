export interface CreateTransactionsUseCase {
  execute: (params: any) => Promise<void>;
}
