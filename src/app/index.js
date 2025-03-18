import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../styles/pages/index-style";
import { TecladoVirtual } from "../components/keyboard";
import { WordView } from "../components/word-view";
import forca0 from "../../assets/forca0.png";
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";

export default function Page() {
  const [palavras, setPalavras] = useState(["palmeiras", 
                                            "gato", 
                                            "arriscou", 
                                            "react native", 
                                            "java", 
                                            "pressa", 
                                            "roma", 
                                            "peixinho", 
                                            "problemas", 
                                            "velho"]);
  const [dicas, setDicas] = useState(["clube de futebol paulista",
                                       "quem caçou sem cão usou...",
                                       "o que fez quem petisca",
                                       "desenvolvimento mobile",
                                       "melhor linguagem... dizem os loucos",
                                       "inimiga da perfeição", 
                                       "quem chegou em... tem boca", 
                                       "filho do peixe", 
                                       "todos tem... cada um com o seus", 
                                       "do que morreu o seguro"])
  const [charUsados, setCharUsados] = useState([]);
  const [idxPalavra, setIdxPalavra] = useState(0);
  const [erros, setErros] = useState(0);

  const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  const imagemAtual = imagensForca[erros];


  const palavraAtual = palavras[idxPalavra]

  const venceu = palavraAtual.split("").every((char) =>
    char === " " || charUsados.includes(char.toLowerCase())
  );

  useEffect(() => {
    if (erros >= 6) {
      Alert.alert(
        "Game Over",
        "Você perdeu! Tente novamente.",
        [
          {
            text: "Tente novamente",
            onPress: () => reiniciaJogo(),
          },
        ]
      );
    }
  }, [erros])

  function reiniciaJogo() {
    setIdxPalavra(0);
    setErros(0);
    setCharUsados([])
  }
  function avancarPalavra() {
    console.log(palavras.length)
    console.log(idxPalavra)
    if (idxPalavra < palavras.length-1) {
      console.log("to no if")
      setIdxPalavra(idxPalavra + 1)
      setErros(0);
      setCharUsados([])
    } else {
      console.log("to no else")
      Alert.alert(
        "Vitória",
        "Você passou todas palavras.",
        [
          {
            text: "Jogar novamente",
            onPress: () => reiniciaJogo(),
          },
        ]
      );
    }
  }

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
        <Image source={imagemAtual} style={styles.forcaImg} />

        {venceu && (
          <View style={styles.overlay}>
            <View style={styles.popup}>
              <Text style={styles.text}>Parabéns, você acertou!</Text>
              <TouchableOpacity onPress={avancarPalavra} style={styles.btnAvancar}>
                <Text style={styles.txtAvancar}>Próxima palavra</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <Text style={styles.txtDica}>Dica: {dicas[idxPalavra]}</Text>
        <WordView word={palavras.at(idxPalavra)} charUsados={charUsados} />
        <TecladoVirtual
          pressedKeys={charUsados}
          onKeyPress={(key) => {
            if (!charUsados.includes(key.toLowerCase())) {
              setCharUsados([...charUsados, key.toLowerCase()]);

              if (!palavraAtual.includes(key)) {
                setErros(erros + 1);
              }
            }
            console.log(charUsados)
          }}
        />
      </View>
    </ScrollView>
  );
}
