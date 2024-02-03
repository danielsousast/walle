import React, {createContext, useCallback, useContext, useState} from 'react';
import AddCategoryModal from '../components/AddCategory';
import {ModalMenu} from '../components/ModalMenu/ModalMenu';

interface ContextData {
  handleOpenModalMenu(): void;
  showAddCategoryModal(): void;
  closeAddCategoryModal(): void;
}

const ModalContext = createContext<ContextData>({} as ContextData);

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [modalMenuVisible, setModalMenuVisible] = useState(false);
  const [addCategoryModal, setAddCategoryModal] = useState({
    visible: false,
  });

  const showAddCategoryModal = useCallback(() => {
    setAddCategoryModal({
      visible: true,
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
        showAddCategoryModal,
        closeAddCategoryModal,
        handleOpenModalMenu,
      }}>
      {children}

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
