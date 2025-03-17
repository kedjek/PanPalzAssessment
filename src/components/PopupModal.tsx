import React from 'react';
import { Modal, View, StyleSheet, Dimensions } from 'react-native';
import CustomButton from './buttons/ReusableButton';
import TextComponent from './TextComponent';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type PopupModalProps = {
  visible: boolean;
  onAgree: () => void;
  title?: string;
  message: string;
  buttonText: string;
};

const PopupModal = ({
  visible,
  onAgree,
  title,
  message,
  buttonText,
}: PopupModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="none">
      <View style={styles.modalContainer} testID='modal-container'>
        <View style={styles.modalContent}>
          {title && <TextComponent children={title} size="h2" color="#000000" style={styles.title} testID='title-text'/>}
          <TextComponent children={message} size="p4" color="#000000" style={styles.messageText} testID='message-text'/>
            <CustomButton text={buttonText} theme="light" variant="primary" onClick={onAgree} testID="agree-button" style={styles.buttonContainer}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: screenWidth*.05,
    backgroundColor: 'white',
    borderRadius: screenWidth*.06,
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: screenHeight*.01,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  messageText: {
    textAlign: 'left',
    marginBottom: screenHeight*.02,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    marginTop: screenHeight*.02,
    width: '100%',
    alignItems: 'center',
  },
});

export default PopupModal;
