import {useEffect, useState} from 'react';
import {AccountModel} from '../account.interfaces';
import {HookOptions} from '~/features/shared';
import {accountRepository} from '../repositories/accountRepositoryLocal';

export function useListAccounts(options?: HookOptions) {
  const [accounts, setAccounts] = useState<AccountModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getAccounts() {
    try {
      setIsLoading(true);
      const response = await accountRepository.getAll();
      if (response) {
        setAccounts(response);
      }
      options?.onSuccess && options?.onSuccess();
    } catch (error) {
      options?.onError && options?.onError();
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAccounts();
  }, []);

  return {
    accounts,
    isLoading,
  };
}
