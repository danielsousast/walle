import {RepositoryBase} from '../shared/shared.interfaces';

export interface CategoryModel {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export type CreateCategoryDTO = Omit<CategoryModel, 'id'>;

export interface CategoryRepository extends RepositoryBase<CategoryModel> {
  init: () => void;
}
