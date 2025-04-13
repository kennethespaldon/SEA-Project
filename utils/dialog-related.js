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