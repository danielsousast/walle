import {useEffect, useState} from 'react';
import {HookOptions} from '~/features/shared/shared.interfaces';
import {categoryRepository} from '../repositories';
import {CategoryModel} from '../category.interfaces';

export function useListCategories(options?: HookOptions) {
  const [categories, setCategories] = useState([] as CategoryModel[]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCategories() {
    try {
      setIsLoading(true);
      const response = await categoryRepository.getAll();
      setCategories(response);
    } catch {
      options?.onError && options?.onError();
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return {
    categories,
    isLoading,
  };
}
