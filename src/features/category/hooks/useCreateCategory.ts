import {HookOptions} from '~/features/shared/shared.interfaces';
import {categoryRepository} from '../repositories';
import {CategoryModel} from '../category.interfaces';
import {useState} from 'react';

export function useCreateCategory(options?: HookOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const createCategory = async (params: CategoryModel) => {
    try {
      setIsLoading(true);
      await categoryRepository.create(params);

      options?.onSuccess && options?.onSuccess();
    } catch (error) {
      options?.onError && options?.onError();
    } finally {
      setIsLoading(false);
    }
  };

  return {isLoading, createCategory};
}
