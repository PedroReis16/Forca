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
import { routeToSolutionPage } from "../scripts/index-script";
import { styles } from "../styles/pages/index-style";
import { CustomSnackBar } from "../components/snackbar";
import { TecladoVirtual } from "../components/keyboard";
import { WordView } from "../components/word-view";

export default function Page() {
  const [word, setWord] = useState("");
  const [wordTip, setHint] = useState("");

  const [palavras, setPalavras] = useState(["banana", "peugeot"]);
  const [dicas, setDicas] = useState(["fruta", "marca de carro"])
  const [charUsados, setCharUsados] = useState([]);
  const [idxPalavra, setIdxPalavra] = useState(0);

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

        
        <View>

       {/*  <View style={styles.gameInputs}>
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
            style={[styles.button]}
            onPress={() => {
              routeToSolutionPage(word, wordTip);
            }}
          >
            <View style={styles.buttonBorder}>
              <Text style={[styles.buttonText]}>Jogar</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        
        </View>

        <WordView word={palavras.at(idxPalavra)} charUsados={charUsados} />
        <TecladoVirtual
          pressedKeys={charUsados}
          onKeyPress={(key) => {
            if (!charUsados.includes(key.toLowerCase())) {
              setCharUsados([...charUsados, key.toLowerCase()]);
            }
            console.log(charUsados)
          }}
        />
      </View>
      <CustomSnackBar />
    </ScrollView>
  );
}
