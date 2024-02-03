import {RepositoryBase} from '../shared/shared.interfaces';
import {UserModel} from '../user/user.interfaces';

export interface AccountModel {
  id: string;
  name: string;
  balance: number;
  type: string;
  user: UserModel;
}

export interface AccountRepository extends RepositoryBase<AccountModel> {
  init: () => void;
}
