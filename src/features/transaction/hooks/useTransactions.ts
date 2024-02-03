import React from 'react';
import {TransactionModel} from '../transaction.interfaces';
import {transactionRepository} from '../repositories';

export const useTransactions = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState([] as TransactionModel[]);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await transactionRepository.getAll();
      setData(response);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};
