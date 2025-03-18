import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/pages/solution-page-style";
import { baseStyles } from "../styles/pages/style";
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

        <WordView word={word} revealedKeys={revealedCharacter} />
        {hasWon && (
          <View style={styles.finalGameContainer}>
            <Text style={styles.finalGameMessage}>Você ganhou!</Text>

            {styledButton({ text: "Sair", onPress: () => returnToIndex() })}
          </View>
        )}
        {hasLost && (
          <View style={styles.finalGameContainer}>
            <Text style={styles.finalGameMessage}>Você perdeu!</Text>
            <TouchableOpacity onPress={() => {
              setCharacter([]);
              setErros(0);
              setWin(false);
              setLost(false);
            }}>
              <Text style={styles.tryAgain}>Tentar novamente</Text>
            </TouchableOpacity>
            {styledButton({ text: "Sair", onPress: () => returnToIndex() })}
          </View>
        )}
        {!hasWon && !hasLost && (
          <View style={styles.gameContent}>
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

function styledButton({ text, onPress }) {
  return (<View>
    <TouchableOpacity
      style={[baseStyles.button]}
      onPress={() => onPress()}
    >
      <View style={baseStyles.buttonBorder}>
        <Text style={[baseStyles.buttonText]}>{text}</Text>
      </View>
    </TouchableOpacity>
  </View>);
}
