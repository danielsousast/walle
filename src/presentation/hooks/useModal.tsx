import React, {createContext, useCallback, useContext, useState} from 'react';
import AddCategoryModal from '../components/AddCategory';
import {AddTransactionModal} from '../components/AddTransaction';
import {ModalMenu} from '../components/ModalMenu/ModalMenu';

interface ContextData {
  showAddTransactionModal(title: string): void;
  handleOpenModalMenu(): void;
  closeAddTransactionModal(): void;
  showAddCategoryModal(): void;
  closeAddCategoryModal(): void;
}

const ModalContext = createContext<ContextData>({} as ContextData);

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [modalMenuVisible, setModalMenuVisible] = useState(false);
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

  const handleOpenModalMenu = useCallback(() => {
    setModalMenuVisible(true);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        showAddTransactionModal,
        closeAddTransactionModal,
        showAddCategoryModal,
        closeAddCategoryModal,
        handleOpenModalMenu,
      }}>
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
      <ModalMenu
        visible={modalMenuVisible}
        onClose={() => setModalMenuVisible(false)}
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

export {ModalProvider, useModal};
