import { Ui } from "./ui.module.js";

export class getDetails {
  constructor() {
    document.getElementById("btnClose").addEventListener("click", function () {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
  }
  async getGameDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options,
    );
    const response = await api.json();
    setTimeout(() => {
      document.querySelector(".loading").classList.add("d-none");
    }, 500);
    let deatils = new Ui();

    deatils.displayDetailsGame(response);
  }
}

//https://www.freetogame.com/api/game?id=452
