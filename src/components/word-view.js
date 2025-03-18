import { View, Text } from "react-native";
import { styles } from "../styles/components/word-view-style";

export function WordView({ word, revealedKeys }) {
  const wordCharacters = word.split("");

  return (
    <View style={styles.wordContainer}>
      {wordCharacters.map((character, index) =>
        character === " " ? (
          <Text key={index} style={styles.character}>
            {" "}
          </Text>
        ) : (
          <View key={index}>
            <Text
              style={[
                styles.character,
                {
                  opacity: revealedKeys.includes(character.toLowerCase())
                    ? 1
                    : 0,
                },
              ]}
            >
              {character}
            </Text>
            <View style={styles.characterUnderline} />
          </View>
        )
      )}
    </View>
  );
}
