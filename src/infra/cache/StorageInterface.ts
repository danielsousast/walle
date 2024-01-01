export interface StorageInterface {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}
