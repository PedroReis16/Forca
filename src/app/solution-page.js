import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles/pages/solution-page-style";
import { useLocalSearchParams } from "expo-router";
import { Keyboard } from "../components/keyboard";
import { WordView } from "../components/word-view";
import { useState } from "react";
import { CharacterView } from "../components/character-view";
import { Gallow } from "../components/gallow/gallow";
import { checkCharacter } from "../scripts/solution-page-script";

export default function Page() {
  const { word, wordTip } = useLocalSearchParams();
  const [revealedCharacter, setCharacter] = useState([]);
  const [errors, setErros] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.pageContent}>
        <Text style={styles.wordTip}>{wordTip}</Text>
        <Gallow erros={errors} />
        <WordView word={word} revealedKeys={revealedCharacter} />
        <CharacterView characters={revealedCharacter} />
        <Keyboard
          pressedKeys={revealedCharacter}
          onKeyPress={(key) => {
            console.log(key);

            if (!checkCharacter(key, word.toLowerCase())) {
              setErros(errors + 1);
            }
            setCharacter([...revealedCharacter, key]);
          }}
        />
      </View>
    </ScrollView>
  );
}
