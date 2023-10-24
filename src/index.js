import generateJoke from "./generateJoke";
import "./style/styles.scss";
import img from "./assets/10315174.jpg";
const laught = document.getElementById("laugh");
laught.src = img;
generateJoke();
document.getElementById("jokeBtn").addEventListener("click", generateJoke);
