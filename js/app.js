// -------- Setig up the ships on the grid ------

const shipsList = [
  {name: 'quadrupleShip'}
];


function Test(id){
  this.id = id;
}

shipsList[0].name = new Test(44);
console.log(shipsList);

//     ---  Quadruople SHIP    ---
function addingQuadrupleShip(id) {
  const quadrupleShip = new QuadrupleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 3;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(quadrupleShip, howManyFieldsToAdd)

  const currentShipState = quadrupleShip.getTheShip();
  quadrupleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);              // dodaje pola do wykluszeń
  
  addShipSuroundingToTheBoarf(currentShipState);        // add sourounding of the ship

  quadrupleShip.markTheField(); // marking the ship
  return quadrupleShip;
}
const ShipQuadrupleIdZero = addingQuadrupleShip(0);



//     ---  TRIPLE SHIP    ---
function addingTripleShipsToTheGrid(id) {
  const tripleShip = new TripleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 2;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(tripleShip, howManyFieldsToAdd)

  const currentShipState = tripleShip.getTheShip();
  tripleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);              /// dodaje pola do wykluczen

  addShipSuroundingToTheBoarf(currentShipState);
  tripleShip.markTheField(); // marking the ship
 return tripleShip;
}

const tripleShipIdOne = addingTripleShipsToTheGrid(1);
const tripleShipIdTwo = addingTripleShipsToTheGrid(2);





// //     ---  DOUBLE SHIP    ---
function addingDoubleShipsToTheGrid(id) {
  const doubleShip = new DoubleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 1;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(doubleShip, howManyFieldsToAdd)

  const currentShipState = doubleShip.getTheShip();
  doubleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);

//
addShipSuroundingToTheBoarf(currentShipState);
doubleShip.markTheField(); // marking the ship
return doubleShip;
}
const doubleShipIdThree = addingDoubleShipsToTheGrid(3);
const doubleShipIdFour = addingDoubleShipsToTheGrid(4);
const doubleShipIdFive = addingDoubleShipsToTheGrid(5);


// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid(id) {
  const singleShip = new SingleShip(id); // initialisation of single ship
  const howManyFieldsToAdd = 0;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(singleShip, howManyFieldsToAdd)

  const currentShipState = singleShip.getTheShip();
  singleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  addShipSuroundingToTheBoarf(currentShipState);
  singleShip.markTheField(); // marking the ship
  return singleShip;
}
const singleShipIdSix = addingSingleShipsToTheGrid(6);
const singleShipIdSeven = addingSingleShipsToTheGrid(7);
const singleShipIdEight = addingSingleShipsToTheGrid(8);
// const singleShipIdNine = addingSingleShipsToTheGrid(9);


function addShipSuroundingToTheBoarf(currentShipState){
  //
const shipSurrounding = view.addSurroundings(currentShipState);                // add sourounding of the ship
view.pushAllSurroundingsToOneArray(shipSurrounding);      // pushes all suroundings into one array
const suroundingsArr = view.getSurroundings();
view.pushOneOccurrenceOfFieldToSurroundings(suroundingsArr);
//
}

function searchForTakenFieldsInTheArray(shipSize, howManyFieldsToAdd){
  let shipStartPoint = "";
  let found = "";

  do {
    shipStartPoint = shipSize.buildNewShip(); ///     ODKOMENTUJ
    shipSize.addNewShip(shipStartPoint);
    addingFields(shipSize, howManyFieldsToAdd);
    const currentShipState = shipSize.getTheShip();
    found = view.searchField(currentShipState);
  } while (found);
}

function addingFields(shipSize, steps) {
  // this function adds another fields to the egzisting ship
  for (let i = 0; i < steps; i++) {
    // and adds another fields to bigger ships
    let nextMove = false;
    let comparedSteps = false;
    let direction = "";

    do {
      direction = shipSize.choseDirection(); // choosing diration of marking
      
      if(shipSize.constructor.name === 'TripleShip' || shipSize.constructor.name === 'QuadrupleShip'){
        let lastStep = i-1;
        do {
          direction = shipSize.choseDirection(); // choosing diration of marking
          comparedSteps = shipSize.compareSteps(direction, lastStep);
          } while(comparedSteps)

      }
      nextMove = shipSize.checkMove(direction, i); // checking if move is possible
    }
    while(!nextMove)

    if(shipSize.constructor.name === 'TripleShip' || shipSize.constructor.name === 'QuadrupleShip'){
  shipSize.setStep(direction);
}
    const newField = shipSize.addNewField(direction, i); // Adding new field to array
    shipSize.updateShip(newField);
  }
}

