import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GoalImage from './GoalImage';
import DeleteWarning from './DeleteWarning'

const imageUrl = require('./me.jpg');

function GoalItem(props) {
  return (
    <ScrollView style={styles.listContainer}>
      <View style={styles.goalContainer}>
        <GoalImage imageUrl={imageUrl} />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.enteredText}>{props.text}</Text>
        <TouchableOpacity onPress={props.onDelete}>
          <DeleteWarning/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'pink',
    margin: 1,
    paddingBottom: 1
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  enteredText: {
    fontSize: 20

  },
  deleteButton: {
    color: 'red',
    fontSize: 15,
    padding: 10
  },
});
