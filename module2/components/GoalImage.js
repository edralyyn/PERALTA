import React from 'react';
import { Image, StyleSheet } from 'react-native';

const GoalImage = ({ imageUrl }) => {
  return (
    <Image source={{ uri: imageUrl }} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 5
  },
});

export default GoalImage;
