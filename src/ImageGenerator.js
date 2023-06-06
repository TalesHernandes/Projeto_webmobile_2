export default function ImageGenerator() {
    var number = Math.floor(Math.random() * 100);

    // Gera um número aleatório entre 0 e 1 para determinar o gênero
    var genderNumber = Math.random();
    var gender = genderNumber < 0.5 ? "men" : "women";

    // Constrói a URL da imagem com as variáveis aleatórias
    var url = "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";

    return (url)
}