// -------- Setig up the ships on the grid ------

//     ---  Quadruople SHIP    ---
function addingQuadrupleShip(id) {
  const quadrupleShip = new TripleAndQuadrupleShip(id, 4); // initialisation of double ship
  let howManyFieldsToAdd = quadrupleShip.getNumberOfFields() - 1;

  const arrayOfFields = quadrupleShip.determineShipFields(howManyFieldsToAdd);

 
  // Add fields to the ship state
  quadrupleShip.setTheShip(arrayOfFields);
  
  // Add ship fields to the taken fields on the board
  const shipFields = quadrupleShip.getTheShip()
  const updatedView = view.addShipFieldsAsTaken(shipFields);
  view.updateTakenFields(updatedView);
  
  //Add fields around
  addShipSuroundingToTheBoard(shipFields);
  
  quadrupleShip.markTheField();
  return quadrupleShip;
}

//     ---   TripleAndQuadrupleShip SHIP    ---
function addingTripleShipToTheGrid(id) {
  const tripleShip = new TripleAndQuadrupleShip(id, 3); // initialisation of double ship
  let howManyFieldsToAdd = tripleShip.getNumberOfFields() - 1;

 const arrayOfFields = tripleShip.determineShipFields(howManyFieldsToAdd);

  // Add fields to the ship state
  tripleShip.setTheShip(arrayOfFields);
  
  // Add ship fields to the taken fields on the board
  const shipFields = tripleShip.getTheShip()
  const updatedView = view.addShipFieldsAsTaken(shipFields);
  view.updateTakenFields(updatedView);
  
  //Add fields around
  addShipSuroundingToTheBoard(shipFields);
  
  tripleShip.markTheField();
  return tripleShip;
}

function searchInArrayOfFields(arrayOfFields, nextField){
  return arrayOfFields.find((field)=>{
    return (field.row === nextField.row && field.column === nextField.column);
  })
}

// //     ---  DOUBLE SHIP    ---
function addingDoubleShipsToTheGrid(id) {
  const doubleShip = new DoubleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 1;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(doubleShip, howManyFieldsToAdd);

  const currentShipState = doubleShip.getTheShip();
  doubleShip.updateShip(currentShipState); // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);

  //
  addShipSuroundingToTheBoarf(currentShipState);
  doubleShip.markTheField(); // marking the ship
  return doubleShip;
}

// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid(id) {
  const singleShip = new SingleShip(id); // initialisation of single ship
  const howManyFieldsToAdd = 0;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(singleShip, howManyFieldsToAdd);

  const currentShipState = singleShip.getTheShip();
  singleShip.updateShip(currentShipState); // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  addShipSuroundingToTheBoarf(currentShipState);
  singleShip.markTheField(); // marking the ship
  return singleShip;
}

function addShipSuroundingToTheBoard(currentShipState) {
  //
  const shipSurrounding = view.addSurroundings(currentShipState); // add sourounding of the ship
  view.pushAllSurroundingsToOneArray(shipSurrounding); // pushes all suroundings into one array
  const suroundingsArr = view.getSurroundings();
  view.pushOneOccurrenceOfFieldToSurroundings(suroundingsArr);
  //
}



const shipsList = [];

function addShipToTheShipsList(shipToAdd) {
  return shipsList.push(shipToAdd);
}

const ShipQuadrupleIdZero = addingQuadrupleShip(0);
addShipToTheShipsList(ShipQuadrupleIdZero);
const tripleShipIdOne = addingTripleShipToTheGrid(1);
addShipToTheShipsList(tripleShipIdOne);
const tripleShipIdTwo = addingTripleShipToTheGrid(2);
addShipToTheShipsList(tripleShipIdTwo);
// const doubleShipIdThree = addingDoubleShipsToTheGrid(3);
// addShipToTheShipsList(doubleShipIdThree);
// const doubleShipIdFour = addingDoubleShipsToTheGrid(4);
// addShipToTheShipsList(doubleShipIdFour);
// const doubleShipIdFive = addingDoubleShipsToTheGrid(5);
// addShipToTheShipsList(doubleShipIdFive);
// const singleShipIdSix = addingSingleShipsToTheGrid(6);
// addShipToTheShipsList(singleShipIdSix);
// const singleShipIdSeven = addingSingleShipsToTheGrid(7);
// addShipToTheShipsList(singleShipIdSeven);
// const singleShipIdEight = addingSingleShipsToTheGrid(8);
// addShipToTheShipsList(singleShipIdEight);
// const singleShipIdNine = addingSingleShipsToTheGrid(9);
// addShipToTheShipsList(singleShipIdNine);
// console.log(shipsList);
