import {Storage} from '~/infra/cache/Storage';
import {CategoryModel, CategoryRepository} from '../category.interfaces';

export const categories: CategoryModel[] = [
  {
    id: '1',
    name: 'Salário',
    description: 'Recebimento de salário',
    color: '#12A454',
    icon: 'dollar-sign',
  },
  {
    id: '2',
    name: 'Alimentação',
    description: 'Almoço em restaurante',
    color: '#FFAC30',
    icon: 'coffee',
  },
  {
    id: '3',
    name: 'Roupas',
    description: 'Compra de roupa',
    color: '#E83F5B',
    icon: 'shopping-bag',
  },
];

function init() {
  const response = Storage.getItem('categories');
  if (!response) {
    Storage.setItem('categories', categories);
  }
}

function getAll(): Promise<CategoryModel[]> {
  return Storage.getItem('categories') as Promise<CategoryModel[]>;
}

function create(params: CategoryModel) {
  categories.push(params);
  Storage.setItem('categories', categories);
}

function update(params: CategoryModel) {
  const response = getAll() as unknown as CategoryModel[];
  const index: number = response.findIndex(
    (item: CategoryModel) => item.id === params.id,
  );
  categories[index] = params;
  Storage.setItem('categories', response);
}

function remove(categoryId: string) {
  const response = getAll() as unknown as CategoryModel[];
  const index: number = response.findIndex(
    (item: CategoryModel) => item.id === categoryId,
  );
  categories.splice(index, 1);
  Storage.setItem('categories', response);
}

export const categoryRepositoryLocal: CategoryRepository = {
  getAll,
  create,
  update,
  remove,
  init,
};
