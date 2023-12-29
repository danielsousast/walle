import React from 'react';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ColorSelector from '../ColorSelector';
import {IconSelector} from '../IconSelector';
import {InputIcon} from '../InputIcon';
import {SectionTitle} from '../Shared/Typography';
import * as Styled from './styles';

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
      style={Styled.styles.modal}>
      <Styled.ModalCotent>
        <Styled.ModalShape />
        <Styled.TitleWrapper>
          <SectionTitle>Add Category</SectionTitle>
        </Styled.TitleWrapper>
        <InputIcon icon="edit" />
        <ColorSelector />
        <IconSelector />
      </Styled.ModalCotent>
    </Modal>
  );
};

export default AddCategoryModal;
