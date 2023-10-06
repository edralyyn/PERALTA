import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const DeleteWarning = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.modal}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.CenterView}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>You are deleting this item</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <DeleteTwoToneIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
modal: {
  margin: 15,
  alignItems: 'center',
  justifyContent: 'center',
},
CenterView: {
  alignItems: 'center',
  backgroundColor: 'red',
  justifyContent: 'center'
},
modalText: {
  margin: 15,
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
}

});

export default DeleteWarning;