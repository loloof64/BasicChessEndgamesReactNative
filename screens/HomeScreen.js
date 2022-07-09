import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  mainLabel: {
    fontSize: 20.0,
    color: 'coral',
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={styles.mainLabel}>
        This is the home page.
      </Text>
      <Button title="Go to game page" onPress={() => navigation.navigate('Game')} />
    </SafeAreaView>
  );
}
