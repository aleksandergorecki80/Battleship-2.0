function Action() {
  this.takenShots = [];

  this.getTakenShots = function() {
    return this.takenShots;
  };

  this.setTheShot = function(listOfShots, field) {
    this.takenShots = [...listOfShots, field];
  };
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
    view.displayMessage("You already hit here!");
  } else {
    action.setTheShot(listOfShots, clickedField);
    view.blockTheField(clickedField);
    const newListOfShots = action.getTakenShots();
    console.log("newListOfShots", newListOfShots);

    const listOfTakenFields = view.getBoardFieldsTaken();
    const clickedFieldRespond = searchInArrayOfFields(listOfTakenFields,clickedField);

    if (clickedFieldRespond === undefined) {
      view.displayMessage("Pudło");
      view.displayMiss(clickedField);
    } else {
      const hitShip = shipsList.find(element => {
        return element.id === clickedFieldRespond.id;
      });
      if (hitShip === undefined) {
        view.displayMessage("Pudło");
        view.displayMiss(clickedField);
      } else {
        //    console.log(foundShip.ship);

        const shipFields = hitShip.getTheShip();

        const spotOnShots = hitShip.addFieldToShots(clickedFieldRespond);

        hitShip.updateSpotOnShots(spotOnShots);

        const updatedSpotOnShots = hitShip.getSpotOnShots();

        

        if (updatedSpotOnShots.length === shipFields.length) {
          view.displayMessage("Trafiony, zatopiony");
        } else {
          view.displayMessage("Trafiony");
        }
      }
    }
  }
}
