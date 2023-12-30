import React from 'react';
import {Routes} from '~/common/enums/Routes.enums';

const DEFAULT_SHORTCUTS = [
  {
    id: '1',
    title: 'transactions',
    icon: 'transaction',
    navigateTo: Routes.Transactions,
  },
  {
    id: '2',
    title: 'accounts',
    icon: 'bank',
    navigateTo: Routes.Accounts,
  },
  {
    id: '3',
    title: 'categories',
    icon: 'category',
    navigateTo: Routes.Categories,
  },
];

const useShortcuts = () => {
  const [activeShortcuts] = React.useState<any[]>(DEFAULT_SHORTCUTS);

  return {
    activeShortcuts,
  };
};

export default useShortcuts;
