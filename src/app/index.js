import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { routeToSolutionPage, useRandomPhrase } from "../scripts/index-script";
import { styles } from "../styles/pages/index-style";
import { baseStyles } from "../styles/pages/style";
import { CustomSnackBar } from "../components/snackbar";

export default function Page() {
  const [word, setWord] = useState("");
  const [wordTip, setHint] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.container}
    >
      <View style={styles.pageContent}>
        <Image
          style={styles.gameLogo}
          source={require("../../assets/icone.png")}
        />
        <View style={styles.gameInputs}>
          <View style={[styles.inputContainer, styles.wordInput]}>
            <TextInput
              style={styles.input}
              placeholder="Digite uma palavra"
              placeholderTextColor="#8B4513"
              maxLength={10}
              value={word}
              onChangeText={setWord}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Insira uma dica"
              placeholderTextColor="#8B4513"
              maxLength={30}
              value={wordTip}
              onChangeText={setHint}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.randomOption]}
            onPress={() => useRandomPhrase()}
          >
            <Text style={styles.randomOptionText}>
              Jogar com frase aleatória
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[baseStyles.button]}
            onPress={() => {
              routeToSolutionPage(word, wordTip);
              setWord("");
              setHint("");
            }}
          >
            <View style={baseStyles.buttonBorder}>
              <Text style={[baseStyles.buttonText]}>Jogar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <CustomSnackBar />
    </ScrollView>
  );
}
