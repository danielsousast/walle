import React from 'react';

const DEFAULT_SHORTCUTS = [
  {
    id: '1',
    title: 'Transactions',
    icon: 'transaction',
    navigateTo: 'Transactions',
  },
  {
    id: '2',
    title: 'Accounts',
    icon: 'bank',
    navigateTo: 'Accounts',
  },
  {
    id: '3',
    title: 'Categories',
    icon: 'category',
    navigateTo: 'Categories',
  },
];

const useShortcuts = () => {
  const [activeShortcuts] =
    React.useState<any[]>(DEFAULT_SHORTCUTS);

  return {
    activeShortcuts,
  };
};

export default useShortcuts;
