import {CategoryModel} from '../category/category.interfaces';
import {RepositoryBase} from '../shared/shared.interfaces';

export interface TransactionModel {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: CategoryModel;
}

export interface TransactionRepository
  extends RepositoryBase<TransactionModel> {}
