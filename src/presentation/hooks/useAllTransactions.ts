import {useQuery} from '@tanstack/react-query';
import {ListTransactionsUseCaseImpl} from '~/data/usecases';

const lisTransactions = new ListTransactionsUseCaseImpl();

export const useAllTransactions = () =>
  useQuery(['all-transactions'], () => lisTransactions.execute());
