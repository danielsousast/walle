import React from 'react';

import {
  ListAllTransactionUseCaseImpl,
  TransactionModel,
  transactionRepository,
} from '~/features/transaction';

const useCase = new ListAllTransactionUseCaseImpl(transactionRepository);

export const useAllTransactions = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState([] as TransactionModel[]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await useCase.execute();
        setData(response);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};
