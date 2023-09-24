let nickname = 'DarkAngel';
let xp = 10000 //Substitua por uma string para verificar a frase de erro.
let level = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let classe = ""

if (xp <= 1000) {
  classe = level[0];
} else if (xp <= 2000) {
  classe = level[1];
} else if (xp <= 6000) {
  classe = level[2];
} else if (xp <= 7000) {
  classe = level[3];
} else if (xp <= 8000) {
  classe = level[4];
} else if (xp <= 9000) {
  classe = level[5];
} else if (xp <= 10000) {
  classe = level[6];
} else if (xp >= 10001) {
  classe = level[7];
} else{
  console.log("Alguma coisa deu errado!")
}

console.log(nickname + "é um herói de classe: " + classe)