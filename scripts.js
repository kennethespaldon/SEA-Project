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

// const statsAwardsBtn = document.querySelector(".stats-awards-btn");
const addPlayerBtn = document.querySelector(".add-player-btn");

// Dialog elements
const addPlayerDialog = document.querySelector(".add-player-dialog");
const dialogBtns = document.querySelector(".dialog-btns");
const dialogAddBtn = document.querySelector(".dialog-add-btn");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");

// Input elements for adding a new player
const playerNameInput = document.querySelector("#player-name-input");
const playerTeamInput = document.querySelector("#player-team-input");
const playerImageInput = document.querySelector("#img-input");

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

const mvpInput = document.querySelector("#mvp-input");
const dpoyInput = document.querySelector("#dpoy-input");
const allNbaInput = document.querySelector("#all-nba-input");
const allDefenseInput = document.querySelector("#all-defense-input");

// Array that holds player objects that were deleted
const trash = [];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (const player in players) {
    let imageURL = players[player].image;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, player, imageURL); // Edit title and image

    const statsAwardsBtn = nextCard.querySelector(".stats-awards-btn");
    statsAwardsBtn.addEventListener("click", (e) => {
      toggleButtonState(e, nextCard);
    });

    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// SHOW / HIDE PLAYER STATS/AWARDS
function toggleButtonState(e, nextCard) {
  const playerInfo = nextCard.querySelector(".player-stats");
  playerInfo.classList.toggle("hidden");
}

function editCardContent(card, playerName, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector(".player-name");
  cardHeader.textContent = playerName;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = playerName;


  const updateRegStatsDialog = card.querySelector(".update-regular-stats");
  const updateRegStatsIcon = card.querySelector(".update-reg-stats-icon");

  // Updating regular season stats
  updateRegStatsIcon.addEventListener("click", () => {
    updateRegStatsDialog.showModal();
  });

  const updateRegStatsBtn = card.querySelector(".update-regular-stats-btn");
  updateRegStatsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateRegularSeasonStats(card, playerName);
    displayPlayerStats(card, playerName);
    clearRegularSeasonUpdateInputs(card);
    updateRegStatsDialog.close();
  });

  const cancelUpdateRegStatsBtn = card.querySelector(".cancel-update-regular-stats-btn");
  cancelUpdateRegStatsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearRegularSeasonUpdateInputs(card);
    updateRegStatsDialog.close();
  });

  // Update team
  const updateTeamDialog = card.querySelector(".update-team");
  const updateTeamIcon = card.querySelector(".update-team-icon");
  updateTeamIcon.addEventListener("click", () => {
    updateTeamDialog.showModal();
  });

  const updateTeamBtn = card.querySelector(".update-team-btn");
  const cancelUpdateTeamBtn = card.querySelector(".cancel-update-team-btn");
  updateTeamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateTeam(card, playerName);
    displayTeam(card,playerName);
    clearTeamUpdateInput(card);
    updateTeamDialog.close();
  });

  cancelUpdateTeamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearTeamUpdateInput(card);
    updateTeamDialog.close();
  });

  // Updating playoff stats
  const updatePlayoffStatsDialog = card.querySelector(".update-playoff-stats");
  const updatePlayoffStatsIcon = card.querySelector(".update-playoff-stats-icon");
  updatePlayoffStatsIcon.addEventListener("click", () => {
    updatePlayoffStatsDialog.showModal();
  });

  const updatePlayoffStatsBtn = card.querySelector(".update-playoff-stats-btn");
  updatePlayoffStatsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updatePlayoffStats(card, playerName); 
    displayPlayerStats(card, playerName);
    clearPlayoffUpdateInputs(card);
    updatePlayoffStatsDialog.close();
  });

  const cancelUpdatePlayoffStatsBtn = card.querySelector(".cancel-update-playoff-stats-btn");
  cancelUpdatePlayoffStatsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearPlayoffUpdateInputs(card);
    updatePlayoffStatsDialog.close();
  });

  // Updating awards
  const updateAwardsDialog = card.querySelector(".update-player-awards");
  const updateAwardsBtn = card.querySelector(".update-awards-icon");
  updateAwardsBtn.addEventListener("click", () => {
    updateAwardsDialog.showModal();
  });

  const updatePlayerAwardsBtn = card.querySelector(".update-player-awards-btn");
  const cancelUpdatePlayerAwardsBtn = card.querySelector(".cancel-update-player-awards-btn");
  updatePlayerAwardsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // push current year to "yearsAwarded" array for corresponding award
    updatePlayerAwards(card, playerName);
    // display newly updated award arrays
    displayPlayerAwards(card, playerName);
    // clear dialog inputs for next entries
    updateAwardsDialog.close();
  });

  // Deleting a player 
  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Pushes [player name, {player object}] array into "trash" array
    trash.push([playerName, players[playerName]]);
    // Removes playerName from players object
    delete players[playerName];
    // Removes the card from html
    card.remove();
    // Display updated set of cards
    showCards();
  });

  cancelUpdatePlayerAwardsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // clear dialog inputs
    updateAwardsDialog.close();
  });

  displayPlayerStats(card, playerName);
  displayPlayerAwards(card, playerName);

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", playerName, "- html: ", card);
}

