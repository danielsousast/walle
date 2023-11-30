import React, { createContext, useCallback, useContext, useState } from 'react';
import AddCategoryModal from '../components/AddCategory';
import { AddTransactionModal } from '../components/AddTransaction';

interface ContextData {
  showAddTransactionModal(title: string): void;
  closeAddTransactionModal(): void;
  showAddCategoryModal(): void;
  closeAddCategoryModal(): void;
}

const ModalContext = createContext<ContextData>({} as ContextData);

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [addTransactionModal, setAddTransactionModal] = useState({
    visible: false,
    title: '',
  });
  const [addCategoryModal, setAddCategoryModal] = useState({
    visible: false,
  });

  const showAddTransactionModal = useCallback((title: string) => {
    setAddTransactionModal({
      visible: true,
      title,
    });
  }, []);

  const showAddCategoryModal = useCallback(() => {
    setAddCategoryModal({
      visible: true,
    });
  }, []);

  const closeAddTransactionModal = useCallback(() => {
    setAddTransactionModal({
      visible: false,
      title: '',
    });
  }, []);

  const closeAddCategoryModal = useCallback(() => {
    setAddCategoryModal({
      visible: false,
    });
  }, []);

  return (
    <ModalContext.Provider
      value={{
        showAddTransactionModal,
        closeAddTransactionModal,
        showAddCategoryModal,
        closeAddCategoryModal,
      }}
    >
      {children}
      <AddTransactionModal
        visible={addTransactionModal.visible}
        title={addTransactionModal.title}
        onRequestClose={closeAddTransactionModal}
      />
      <AddCategoryModal
        visible={addCategoryModal.visible}
        onRequestClose={closeAddCategoryModal}
      />
    </ModalContext.Provider>
  );
};

function useModal(): ContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
