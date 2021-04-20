import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Build React Native Apps with RN element UI</Text>
      <StatusBar style="auto" />
      <Button
        icon={
            <Icon
              name="arrow-left"
              size={15}
              color="white"
            />
          }
      title="Start Coding Now"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
