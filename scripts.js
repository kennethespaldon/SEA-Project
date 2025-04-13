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

const addPlayerBtn = document.querySelector(".add-player-btn");
const addPlayerDialog = document.querySelector(".add-player-dialog");
const dialogAddBtn = document.querySelector(".dialog-add-btn");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");

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

// Array that holds player objects that are deleted
const trash = [];

// PLAYER CLASS
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

function createPlayer() {
  return new Player();
}

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

document.addEventListener("DOMContentLoaded", showCards);

// Show/hide player information
function toggleButtonState(e, nextCard) {
  const playerInfo = nextCard.querySelector(".player-stats");
  playerInfo.classList.toggle("hidden");
}

// START of card update functions //
function enableRegularSeasonUpdate(card, playerName) {
  const updateRegStatsDialog = card.querySelector(".update-regular-stats");
  const updateRegStatsIcon = card.querySelector(".update-reg-stats-icon");
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
}

function enableTeamUpdate(card, playerName) {
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
}

function enablePlayoffUpdate(card, playerName) {
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
}

function enableAwardUpdate(card, playerName) {
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
    displayPlayerAwards(card, playerName);
    // clear dialog inputs for next entries
    updateAwardsDialog.close();
  });

  cancelUpdatePlayerAwardsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // clear dialog inputs
    updateAwardsDialog.close();
  });
}

function enableCardDeletion(card, playerName) {
  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    // Pushes [player name, {player object}] array into "trash" array
    trash.push([playerName, players[playerName]]);
    
    // Removes playerName from players object
    delete players[playerName];

    // Removes the card from html
    card.remove();

    // Display updated set of cards
    showCards();
  });
}

function enableCardUpdates(card, playerName) {
  // Updating regular season stats
  enableRegularSeasonUpdate(card, playerName);

  // Update team
  enableTeamUpdate(card, playerName);

  // Updating playoff stats
  enablePlayoffUpdate(card, playerName);

  // Updating awards
  enableAwardUpdate(card, playerName);
}

function editCardContent(card, playerName, newImageURL) {
  card.classList.remove("hidden");

  const cardHeader = card.querySelector(".player-name");
  cardHeader.textContent = playerName;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = playerName;

  const uniquePlayerId = convertNameToIdForm(playerName);
  card.id = uniquePlayerId;

  enableCardUpdates(card, playerName);
  enableCardDeletion(card, playerName);

  displayPlayerStats(card, playerName);
  displayPlayerAwards(card, playerName);

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", playerName, "- html: ", card);
}

// START of player object update functions //
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

  const recentGmPts = Number(mostRecentRegPts.value);
  const recentGmReb = Number(mostRecentRegReb.value);
  const recentGmAst = Number(mostRecentRegAst.value);
  const recentGmStl = Number(mostRecentRegStl.value);
  const recentGmBlk = Number(mostRecentRegBlk.value);

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
  if (mvpInput.value !== "") {
    playerAwards.mvp.yearsAwarded.push(Number(mvpInput.value));
  }

  if (dpoyInput.value !== "") {
    playerAwards.dpoy.yearsAwarded.push(Number(dpoyInput.value));
  }

  if (allNbaInput.value !== "") {
    playerAwards.allNBA.yearsAwarded.push(Number(allNbaInput.value));
  }

  if (allDefInput.value !== "") {
    playerAwards.allDefense.yearsAwarded.push(Number(allDefInput.value));
  }
}
// This calls the addCards() function when the page is first loaded

// START of addPlayer() functions //
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
  e.preventDefault();

  // Add new player with stats and awards (entered by user) into object.
  const name = playerNameInput.value;
  players[name] = createPlayer();

  addPlayerStats(name);
  addPlayerTeam(name);
  addPlayerImage(name);
  addPlayerAwards(name);

  clearDialogInputs();
  showCards();

  addPlayerDialog.close();
}

// Undo most recent deletion //
const undoDeleteBtn = document.querySelector(".undo-delete-btn");
undoDeleteBtn.addEventListener("click", () => {
  if(trash.length === 0) {
    return;
  }

  // Pop most recently deleted player from trash array and puts it back in players object
  // trash.pop() returns an array that looks like [playerName, playerObj]
  const [playerName, playerObj] = trash.pop();

  // Add most recently deleted player back into players object
  players[playerName] = playerObj;
  showCards();
});

// START of sorting functions //
function clearPlayersObject() {
  for (const name in players) {
    delete players[name];
  }
}

function sortPlayersObject(sortedArr) {
  // Adds sorted player objects (sorted using an array) into players object 
  sortedArr.forEach((playerArr) => {
    const playerName = playerArr[0];
    const playerObj = playerArr[1];
    players[playerName] = playerObj;
  });
}

