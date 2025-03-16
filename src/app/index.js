import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/index-style";

export default function Page() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");

  const isButtonDisabled = word.length === 0 || hint.length === 0;

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
              value={hint}
              onChangeText={setHint}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            disabled={isButtonDisabled}
          >
            <Link
              href={isButtonDisabled ? "#" : "/solution-page"}
              style={styles.buttonBorder}
            >
              <View
                style={[
                  styles.buttonContent,
                  isButtonDisabled && styles.buttonContentDisabled,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isButtonDisabled && styles.buttonTextDisabled,
                  ]}
                >
                  Jogar
                </Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
