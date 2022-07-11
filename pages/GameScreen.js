import React, { Suspense, useState } from 'react';
import {
  SafeAreaView, Button, ActivityIndicator, Dimensions,
} from 'react-native';

import ChessBoard from '../components/chess_board';

function computeBoardSize() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = (windowHeight * 1.0) / windowWidth;
  return windowWidth < windowHeight ? windowWidth : parseInt(windowHeight * ratio, 10);
}

export default function GameScreen({ navigation }) {
  const [reversed, setReversed] = useState(false);

  const [boardSizePx, setBoardSizePx] = useState(computeBoardSize());

  Dimensions.addEventListener('change', () => {
    setBoardSizePx(computeBoardSize());
  });

  return (
    <SafeAreaView>
      <Suspense fallback={<ActivityIndicator />}>
        <Button title="Go back to home page" onPress={() => navigation.goBack()} />
        <ChessBoard
          sizePx={boardSizePx}
          reversed={reversed}
        />
        <Button title="Reverse board" onPress={() => setReversed((old) => !old)} />
      </Suspense>
    </SafeAreaView>
  );
}
