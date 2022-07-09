import React, { Suspense } from 'react';
import {
  SafeAreaView,
  Button,
  ActivityIndicator,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Suspense fallback={<ActivityIndicator />}>
        <Button title="Go to game page" onPress={() => navigation.navigate('Game')} />
      </Suspense>
    </SafeAreaView>
  );
}
