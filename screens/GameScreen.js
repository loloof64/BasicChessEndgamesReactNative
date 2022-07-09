import React from 'react';
import {
  SafeAreaView, StatusBar, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  mainLabel: {
    fontSize: 20.0,
    color: 'lightgreen',
  },
});

export default function GameScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={styles.mainLabel}>
        This is the game page.
      </Text>
      <Button title="Go back to home page" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
