import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://supernatural-api.onrender.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/quotes/random");
    const lines = Object.values(result.data).filter((item) => item?.quote);
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    const quote = randomLine.quote;
    const characterName = randomLine.character.name;

    const character = await axios.get(API_URL + "/characters", {
      params: {
        name: characterName,
      },
    });

    const characterImg = character.data.data[0].img;

    res.render("index.ejs", {
      quote,
      characterName,
      characterImg,
      data: character.data.data[0].episodes,
    });
  } catch (e) {
    res.status(404).send(e.response.data);
  }
});

app.listen(port, () => {
  console.log("Server running on port:", port);
});
