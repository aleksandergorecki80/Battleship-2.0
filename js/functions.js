function searchInArrayOfFields(arrayOfFields, serchedField) {
  return arrayOfFields.find(field => {
    return (
      field.row === serchedField.row && field.column === serchedField.column
    );
  });
}

function addShipSuroundingToTheBoard(currentShipState) {
  //
  const shipSurrounding = view.addSurroundings(currentShipState); // add sourounding of the ship
  view.pushAllSurroundingsToOneArray(shipSurrounding); // pushes all suroundings into one array
  const suroundingsArr = view.getSurroundings();
  view.pushOneOccurrenceOfFieldToSurroundings(suroundingsArr);
  //
}

function buildGameStatusLog(logMessage) {
  const li = document.createElement("li");
  //create text node and append
  li.appendChild(document.createTextNode(logMessage));
  return li;
}
