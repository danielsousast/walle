import {Storage} from '~/infra/cache/Storage';
import {UserModel, UserRepository} from '../user.interfaces';

function create(params: UserModel) {
  Storage.setItem('user', JSON.stringify(params));
}

async function findByEmail(email: string): Promise<UserModel | null> {
  const users = await getAll();
  const user = users.find((item: UserModel) => item.email === email);
  return user ? Promise.resolve(user) : Promise.resolve(null);
}

function getAll() {
  const response = Storage.getItem('users') as unknown as UserModel[];
  return Promise.resolve(response);
}

export const userRepository: UserRepository = {
  create,
  findByEmail,
  getAll,
};
