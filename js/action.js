const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

for (let row = 0; row < 10; row++) {
  for (let column = 0; column < 10; column++) {
    document
      .getElementById(`${row}-${column}`)
      .addEventListener("click", () => {
        action(row, column);
      });
  }
}

function action(row, column) {
  const clickedField = { row, column };
  const clickedFieldRespond = view.findClickedFieldOnList(clickedField);

  if (clickedFieldRespond === undefined) {
    view.displayMessage("Pudło");
  } else {
    const hitShip = shipsList.find(element => {
      return element.id === clickedFieldRespond.id;
    });
    if (hitShip === undefined) {
      view.displayMessage("Pudło");
    } else {
      
      //    console.log(foundShip.ship);

      const shipFields = hitShip.getTheShip();

      const spotOnShots = hitShip.addFieldToShots(clickedFieldRespond);

      hitShip.updateSpotOnShots(spotOnShots);

      const updatedSpotOnShots = hitShip.getSpotOnShots();

      
      view.blockTheField(clickedField);

      if (updatedSpotOnShots.length === shipFields.length) {

        view.displayMessage("Trafiony, zatopiony");
        
      } else {
        view.displayMessage("Trafiony");
      }
      console.log("shipFields=", shipFields);
      console.log("updatedSpotOnShots", updatedSpotOnShots);
    }
  }
}
