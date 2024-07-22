import { Ui } from "./ui.module.js";
import { getDetails } from "./details.module.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".navbarLinks a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".navbarLinks .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(link.getAttribute("data-category"));
      });
    });
  }

  async getGames(category) {
    document.querySelector(".loading").classList.remove("d-none");
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
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options,
    );
    const response = await api.json();
    setTimeout(() => {
      document.querySelector(".loading").classList.add("d-none");
    }, 250);
    let games = new Ui();
    games.displayData(response);

    this.getId();
  }

  getId() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", function () {
        document.querySelector(".loading").classList.remove("d-none");

        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        let game = new getDetails();
        game.getGameDetails(item.getAttribute("data-id"));
      });
    });
  }
}
