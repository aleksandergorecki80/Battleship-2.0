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

  let foundInGrid = true;
  let arrayOfFields = '';
do{
  let direction = '' // choosing diration of marking
  arrayOfFields = doubleShip.buildNewShip();


  let isAlreadyIn = true;
  let nextField = '';
  do {
  let isNextMovePossible = false;
  do{
    direction = doubleShip.choseDirection(); // choosing diration of marking
    isNextMovePossible = doubleShip.checkMove(arrayOfFields, direction, 0);
    } while (!isNextMovePossible);

  nextField = doubleShip.assignNewField(arrayOfFields, direction, 0);
  isAlreadyIn = searchInArrayOfFields(arrayOfFields, nextField);

  }while(isAlreadyIn !== undefined)


  arrayOfFields = [...arrayOfFields, nextField];

foundInGrid = view.searchForFields(arrayOfFields);
} while (foundInGrid)


  // Add fields to the ship state
  doubleShip.setTheShip(arrayOfFields);
  
  // Add ship fields to the taken fields on the board
  const shipFields = doubleShip.getTheShip()
  const updatedView = view.addShipFieldsAsTaken(shipFields);
  view.updateTakenFields(updatedView);
  
  //Add fields around
  addShipSuroundingToTheBoard(shipFields);
  
  doubleShip.markTheField();

  return doubleShip;
}

// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid(id) {
  const singleShip = new SingleShip(id); // initialisation of single ship
  
  let arrayOfFields = '';
  
do{
    arrayOfFields = singleShip.buildNewShip();

foundInGrid = view.searchForFields(arrayOfFields);
} while (foundInGrid)
  // Add fields to the ship state
  singleShip.setTheShip(arrayOfFields);
  
  // Add ship fields to the taken fields on the board
  const shipFields = singleShip.getTheShip()
  const updatedView = view.addShipFieldsAsTaken(shipFields);
  view.updateTakenFields(updatedView);
  
  //Add fields around
  addShipSuroundingToTheBoard(shipFields);
  
  singleShip.markTheField();
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
const doubleShipIdThree = addingDoubleShipsToTheGrid(3);
addShipToTheShipsList(doubleShipIdThree);
const doubleShipIdFour = addingDoubleShipsToTheGrid(4);
addShipToTheShipsList(doubleShipIdFour);
const doubleShipIdFive = addingDoubleShipsToTheGrid(5);
addShipToTheShipsList(doubleShipIdFive);
const singleShipIdSix = addingSingleShipsToTheGrid(6);
addShipToTheShipsList(singleShipIdSix);
const singleShipIdSeven = addingSingleShipsToTheGrid(7);
addShipToTheShipsList(singleShipIdSeven);
const singleShipIdEight = addingSingleShipsToTheGrid(8);
addShipToTheShipsList(singleShipIdEight);
const singleShipIdNine = addingSingleShipsToTheGrid(9);
addShipToTheShipsList(singleShipIdNine);
// console.log(shipsList);
