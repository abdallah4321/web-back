import axios from "axios";
export default function generateJoke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  axios
    .get("https://icanhazdadjoke.com", config)
    .then(
      (res) => (document.getElementById("joke").textContent = res.data.joke)
    );
}
