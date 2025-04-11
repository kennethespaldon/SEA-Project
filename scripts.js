/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

import { players } from "./players.js";

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let playerCardNames = [
  "Lebron James",
  "Lebron James",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (const player in players) {
    let imageURL = players[player].image;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, player, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

// My own functions...
const statsBtn = document.querySelector(".stats-btn");
const awardsBtn = document.querySelector(".awards-btn");
const addPlayerBtn = document.querySelector(".add-player-btn");

// Dialog elements
const addPlayerDialog = document.querySelector(".add-player-dialog");
const dialogBtns = document.querySelector(".dialog-btns");
const dialogAddBtn = document.querySelector(".dialog-add-btn");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");

// Input elements for adding a new player
const playerNameInput = document.querySelector("#player-name-input");

const regularGamesPlayedInput = document.querySelector("#regular-gms-input");
const regularPpgInput = document.querySelector("#regular-ppg-input");
const regularRpgInput = document.querySelector("#regular-rpg-input");
const regularApgInput = document.querySelector("#regular-apg-input");
const regularSpgInput = document.querySelector("#regular-spg-input");
const regularBpgInput = document.querySelector("#regular-bpg-input");
const regularFgPctInput = document.querySelector("#regular-fgpct-input");
const regularTpPctInput = document.querySelector("#regular-tppct-input");
const regularFtPctInput = document.querySelector("#regular-ftpct-input");

const playoffsGamesPlayedInput = document.querySelector("#playoffs-gms-input");
const playoffsPpgInput = document.querySelector("#playoffs-ppg-input");
const playoffsRpgInput = document.querySelector("#playoffs-rpg-input");
const playoffsApgInput = document.querySelector("#playoffs-apg-input");
const playoffsSpgInput = document.querySelector("#playoffs-spg-input");
const playoffsBpgInput = document.querySelector("#playoffs-bpg-input");
const playoffsFgPctInput = document.querySelector("#playoffs-fgpct-input");
const playoffsTpPctInput = document.querySelector("#playoffs-tppct-input");
const playoffsFtPctInput = document.querySelector("#playoffs-ftpct-input");

const playerImageInput = document.querySelector("#img-input");

// Getting inputs ready for next entries
function clearDialogInputs() {
  playerNameInput.value = "";

  regularGamesPlayedInput.value = ""; 
  regularPpgInput.value = "";
  regularRpgInput.value = "";
  regularApgInput.value = "";
  regularSpgInput.value = "";
  regularBpgInput.value = "";
  regularFgPctInput.value = "";
  regularTpPctInput.value = "";
  regularFtPctInput.value = "";

  playoffsGamesPlayedInput.value = ""; 
  playoffsPpgInput.value = "";
  playoffsRpgInput.value = "";
  playoffsApgInput.value = "";
  playoffsSpgInput.value = "";
  playoffsBpgInput.value = "";
  playoffsFgPctInput.value = "";
  playoffsTpPctInput.value = "";
  playoffsFtPctInput.value = "";

  playerImageInput.value = "";
}

dialogAddBtn.addEventListener("click", (e) => {
  // Prevent form from attempting to send data to a non-existent server
  e.preventDefault();

  // Add new player with stats and awards (entered by user) into object. Use input values here.
  const name = playerNameInput.value;
  const player = new Player();

  // Refactor idea
  // players[name] = player;
  // addPlayerStats(name); -> contains all code below until clearDialogInputs()
  
  const regularSeasonStats = player.stats.regularSeason;
  regularSeasonStats.gamesPlayed = Number(regularGamesPlayedInput.value);
  regularSeasonStats.pointsPerGame = Number(regularPpgInput.value);
  regularSeasonStats.reboundsPerGame = Number(regularRpgInput.value);
  regularSeasonStats.assistsPerGame = Number(regularApgInput.value);
  regularSeasonStats.stealsPerGame = Number(regularSpgInput.value);
  regularSeasonStats.blocksPerGame = Number(regularBpgInput.value);
  regularSeasonStats.fieldGoalPct = Number(regularFgPctInput.value);
  regularSeasonStats.threePointPct = Number(regularTpPctInput.value);
  regularSeasonStats.freeThrowPct = Number(regularFtPctInput.value);

  const playoffStats = player.stats.playoffs;
  playoffStats.gamesPlayed = Number(playoffsGamesPlayedInput.value);
  playoffStats.pointsPerGame = Number(playoffsPpgInput.value);
  playoffStats.reboundsPerGame = Number(playoffsRpgInput.value);
  playoffStats.assistsPerGame = Number(playoffsApgInput.value);
  playoffStats.stealsPerGame = Number(playoffsSpgInput.value);
  playoffStats.blocksPerGame = Number(playoffsBpgInput.value);
  playoffStats.fieldGoalPct = Number(playoffsFgPctInput.value);
  playoffStats.threePointPct = Number(playoffsTpPctInput.value);
  playoffStats.freeThrowPct = Number(playoffsFtPctInput.value);

  player.image = playerImageInput.value;

  // Remove whitespace from both ends of the string
  player.image = player.image.trim();
  
  // Add player to players object
  players[name] = player;
  console.log(players); // remove this

  // Clear inputs for the next entries
  clearDialogInputs();

  // Create a card for the new player and display on the page
  showCards();

  addPlayerDialog.close();
});

dialogCancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearDialogInputs();
  addPlayerDialog.close();
});

addPlayerBtn.addEventListener("click", () => {
  addPlayerDialog.showModal();
  // titles.push("Lebron James"); // adds new title to array
  // showCards();
});

// add image to Player object
// add image input (takes image url) to dialog 
class Player {
  constructor() {
    this.stats = {
      regularSeason: {
        gamesPlayed: 0,
        pointsPerGame: 0,
        reboundsPerGame: 0,
        assistsPerGame: 0,
        stealsPerGame: 0,
        blocksPerGame: 0,
        fieldGoalPct: 0,
        threePointPct: 0,
        freeThrowPct: 0,
      },
      playoffs: {
        gamesPlayed: 0,
        pointsPerGame: 0,
        reboundsPerGame: 0,
        assistsPerGame: 0,
        stealsPerGame: 0,
        blocksPerGame: 0,
        fieldGoalPct: 0,
        threePointPct: 0,
        freeThrowPct: 0,
      }
    };

    this.awards = {
      mvp: {
        yearsAwarded: [],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [],
      },
      allDefense: {
        yearsAwarded: [],
      },
    };

    this.image = "";
  }
}