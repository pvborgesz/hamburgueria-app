import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import RegisterUserCard from '../../components/RegisterUserCard';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
        <RegisterUserCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    // height: ",
    width: '80%',
  },
});
