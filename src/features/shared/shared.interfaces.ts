export interface RepositoryBase<T> {
  create: (params: T) => void;
  getAll: () => Promise<T[]>;
  update?: (params: T) => void;
  remove?: (params: string) => void;
}

export interface HookOptions {
  onSuccess?: () => void;
  onError?: () => void;
}
