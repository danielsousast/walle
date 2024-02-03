import {RepositoryBase} from '../shared/shared.interfaces';

export interface UserModel {
  id: number;
  username: string;
  password: string;
  email: string;
}

export interface UserRepository extends RepositoryBase<UserModel> {
  findByEmail: (email: string) => Promise<UserModel | null>;
}