// DELETING

// UPDATING
function updateTeam(card, playerName) {
  const player = players[playerName];
  const newTeam = card.querySelector("#update-team-input").value;
  player.team = newTeam;
}

function updateRegularSeasonStats(card, playerName) {
  const mostRecentRegPts = card.querySelector("#most-recent-gm-pts");
  const mostRecentRegReb = card.querySelector("#most-recent-gm-reb");
  const mostRecentRegAst = card.querySelector("#most-recent-gm-ast");
  const mostRecentRegStl = card.querySelector("#most-recent-gm-stl");
  const mostRecentRegBlk = card.querySelector("#most-recent-gm-blk");
  const newRegFgPct = card.querySelector("#update-regular-fgpct");
  const newRegTpPct = card.querySelector("#update-regular-tppct");
  const newRegFtPct = card.querySelector("#update-regular-ftpct");

  const regSzn = players[playerName].stats.regularSeason;

  // Update player object with new stats
  regSzn.gamesPlayed += 1;
  regSzn.pointsPerGame = ((regSzn.pointsPerGame * (regSzn.gamesPlayed - 1)) + (Number(mostRecentRegPts.value))) / (regSzn.gamesPlayed);
  regSzn.pointsPerGame = Number(regSzn.pointsPerGame.toFixed(1));

  regSzn.reboundsPerGame = ((regSzn.reboundsPerGame * (regSzn.gamesPlayed - 1)) + (Number(mostRecentRegReb.value))) / (regSzn.gamesPlayed);
  regSzn.reboundsPerGame = Number(regSzn.reboundsPerGame.toFixed(1));

  regSzn.assistsPerGame = ((regSzn.assistsPerGame * (regSzn.gamesPlayed - 1)) + (Number(mostRecentRegAst.value))) / (regSzn.gamesPlayed);
  regSzn.assistsPerGame = Number(regSzn.assistsPerGame.toFixed(1));

  regSzn.stealsPerGame = ((regSzn.stealsPerGame * (regSzn.gamesPlayed - 1)) + (Number(mostRecentRegStl.value))) / (regSzn.gamesPlayed);
  regSzn.stealsPerGame = Number(regSzn.stealsPerGame.toFixed(1));

  regSzn.blocksPerGame = ((regSzn.blocksPerGame * (regSzn.gamesPlayed - 1)) + (Number(mostRecentRegBlk.value))) / (regSzn.gamesPlayed);
  regSzn.blocksPerGame = Number(regSzn.blocksPerGame.toFixed(1));

  regSzn.fieldGoalPct = Number(Number(newRegFgPct.value).toFixed(1));
  regSzn.threePointPct = Number(Number(newRegTpPct.value).toFixed(1));
  regSzn.freeThrowPct = Number(Number(newRegFtPct.value).toFixed(1));
}

