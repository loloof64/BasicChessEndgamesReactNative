import React, { Suspense } from 'react';
import {
  SafeAreaView, Button, ActivityIndicator,
} from 'react-native';

export default function GameScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Suspense fallback={<ActivityIndicator />}>
        <Button title="Go back to home page" onPress={() => navigation.goBack()} />
      </Suspense>
    </SafeAreaView>
  );
}
