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
      .addEventListener("click", () => {
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
    const message = buildGameStatusLog(`You already hit there`);
    view.displayBubble(message);
  } else {
    action.setTheShot(listOfShots, clickedField);
    view.blockTheField(clickedField);
    const newListOfShots = action.getTakenShots();
    const numberOfShots = newListOfShots.length;
    console.log("newListOfShots", newListOfShots);

    const listOfTakenFields = view.getBoardFieldsTaken();
    const clickedFieldRespond = searchInArrayOfFields(listOfTakenFields,clickedField);

    if (clickedFieldRespond === undefined) {
      const message = buildGameStatusLog(`Shot nr. ${numberOfShots}: ${clickedField.row} - ${clickedField.column} - Pudło`);
      view.displayMessage(message);
      view.displayMiss(clickedField);
    } else {
      const shipsList = action.getShipsList();
      const hitShip = shipsList.find(element => {
        return element.id === clickedFieldRespond.id;
      });
      if (hitShip === undefined) {
        const message = buildGameStatusLog(`Shot nr. ${numberOfShots}: ${clickedField.row} - ${clickedField.column} - Pudło`);
        view.displayMessage(message);
        view.displayMiss(clickedField);
      } else {
        //    console.log(foundShip.ship);

        const shipFields = hitShip.getTheShip();

        const spotOnShots = hitShip.addFieldToShots(clickedFieldRespond);

        hitShip.updateSpotOnShots(spotOnShots);

        const updatedSpotOnShots = hitShip.getSpotOnShots();

        

        if (updatedSpotOnShots.length === shipFields.length) {
          const message = buildGameStatusLog(`Shot nr. ${numberOfShots}: ${clickedField.row} - ${clickedField.column} - Ship sinks`);
          view.displayMessage(message);
          action.addShipAsSunk();
          const locations = hitShip.getTheShip();
          view.displaySunk(locations);
        } else {
          const message = buildGameStatusLog(`Shot nr. ${numberOfShots}: ${clickedField.row} - ${clickedField.column} - Ship burns`);
          view.displayMessage(message);
          view.displayHit(clickedField);
        }
      }
    }
  }
  const howManySunkShips = action.getNumberOfSunkShips();
  const shipsList = action.getShipsList();
  if(howManySunkShips === shipsList.length){
    view.displayMessage('GAME OVER');
  }
}
