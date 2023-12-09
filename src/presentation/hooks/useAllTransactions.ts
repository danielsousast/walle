import {useQuery} from '@tanstack/react-query';
import {ReactQueryKeys} from '~/common/enums';
import {
  ListAllTransactionUseCaseImpl,
  transactionRepository,
} from '~/modules/transaction';

export const useAllTransactions = () => {
  const useCase = new ListAllTransactionUseCaseImpl(transactionRepository);

  const {isLoading, isError, data} = useQuery({
    queryKey: [ReactQueryKeys.GetAllTransactions],
    queryFn: useCase.execute,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
