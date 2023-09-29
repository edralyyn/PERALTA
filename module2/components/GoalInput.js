import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Pressable, Text} from 'react-native';

function GoalInput(props) {
const [enteredGoalText, setEnteredGoalText] = useState('');

function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
};

function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
};

    return(

        <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal'
        id = 'placeholdertext'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        />
        <Pressable style={styles.press}
        onPress={addGoalHandler}>
            <Text>ADD GOAL</Text>
        </Pressable>
        </View>

    );
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        borderColor: '#cccccc',
        paddingBottom: 10,
        paddingStart: 17,
        paddingEnd: 17
      },
      textInput: {
        borderWidth: 3,
        borderColor: 'crimson',
        marginRight: 10,
        padding: 5,
        width: '100%'
      },
      press: {
        backgroundColor: 'pink',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
      },


});