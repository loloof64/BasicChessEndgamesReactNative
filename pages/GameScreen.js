import React, { Suspense, useState } from 'react';
import {
  SafeAreaView, Button, ActivityIndicator,
} from 'react-native';

import ChessBoard from '../components/chess_board';

export default function GameScreen({ navigation }) {
  const [reversed, setReversed] = useState(false);

  return (
    <SafeAreaView>
      <Suspense fallback={<ActivityIndicator />}>
        <Button title="Go back to home page" onPress={() => navigation.goBack()} />
        <ChessBoard
          sizePx={590}
          reversed={reversed}
        />
        <Button title="Reverse board" onPress={() => setReversed((old) => !old)} />
      </Suspense>
    </SafeAreaView>
  );
}
