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
  const howToPlayInfo = {
    content: `
      <p>The player plays against computer. The game is over when all computer's ship are sunk.</p>
      <p><b>Computer's fleet:</b></p>
        <table>
          <tr>
            <th>Size</th>
            <th>Class of ship</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>4</td>
            <td>Battleship</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cruiser</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Submarine</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Destroyer</td>
            <td>4</td>
          </tr>
        </table>
      
      <p>The sheeps can be positioned along the grid's edge.</p>
  `};
  Modal.openModal(howToPlayInfo);
}

//      cos trzeba z tym zrobić
function loadWelcomePage(){
  const startGameButton = document.createElement('button');
  startGameButton.id = 'startGame';
  startGameButton.appendChild(document.createTextNode('START GAME'));
  document.body.appendChild(startGameButton);
}