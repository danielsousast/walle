import React from 'react';
import ReactNativeModal from 'react-native-modal';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

export function BaseModal({children, visible, onClose}: ModalProps) {
  return (
    <ReactNativeModal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={visible}
      onDismiss={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      onModalHide={onClose}>
      {children}
    </ReactNativeModal>
  );
}
