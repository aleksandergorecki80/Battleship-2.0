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

function buildGameStatusLog(numberOfShots, row, column, shotResult) {
  let fontColor = '';
  switch(shotResult){
    case 'Miss':
        fontColor = '#404040';
      break;
      case 'Ship sinks':
        fontColor = 'green';
      break;
      case 'Ship burns':
        fontColor = 'blue';
      break;
    
  };
  const logMessage = `${numberOfShots}. Field ${row}-${column} : ${shotResult}`
  const li = document.createElement("li");
  //create text node and append
  li.appendChild(document.createTextNode(logMessage));
  li.style.color = fontColor;
  return li;
}








function printhowToPlay(){
  const howToPlayInfo = {content: `Wyjście Wielkiej Brytanii z Unii 
  Europejskiej jest dla Wspólnoty sygnałem alarmowym – powiedziała kanclerz 
  Niemiec Angela Merkel w opublikowanym w czwartek wywiadzie dla brytyjskiego 
  dziennika „Financial Times”. Przy okazji powiedziała między wierszami, że Unia 
  Europejska to niemieckie narzędzie geopolityczne.`}
  Modal.openModal(howToPlayInfo);
}

//      cos trzeba z tym zrobić
function loadWelcomePage(){
  const startGameButton = document.createElement('button');
  startGameButton.id = 'startGame';
  startGameButton.appendChild(document.createTextNode('START GAME'));
  document.body.appendChild(startGameButton);
}