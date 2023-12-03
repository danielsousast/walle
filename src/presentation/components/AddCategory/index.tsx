import React from 'react';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ColorSelector from '../ColorSelector';
import {IconSelector} from '../IconSelector';
import {InputIcon} from '../InputIcon';
import {SectionTitle} from '../Shared/Typography';
import {ModalCotent, ModalShape, styles, TitleWrapper} from './styles';

type AddCategoryModalProps = {
  visible: boolean;
  onRequestClose: () => void;
};

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  visible,
  onRequestClose,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      swipeDirection={['down']}
      propagateSwipe
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      style={styles.modal}>
      <ModalCotent>
        <ModalShape />
        <TitleWrapper>
          <SectionTitle>Add Category</SectionTitle>
        </TitleWrapper>

        <InputIcon icon="edit" />

        <ColorSelector />
        <IconSelector />
      </ModalCotent>
    </Modal>
  );
};

export default AddCategoryModal;
