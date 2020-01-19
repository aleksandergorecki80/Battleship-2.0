function Action() {
  this.shipsList = [];
  this.takenShots = [];
  this.howManySunkShips = 0;

  this.getTakenShots = function() {
    return this.takenShots;
  };

  this.setTheShot = function(listOfShots, field) {
    this.takenShots = [...listOfShots, field];
  };

  this.getShipsList = function(){
    return this.shipsList;
  };

  this.addShipToTheShipsList = function(shipToAdd) {
    this.shipsList.push(shipToAdd);
  };

  this.getNumberOfSunkShips = function(){
    return this.howManySunkShips;
  };

  this.addShipAsSunk = function (){
    this.howManySunkShips++;
  }

}

const action = new Action();



const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

for (let row = 0; row < 10; row++) {
  for (let column = 0; column < 10; column++) {
    document
      .getElementById(`${row}-${column}`)
      .addEventListener("click", (event) => {
        shot(row, column);
      });
  }
}



function shot(row, column) {
  const clickedField = { row, column };

  const listOfShots = action.getTakenShots();

  const hasBeenTheFieldHitAlready = searchInArrayOfFields(listOfShots, clickedField);
  console.log("hasBeenTheFieldHitAlready", hasBeenTheFieldHitAlready);

  if (hasBeenTheFieldHitAlready) {
    const message = `You have already hit there`;
    view.displayBubble(message, event.clientX, event.clientY);
    console.log(event.clientX);
    console.log(event.clientY);
  } else {
    action.setTheShot(listOfShots, clickedField);
    // view.blockTheField(clickedField);                      /// średnio mi sie podoba
    const newListOfShots = action.getTakenShots();
    const numberOfShots = newListOfShots.length;
    console.log("newListOfShots", newListOfShots);

    const listOfTakenFields = view.getBoardFieldsTaken();
    const clickedFieldRespond = searchInArrayOfFields(listOfTakenFields,clickedField);

    if (clickedFieldRespond === undefined) {
      const shotResult = 'Miss'
      const message = buildGameStatusLog(numberOfShots, clickedField.row, clickedField.column, shotResult);
      view.displayMessage(message);
      view.displayMiss(clickedField);
    } else {
      const shipsList = action.getShipsList();
      const hitShip = shipsList.find(element => {
        return element.id === clickedFieldRespond.id;
      });
      if (hitShip === undefined) {
        const shotResult = 'Miss'
        const message = buildGameStatusLog(numberOfShots, clickedField.row, clickedField.column, shotResult);
        view.displayMessage(message);
        view.displayMiss(clickedField);
      } else {
        //    console.log(foundShip.ship);

        const shipFields = hitShip.getTheShip();

        const spotOnShots = hitShip.addFieldToShots(clickedFieldRespond);

        hitShip.updateSpotOnShots(spotOnShots);

        const updatedSpotOnShots = hitShip.getSpotOnShots();

        

        if (updatedSpotOnShots.length === shipFields.length) {
          const shotResult = 'Ship sinks'
          const message = buildGameStatusLog(numberOfShots, clickedField.row, clickedField.column, shotResult);
          view.displayMessage(message);
          action.addShipAsSunk();
          const locations = hitShip.getTheShip();
          view.displaySunk(locations);
        } else {
          const shotResult = 'Ship burns'
          const message = buildGameStatusLog(numberOfShots, clickedField.row, clickedField.column, shotResult);
          view.displayMessage(message);
          view.displayHit(clickedField);
        }
      }
    }
  }
  const howManySunkShips = action.getNumberOfSunkShips();
  const shipsList = action.getShipsList();
  console.log(howManySunkShips);
  console.log(shipsList.length);
  if(howManySunkShips === shipsList.length){
    const gameOverMessage = {content: 'GAME OVER'}
    Modal.reloadTheGame = true;
    Modal.openModal(gameOverMessage);
    console.log('GAME OVER');
  }
}
