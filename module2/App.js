import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import MyModal from './components/MyModal';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    placeholdertext.clear();
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
});
