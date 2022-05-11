import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },
});
