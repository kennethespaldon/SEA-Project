// CLEARING DIALOG INPUTS (get inputs ready for next entries)
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