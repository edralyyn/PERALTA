import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Modal , Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import MyModal from './components/MyModal';
import ErrorModal from './components/ErrorModal';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalCount, setGoalCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [emptyGoalError, setEmptyGoalError] = useState(false);

  useEffect(() => {
    if (goalCount >= 5) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [goalCount]);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.trim() === "") {
      setEmptyGoalError(true);
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setGoalCount((count) => count + 1);
      placeholdertext.clear();
    }
  };

  const closeEmptyGoalError = () => {
    setEmptyGoalError(false);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });

  };

  return (
    <View style={styles.appContainer}>
      <MyModal/>
      <Text style={styles.textStyle}>My List of Goals</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDelete={() => deleteGoalHandler(itemData.item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={showModal} animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>
          Don't overwhelm yourself with too much burden
        </Text>
        <Button title="Close" onPress={closeModal} />
      </View>
    </Modal>
    <ErrorModal
        visible={emptyGoalError}
        message="Please enter a valid goal text."
        onClose={closeEmptyGoalError}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'bisque',
    flex: 1,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  textStyle: {
    fontFamily: 'arial-narrow',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
    padding: 20,
    paddingTop: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
});
