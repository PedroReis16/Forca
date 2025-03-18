import { router } from "expo-router";
import { CustomSnackBar } from "../components/snackbar";

const words = [
  { word: "Guitarra", tip: "Instrumento musical de cordas" },
  { word: "Elefante", tip: "Maior animal terrestre" },
  { word: "Abacaxi", tip: "Fruta tropical com coroa" },
  { word: "Foguete", tip: "Usado para viagens espaciais" },
  { word: "Computador", tip: "Máquina de processar dados" },
  { word: "Canguru", tip: "Salta e vive na Austrália" },
  { word: "Girassol", tip: "Flor que segue o sol" },
  { word: "Planeta", tip: "Corpo celeste no espaço" },
  { word: "Pinguim", tip: "Ave que não voa e vive no frio" },
  { word: "Pirata", tip: "Navegador que rouba no mar" },
  { word: "Jacaré", tip: "Réptil de água doce" },
  { word: "Sanfona", tip: "Instrumento de fole" },
  { word: "Abelha", tip: "Inseto que produz mel" },
  { word: "Castelo", tip: "Fortaleza medieval" },
  { word: "Diamante", tip: "Pedra preciosa brilhante" },
  { word: "Oceano", tip: "Grande massa de água salgada" },
  { word: "Espelho", tip: "Reflete imagens" },
  { word: "Trem", tip: "Veículo sobre trilhos" },
  { word: "Telefone", tip: "Dispositivo de comunicação" },
  { word: "Montanha", tip: "Grande elevação natural" },
  { word: "Relógio", tip: "Marca o tempo" },
  { word: "Jardim", tip: "Espaço com plantas e flores" },
  { word: "Flauta", tip: "Instrumento de sopro" },
  { word: "Camaleão", tip: "Muda de cor para se camuflar" },
  { word: "Sombra", tip: "Criada pela luz e objetos" },
  { word: "Pintura", tip: "Arte com cores e pincéis" },
  { word: "Chapéu", tip: "Acessório para a cabeça" },
  { word: "Baleia", tip: "Maior mamífero marinho" },
  { word: "Ponte", tip: "Liga dois pontos sobre água" },
  { word: "Tesouro", tip: "Riqueza escondida" },
  { word: "Software", tip: "Conjunto de programas" },
  { word: "Hardware", tip: "Parte física do computador" },
  { word: "Servidor", tip: "Processa e fornece dados" },
  { word: "Firewall", tip: "Proteção contra ataques" },
  { word: "Criptografia", tip: "Codificação de informações" },
  { word: "Cache", tip: "Memória de acesso rápido" },
  { word: "Bit", tip: "Menor unidade de dados" },
  { word: "Byte", tip: "Conjunto de 8 bits" },
  { word: "Rede", tip: "Conexão entre dispositivos" },
  { word: "Banco", tip: "Armazena dados estruturados" },
  { word: "Nuvem", tip: "Armazenamento online" },
  { word: "Backup", tip: "Cópia de segurança" },
  { word: "Script", tip: "Código de automação" },
  { word: "Token", tip: "Autenticação digital" },
  { word: "Domínio", tip: "Endereço de um site" },
  { word: "Router", tip: "Distribui internet" },
  { word: "Login", tip: "Acesso ao sistema" },
  { word: "Código", tip: "Instruções para um sistema" }
];

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

export function useRandomPhrase() {

  const randomIndex = (Math.random() * words.length) | 0;
  words[randomIndex];

  router.push({
    pathname: "solution-page",
    params: { word: words[randomIndex].word, wordTip: words[randomIndex].tip },
  });
}
