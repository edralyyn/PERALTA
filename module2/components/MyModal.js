import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import HideSourceSharpIcon from '@mui/icons-material/HideSourceSharp';

const App = () => {
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
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Im Edralyn</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <HideSourceSharpIcon/>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <AccountBoxSharpIcon />

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
modal: {
  margin: 15,
  alignItems: 'flex-end',  
},
modalView: {
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1,
  backgroundColor: 'pink',
  padding: 2,
},
modalText: {
  margin: 15,
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
}

});

export default App;