function updatePlayoffStats(card, playerName) {
  const mostRecentPlayoffPts = card.querySelector("#most-recent-playoff-pts");
  const mostRecentPlayoffReb = card.querySelector("#most-recent-playoff-reb");
  const mostRecentPlayoffAst = card.querySelector("#most-recent-playoff-ast");
  const mostRecentPlayoffStl = card.querySelector("#most-recent-playoff-stl");
  const mostRecentPlayoffBlk = card.querySelector("#most-recent-playoff-blk");
  const newPlayoffFgPct = card.querySelector("#update-playoff-fgpct");
  const newPlayoffTpPct = card.querySelector("#update-playoff-tppct");
  const newPlayoffFtPct = card.querySelector("#update-playoff-ftpct");

  const playoffs = players[playerName].stats.playoffs;

  // Update player object with new stats
  playoffs.gamesPlayed += 1;
  playoffs.pointsPerGame = ((playoffs.pointsPerGame * (playoffs.gamesPlayed - 1)) + (Number(mostRecentPlayoffPts.value))) / (playoffs.gamesPlayed);
  playoffs.pointsPerGame = Number(playoffs.pointsPerGame.toFixed(1));

  playoffs.reboundsPerGame = ((playoffs.reboundsPerGame * (playoffs.gamesPlayed - 1)) + (Number(mostRecentPlayoffReb.value))) / (playoffs.gamesPlayed);
  playoffs.reboundsPerGame = Number(playoffs.reboundsPerGame.toFixed(1));

  playoffs.assistsPerGame = ((playoffs.assistsPerGame * (playoffs.gamesPlayed - 1)) + (Number(mostRecentPlayoffAst.value))) / (playoffs.gamesPlayed);
  playoffs.assistsPerGame = Number(playoffs.assistsPerGame.toFixed(1));

  playoffs.stealsPerGame = ((playoffs.stealsPerGame * (playoffs.gamesPlayed - 1)) + (Number(mostRecentPlayoffStl.value))) / (playoffs.gamesPlayed);
  playoffs.stealsPerGame = Number(playoffs.stealsPerGame.toFixed(1));

  playoffs.blocksPerGame = ((playoffs.blocksPerGame * (playoffs.gamesPlayed - 1)) + (Number(mostRecentPlayoffBlk.value))) / (playoffs.gamesPlayed);
  playoffs.blocksPerGame = Number(playoffs.blocksPerGame.toFixed(1));

  playoffs.fieldGoalPct = Number(Number(newPlayoffFgPct.value).toFixed(1));
  playoffs.threePointPct = Number(Number(newPlayoffTpPct.value).toFixed(1));
  playoffs.freeThrowPct = Number(Number(newPlayoffFtPct.value).toFixed(1));
}

function updatePlayerAwards(card, playerName) {
  const player = players[playerName];
  const playerAwards = player.awards;
  const mvpInput = card.querySelector("#update-mvp");
  const dpoyInput = card.querySelector("#update-dpoy");
  const allNbaInput = card.querySelector("#update-all-nba");
  const allDefInput = card.querySelector("#update-all-def");

  // Push year input to "yearsAwarded" arrays of corresponding award in "players" object
  playerAwards.mvp.yearsAwarded.push(Number(mvpInput.value));
  playerAwards.dpoy.yearsAwarded.push(Number(dpoyInput.value));
  playerAwards.allNBA.yearsAwarded.push(Number(allNbaInput.value));
  playerAwards.allDefense.yearsAwarded.push(Number(allDefInput.value));
}

// Clearing regular season update inputs after update/cancellation
function clearRegularSeasonUpdateInputs(card) {
  card.querySelector("#most-recent-gm-pts").value = "";
  card.querySelector("#most-recent-gm-reb").value = "";
  card.querySelector("#most-recent-gm-ast").value = "";
  card.querySelector("#most-recent-gm-stl").value = "";
  card.querySelector("#most-recent-gm-blk").value = "";
  card.querySelector("#update-regular-fgpct").value = "";
  card.querySelector("#update-regular-tppct").value = "";
  card.querySelector("#update-regular-ftpct").value = "";
}

