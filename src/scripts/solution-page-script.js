import { router } from "expo-router";

export function checkCharacter(character, word) {
  if (word.includes(character)) {
    return true;
  }
  return false;
}

export function checkWord(characterList, word) {
  for (let i = 0; i < word.length; i++) {
    if (!characterList.includes(word[i])) {
      return false;
    }
  }
  return true;
}

export function returnToIndex() {
  router.push({ pathname: "/" });
}
