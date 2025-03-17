import { router } from "expo-router";
import { CustomSnackBar } from "../components/snackbar";

export function routeToSolutionPage(word, wordTip) {
  // Your function logic here

  // if (!word) {
  //   showSnackbar("Insira uma palavra");
  //   return;
  // }
  // if (!wordTip) {
  //   showSnackbar("Insira uma dica");
  //   return;
  // }

  router.push({
    pathname: "solution-page",
    params: { word: word, wordTip: wordTip },
  });
}

function showSnackbar(message) {
  CustomSnackBar.show(message);
}

export function useRandomPhrase() {
  const words = [
    { word: "Amigo", tip: "Pessoa querida" },
    { word: "Cachorro", tip: "Animal doméstico" },
    { word: "Sol", tip: "Estrela do dia" },
    { word: "Lua", tip: "Satélite noturno" },
    { word: "Praia", tip: "Areia e mar" },
    { word: "Verde", tip: "Cor da natureza" },
    { word: "Livro", tip: "Fonte de conhecimento" },
    { word: "Paz", tip: "Tranquilidade interna" },
    { word: "Festa", tip: "Celebração alegre" },
    { word: "Sabor", tip: "Gosto marcante" },
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  words[randomIndex];

  router.push({
    pathname: "solution-page",
    params: { word: words[randomIndex].word, wordTip: words[randomIndex].tip },
  });
}
