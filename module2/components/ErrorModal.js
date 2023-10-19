import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

function ErrorModal(props) {
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{props.message}</Text>
        <Button title="Close" onPress={props.onClose} />
      </View>
    </Modal>
  );
}

export default ErrorModal;
