import {Storage} from '~/infra/cache/Storage';
import {AccountModel, AccountRepository} from '../account.interfaces';

function init() {
  const accounts = getAll();
  if (!accounts) {
    create({
      id: '1',
      name: 'Carteira',
      balance: 0,
      type: 'wallet',
      user: {
        id: 1,
        username: 'User',
        email: '',
        password: '',
      },
    });
  }
}

function getAll(): Promise<AccountModel[]> {
  return Storage.getItem('accounts') as Promise<AccountModel[]>;
}

function create(params: AccountModel) {
  Storage.setItem('accounts', params);
}

function update(params: AccountModel) {
  const accounts = getAll() as unknown as AccountModel[];
  const index: number = accounts.findIndex(
    (item: AccountModel) => item.id === params.id,
  );
  accounts[index] = params;
  Storage.setItem('accounts', accounts);
}

function remove(accountId: string) {
  const accounts = getAll() as unknown as AccountModel[];
  const index: number = accounts.findIndex(
    (item: AccountModel) => item.id === accountId,
  );
  accounts.splice(index, 1);
  Storage.setItem('accounts', accounts);
}

export const accountRepository: AccountRepository = {
  getAll,
  create,
  update,
  remove,
  init,
};
