import {transactionRepository} from '../repositories';
import {TransactionModel} from '../transaction.interfaces';
import {HookOptions} from '~/features/shared';
import {useState} from 'react';

export function useCreateTransaction(options?: HookOptions) {
  const [isLoading, setIsLoading] = useState(false);

  async function createTransaction(params: TransactionModel) {
    try {
      setIsLoading(true);
      await transactionRepository.create({...params});
      options?.onSuccess && options?.onSuccess();
    } catch (error) {
      options?.onError && options?.onError();
    } finally {
      setIsLoading(false);
    }
  }

  return {createTransaction, isLoading};
}
