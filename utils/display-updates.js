// DISPLAYING UPDATED STATS/AWARDS
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
    mvpAwards.classList.remove("hidden");
    mvpCount.textContent = `${numberOfMVPs}x Most Valuable Payer`;
    mvpYears.textContent = `(${playerAwards.mvp.yearsAwarded.join(", ")})`;
  }

  const numberOfDPOYs = playerAwards.dpoy.yearsAwarded.length;
  if (numberOfDPOYs === 0) {
    dpoyAwards.classList.add("hidden");
  } else {
    dpoyAwards.classList.remove("hidden");
    dpoyCount.textContent = `${numberOfDPOYs}x Defensive Player of the Year`;
    dpoyYears.textContent = `(${playerAwards.dpoy.yearsAwarded.join(", ")})`;
  }

  const numberOfAllNBASelections = playerAwards.allNBA.yearsAwarded.length;
  if (numberOfAllNBASelections === 0) {
    allNbaAwards.classList.add("hidden");
  } else {
    allNbaAwards.classList.remove("hidden");
    allNbaCount.textContent = `${numberOfAllNBASelections}x All-NBA`;
    allNbaYears.textContent = `(${playerAwards.allNBA.yearsAwarded.join(", ")})`;
  }

  const numberOfAllDefSelections = playerAwards.allDefense.yearsAwarded.length;
  if (numberOfAllDefSelections === 0) {
    allDefAwards.classList.add("hidden");
  } else {
    allDefAwards.classList.remove("hidden");
    allDefCount.textContent = `${numberOfAllDefSelections}x All-Defensive`;
    allDefYears.textContent = `(${playerAwards.allDefense.yearsAwarded.join(", ")})`;
  }
}

function displayTeam(card, name) {
  const team = card.querySelector(".player-team");
  team.textContent = players[name].team;
}