function sortByStatPerGame(statType, season, direction) {
  // statType can be pointsPerGame, reboundsPerGame, assistsPerGame, stealsPerGame, or blocksPerGame
  statType = `${statType.toLowerCase()}PerGame`;

  // Create an array of key/value pairs (also arrays) from players object, ["Player Name", {Player Object}]
  const unsorted = Object.entries(players);

  // Sort each player object in ascending statType
  const sorted = unsorted.sort((player1, player2) => {
    const player1Stats = player1[1].stats[season][statType];
    const player2Stats = player2[1].stats[season][statType];

    if (direction === "ascending") {
      return player1Stats - player2Stats;
    } else if (direction === "descending") {
      return player2Stats - player1Stats;
    }
  });

  clearPlayersObject();

  // Re-add and sort players into players objects in ascending order
  sortPlayersObject(sorted);
}

const sortPlayersDropdown = document.querySelector("#sort-players");
sortPlayersDropdown.addEventListener("change", (e) => {
  if(e.currentTarget.value === "unsorted")
  {
    return;
  }
  
  if(e.currentTarget.value === "ascending-reg-szn-ppg") {
    sortByStatPerGame("points", "regularSeason", "ascending");
  } else if (e.currentTarget.value === "ascending-reg-szn-rpg") {
    sortByStatPerGame("rebounds", "regularSeason", "ascending");
  } else if (e.currentTarget.value === "ascending-reg-szn-apg") {
    sortByStatPerGame("assists", "regularSeason", "ascending");
  } else if (e.currentTarget.value === "ascending-reg-szn-spg") {
    sortByStatPerGame("steals", "regularSeason", "ascending");
  } else if (e.currentTarget.value === "ascending-reg-szn-bpg") {
    sortByStatPerGame("blocks", "regularSeason", "ascending");
  }

  if(e.currentTarget.value === "descending-reg-szn-ppg") {
    sortByStatPerGame("points", "regularSeason", "descending");
  } else if (e.currentTarget.value === "descending-reg-szn-rpg") {
    sortByStatPerGame("rebounds", "regularSeason", "descending");
  } else if (e.currentTarget.value === "descending-reg-szn-apg") {
    sortByStatPerGame("assists", "regularSeason", "descending");
  } else if (e.currentTarget.value === "descending-reg-szn-spg") {
    sortByStatPerGame("steals", "regularSeason", "descending");
  } else if (e.currentTarget.value === "descending-reg-szn-bpg") {
    sortByStatPerGame("blocks", "regularSeason", "descending");
  }

  if(e.currentTarget.value === "ascending-playoffs-ppg") {
    sortByStatPerGame("points", "playoffs", "ascending");
  } else if (e.currentTarget.value === "ascending-playoffs-rpg") {
    sortByStatPerGame("rebounds", "playoffs", "ascending");
  } else if (e.currentTarget.value === "ascending-playoffs-apg") {
    sortByStatPerGame("assists", "playoffs", "ascending");
  } else if (e.currentTarget.value === "ascending-playoffs-spg") {
    sortByStatPerGame("steals", "playoffs", "ascending");
  } else if (e.currentTarget.value === "ascending-playoffs-bpg") {
    sortByStatPerGame("blocks", "playoffs", "ascending");
  }

  if(e.currentTarget.value === "descending-playoffs-ppg") {
    sortByStatPerGame("points", "playoffs", "descending");
  } else if (e.currentTarget.value === "descending-playoffs-rpg") {
    sortByStatPerGame("rebounds", "playoffs", "descending");
  } else if (e.currentTarget.value === "descending-playoffs-apg") {
    sortByStatPerGame("assists", "playoffs", "descending");
  } else if (e.currentTarget.value === "descending-playoffs-spg") {
    sortByStatPerGame("steals", "playoffs", "descending");
  } else if (e.currentTarget.value === "descending-playoffs-bpg") {
    sortByStatPerGame("blocks", "playoffs", "descending");
  }

  showCards();
});

// START of searching functions //
function convertNameToIdForm(nameSearched) {
  return `${nameSearched.split(" ").map(name => name.toLowerCase()).join("-")}-id`;
}

function searchForPossibleMatches(e) {
  const searchVal = e.currentTarget.value.trim();
  const possiblePlayerCardId = convertNameToIdForm(searchVal);
  const cardContainer = document.getElementById("card-container");
  const cards = cardContainer.children;

  let numberOfMatches = 0;
  for (const card of cards) {
    if (card.id === possiblePlayerCardId) {
      ++numberOfMatches;
    } else if (card.id !== possiblePlayerCardId) {
      card.classList.add("hidden");
    }
  }

  if(numberOfMatches === 0) return false;

  return true;
}

function searchSpecificPlayer(e) {
  const searchVal = e.currentTarget.value.trim();
  const emptySearchBar = (searchVal === "");

  // Hide cards that don't match the searched player
  const noPlayerFound = !searchForPossibleMatches(e);
 
  // If no such player is found or if input is empty, show all cards
  if(noPlayerFound || emptySearchBar) {
    showCards();
  }
}
const searchPlayerInput = document.querySelector("#search-player");
searchPlayerInput.addEventListener("change", searchSpecificPlayer);