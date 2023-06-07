export default function ImageGenerator() {
    var number = Math.floor(Math.random() * 100);

    var genderNumber = Math.random();
    var gender = genderNumber < 0.5 ? "men" : "women";

    var url = "https://randomuser.me/api/portraits/" + gender + "/" + number + ".jpg";

    return (url)
}