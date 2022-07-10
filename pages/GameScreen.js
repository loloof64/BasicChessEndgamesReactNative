import React, { Suspense } from 'react';
import {
  SafeAreaView, Button, ActivityIndicator,
} from 'react-native';

import ChessBoard from '../components/chess_board';

export default function GameScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Suspense fallback={<ActivityIndicator />}>
        <Button title="Go back to home page" onPress={() => navigation.goBack()} />
        <ChessBoard
          sizePx={300}
          relativeLeftPx={30}
          relativeTopPx={80}
          whiteCellColor="yellow"
          blackCellColor="brown"
        />
      </Suspense>
    </SafeAreaView>
  );
}
