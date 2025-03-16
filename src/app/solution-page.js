import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles/pages/solution-page-style";
import { useLocalSearchParams } from "expo-router";
import { Keyboard } from "../components/keyboard";
import { WordView } from "../components/word-view";
import { useState } from "react";
import { CharacterView } from "../components/character-view";

export default function Page() {
  const { word, wordTip } = useLocalSearchParams();
  const [revealedCharacter, setCharacter] = useState([]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.pageContent}>
        <Text style={styles.wordTip}>{wordTip}</Text>
        <WordView word={word} revealedKeys={revealedCharacter} />
        <CharacterView characters={revealedCharacter} />
        <Keyboard
          pressedKeys={revealedCharacter}
          onKeyPress={(key) => {
            setCharacter([...revealedCharacter, key.toLowerCase()]);
          }}
        />
      </View>
    </ScrollView>
  );
}