function clearPlayoffUpdateInputs(card) {
  card.querySelector("#most-recent-playoff-pts").value = "";
  card.querySelector("#most-recent-playoff-reb").value = "";
  card.querySelector("#most-recent-playoff-ast").value = "";
  card.querySelector("#most-recent-playoff-stl").value = "";
  card.querySelector("#most-recent-playoff-blk").value = "";
  card.querySelector("#update-playoff-fgpct").value = "";
  card.querySelector("#update-playoff-tppct").value = "";
  card.querySelector("#update-playoff-ftpct").value = "";
}

function clearTeamUpdateInput(card) {
  const teamInput = card.querySelector("#update-team-input");
  teamInput.value = "";
}

// DISPLAYING STATS/AWARDS
function displayPlayerStats(card, name) {
  const player = players[name];
  const regSznStats = player.stats.regularSeason;
  const regSznGp = card.querySelector(".regular-season-gp");
  const regSznPpg = card.querySelector(".regular-season-ppg");
  const regSznRpg = card.querySelector(".regular-season-rpg");
  const regSznApg = card.querySelector(".regular-season-apg");
  const regSznSpg = card.querySelector(".regular-season-spg");
  const regSznBpg = card.querySelector(".regular-season-bpg");
  const regSznFgPct = card.querySelector(".regular-season-fgpct");
  const regSznTpPct = card.querySelector(".regular-season-tppct");
  const regSznFtPct = card.querySelector(".regular-season-ftpct");

  regSznGp.textContent = regSznStats.gamesPlayed;
  regSznPpg.textContent = regSznStats.pointsPerGame;
  regSznRpg.textContent = regSznStats.reboundsPerGame;
  regSznApg.textContent = regSznStats.assistsPerGame;
  regSznSpg.textContent = regSznStats.stealsPerGame;
  regSznBpg.textContent = regSznStats.blocksPerGame;
  regSznFgPct.textContent = regSznStats.fieldGoalPct;
  regSznTpPct.textContent = regSznStats.threePointPct;
  regSznFtPct.textContent = regSznStats.freeThrowPct;

  const playoffStats = player.stats.playoffs;
  const playoffsGp = card.querySelector(".playoffs-gp");
  const playoffsPpg = card.querySelector(".playoffs-ppg");
  const playoffsRpg = card.querySelector(".playoffs-rpg");
  const playoffsApg = card.querySelector(".playoffs-apg");
  const playoffsSpg = card.querySelector(".playoffs-spg");
  const playoffsBpg = card.querySelector(".playoffs-bpg");
  const playoffsFgPct = card.querySelector(".playoffs-fgpct");
  const playoffsTpPct = card.querySelector(".playoffs-tppct");
  const playoffsFtPct = card.querySelector(".playoffs-ftpct");

  playoffsGp.textContent = playoffStats.gamesPlayed;
  playoffsPpg.textContent = playoffStats.pointsPerGame;
  playoffsRpg.textContent = playoffStats.reboundsPerGame;
  playoffsApg.textContent = playoffStats.assistsPerGame;
  playoffsSpg.textContent = playoffStats.stealsPerGame;
  playoffsBpg.textContent = playoffStats.blocksPerGame;
  playoffsFgPct.textContent = playoffStats.fieldGoalPct;
  playoffsTpPct.textContent = playoffStats.threePointPct;
  playoffsFtPct.textContent = playoffStats.freeThrowPct;
}

