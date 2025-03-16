import { router } from "expo-router";
import { CustomSnackBar } from "../components/snackbar";

export function routeToSolutionPage(word, wordTip) {
  // Your function logic here

  if (!word) {
    showSnackbar("Insira uma palavra");
    return;
  }
  if (!wordTip) {
    showSnackbar("Insira uma dica");
    return;
  }

  router.push({
    pathname: "solution-page",
    params: { word: word, wordTip: wordTip },
  });
}

function showSnackbar(message) {
  CustomSnackBar.show(message);
}
