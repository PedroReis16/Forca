import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/pages/solution-page-style";
import { useLocalSearchParams } from "expo-router";
import { Keyboard } from "../components/keyboard";
import { WordView } from "../components/word-view";
import { useState } from "react";
import { CharacterView } from "../components/character-view";
import { Gallow } from "../components/gallow/gallow";
import {
  checkCharacter,
  checkWord,
  returnToIndex,
} from "../scripts/solution-page-script";

export default function Page() {
  const { word, wordTip } = useLocalSearchParams();
  const [revealedCharacter, setCharacter] = useState([]);
  const [errors, setErros] = useState(0);
  const [hasWon, setWin] = useState(false);
  const [hasLost, setLost] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.pageContent}>
        <Text style={styles.wordTip}>{wordTip}</Text>
        <Gallow erros={errors} />

        {hasWon && (
          <View>
            <Text style={styles.winMessage}>Você ganhou!</Text>

            <TouchableOpacity onPress={() => returnToIndex()}>
              <Text style={styles.tryAgain}>Jogar novamente</Text>
            </TouchableOpacity>
          </View>
        )}
        {hasLost && (
          <View>
            <Text style={styles.lostMessage}>Você perdeu!</Text>
            <TouchableOpacity onPress={() => window.location.reload()}>
              <Text style={styles.tryAgain}>Tentar novamente</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => returnToIndex()}>
              <Text style={styles.tryAgain}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}
        {!hasWon && !hasLost && (
          <View style={styles.gameContent}>
            <WordView word={word} revealedKeys={revealedCharacter} />
            <CharacterView characters={revealedCharacter} />
            <Keyboard
              pressedKeys={revealedCharacter}
              onKeyPress={(key) => {
                if (!checkCharacter(key, word.toLowerCase())) {
                  setErros(errors + 1);
                }
                var keys = [...revealedCharacter, key];

                setCharacter(keys);

                if (checkWord(keys, word.toLowerCase())) {
                  setWin(true);
                } else if (errors >= 5) {
                  setLost(true);
                }
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