function displayPlayerAwards(card, name) {
  const playerAwards = players[name].awards;

  const mvpAwards = card.querySelector(".mvp-awards");
  const dpoyAwards = card.querySelector(".dpoy-awards");
  const allNbaAwards = card.querySelector(".all-nba-awards");
  const allDefAwards = card.querySelector(".all-defensive-awards");

  const mvpCount = card.querySelector(".mvp-count");
  const mvpYears = card.querySelector(".mvp-years");
  const dpoyCount = card.querySelector(".dpoy-count");
  const dpoyYears = card.querySelector(".dpoy-years");
  const allNbaCount = card.querySelector(".all-nba-count");
  const allNbaYears = card.querySelector(".all-nba-years");
  const allDefCount = card.querySelector(".all-defensive-count");
  const allDefYears = card.querySelector(".all-defensive-years");

  const numberOfMVPs = playerAwards.mvp.yearsAwarded.length;
  if (numberOfMVPs === 0) {
    mvpAwards.classList.add("hidden");
  } else {
    mvpCount.textContent = `${numberOfMVPs}x Most Valuable Payer`;
    mvpYears.textContent = `(${playerAwards.mvp.yearsAwarded.join(", ")})`;
  }

  const numberOfDPOYs = playerAwards.dpoy.yearsAwarded.length;
  if (numberOfDPOYs === 0) {
    dpoyAwards.classList.add("hidden");
  } else {
    dpoyCount.textContent = `${numberOfDPOYs}x Defensive Player of the Year`;
    dpoyYears.textContent = `(${playerAwards.dpoy.yearsAwarded.join(", ")})`;
  }

  const numberOfAllNBASelections = playerAwards.allNBA.yearsAwarded.length;
  if (numberOfAllNBASelections === 0) {
    allNbaAwards.classList.add("hidden");
  } else {
    allNbaCount.textContent = `${numberOfAllNBASelections}x All-NBA`;
    allNbaYears.textContent = `(${playerAwards.allNBA.yearsAwarded.join(", ")})`;
  }

  const numberOfAllDefSelections = playerAwards.allDefense.yearsAwarded.length;
  if (numberOfAllDefSelections === 0) {
    allDefAwards.classList.add("hidden");
  } else {
    allDefCount.textContent = `${numberOfAllDefSelections}x All-Defensive`;
    allDefYears.textContent = `(${playerAwards.allDefense.yearsAwarded.join(", ")})`;
  }
}

function displayTeam(card, name) {
  const team = card.querySelector(".player-team");
  team.textContent = players[name].team;
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// CLEARING DIALOG INPUTS
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

  mvpInput.value = "";
  dpoyInput.value = "";
  allNbaInput.value = "";
  allDefenseInput.value = "";

  playerTeamInput.value = "";
  playerImageInput.value = "";
}

// ADDING A PLAYER 
function addPlayerStats(name) {
  const player = players[name];
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
}

function addPlayerAwards(name) {
  const player = players[name];
  const playerAwards = player.awards;
  if(mvpInput.value !== "") {
    playerAwards.mvp.yearsAwarded = mvpInput.value.split(", ");
  }

  if(dpoyInput.value !== "") {
    playerAwards.dpoy.yearsAwarded = dpoyInput.value.split(", ");
  }

  if(allNbaInput.value !== "") {
    playerAwards.allNBA.yearsAwarded = allNbaInput.value.split(", ");
  }

  if(allDefenseInput.value !== "") {
    playerAwards.allDefense.yearsAwarded = allDefenseInput.value.split(", ");
  }
}

function addPlayerTeam(name) {
  players[name].team = playerTeamInput.value;
}

function addPlayerImage(name) {
  const player = players[name];
  player.image = playerImageInput.value.trim();
  // Remove whitespace from both ends of the string
  player.image = player.image.trim();
}

function addPlayer(e) {
  // Prevent form from attempting to send data to a non-existent server
  e.preventDefault();

  // Add new player with stats and awards (entered by user) into object. Use input values here.
  const name = playerNameInput.value;
  players[name] = createPlayer();

  addPlayerStats(name);
  addPlayerTeam(name);
  addPlayerImage(name);
  addPlayerAwards(name);

  console.log(players); // remove this

  // Clear inputs for the next entries
  clearDialogInputs();

  // Create a card for the new player and display on the page
  showCards();

  addPlayerDialog.close();
}

dialogAddBtn.addEventListener("click", addPlayer);

function cancelDialog(e) {
  e.preventDefault();
  clearDialogInputs();
  addPlayerDialog.close();
}

dialogCancelBtn.addEventListener("click", cancelDialog);

addPlayerBtn.addEventListener("click", () => {
  addPlayerDialog.showModal();
});

// PLAYER CLASS
function createPlayer() {
  return new Player();
}

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

    this.team = "";
    this.image = "";
  }
}