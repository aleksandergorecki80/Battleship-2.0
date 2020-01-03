// -------- Setig up the ships on the grid ------

//     ---  Quadruople SHIP    ---
function addingQuadrupleShip(id) {
  const quadrupleShip = new QuadrupleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 3;

  // searching for fileds in current excluded list
  // inside it there is called next function: addingFields();
  searchForTakenFieldsInTheArray(quadrupleShip, howManyFieldsToAdd);

  const currentShipState = quadrupleShip.getTheShip();
  quadrupleShip.updateShip(currentShipState); // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView); // dodaje pola do wykluszeń

  addShipSuroundingToTheBoarf(currentShipState); // add sourounding of the ship

  quadrupleShip.markTheField(); // marking the ship
  return quadrupleShip;
}

//     ---   TripleAndQuadrupleShip SHIP    ---
function addingTripleAndQuadrupleShip(id) {
  const tripleShip = new TripleAndQuadrupleShip(id, 3); // initialisation of double ship
  let howManyFieldsToAdd = tripleShip.getNumberOfFields() - 1;



  let foundInGrid = true;
  let arrayOfFields
do{
  let direction = '' // choosing diration of marking
  arrayOfFields = tripleShip.buildNewShip();

for(let i=0; i<howManyFieldsToAdd; i++){
  let isAlreadyIn = true;
  let nextField = '';
  do {
  let isNextMovePossible = false;
  do{
    direction = tripleShip.choseDirection(); // choosing diration of marking
    isNextMovePossible = tripleShip.checkMove(arrayOfFields, direction, i);
    console.log('isNextMovePossible', isNextMovePossible); 
    } while (!isNextMovePossible);

  nextField = tripleShip.assignNewField(arrayOfFields, direction, i);
  console.log('nextField', nextField);
  isAlreadyIn = searchInArrayOfFields(arrayOfFields, nextField);
  console.log('isAlreadyIn', isAlreadyIn);

  }while(isAlreadyIn !== undefined)


  arrayOfFields = [...arrayOfFields, nextField];
}
console.log('arrayOfFields', arrayOfFields);
foundInGrid = view.searchForFields(arrayOfFields);
console.log('foundInGrid', foundInGrid); 
} while (foundInGrid)

 
  
  
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

//    to ponizej tez bedzie do wywalenia
// function searchForTakenFieldsInTheArray(shipSize, howManyFieldsToAdd) {
//   let shipStartPoint = "";
//   let found = "";

//   do {
//     shipStartPoint = shipSize.buildNewShip(); ///     ODKOMENTUJ

//    const newFields = addingFields(shipSize, howManyFieldsToAdd);
//     shipSize.updateShip(newFields);                    // dodane z funkcji addingFields
//     const currentShipState = shipSize.getTheShip();
//     found = view.searchField(currentShipState);
//     console.log("found ", found);
//     shipSize.addNewShip(shipStartPoint);                  ///     to musi byc na sam koniec jak jusz wszystko sie posprawdza
//   } while (found);
// }

// function addingFields(shipSize, steps) {
//   // this function adds another fields to the egzisting ship
//   for (let i = 0; i < steps; i++) {
//     // and adds another fields to bigger ships
//     let nextMove = false;
//     let comparedSteps = false;
//     let direction = "";

//     do {
//       if (
//         (shipSize.constructor.name === "TripleShip" ||
//           shipSize.constructor.name === "QuadrupleShip") &&
//         i > 0
//       ) {
//         let lastStep = i - 1;
//         do {
//           direction = shipSize.choseDirection(); // choosing diration of marking

//           comparedSteps = shipSize.compareSteps(direction, lastStep);

//         } while (comparedSteps);

//       } else {
//         direction = shipSize.choseDirection(); // choosing diration of marking
//       }
//       nextMove = shipSize.checkMove(direction, i); // checking if move is possible
//     } while (!nextMove);
// console.log('nextMove', nextMove);
//   if(nextMove){
//     console.log('iii')
//     shipSize.setStep(direction);
//     const newField = shipSize.addNewField(direction, i); // Adding new field to array
//     shipSize.updateShip(newField);
//   }

//   }
// }

//      TO NIE JEST ZŁE ALE WYMAGA DOPRACOWANIA W POŁĄCZENIU Z POPRZEDNIĄ FUNKCJĄ

// function addingFields(shipSize, steps) {
//   for (let i = 0; i < steps; i++) {
//     direction = shipSize.choseDirection(); // choosing diration of marking
//     console.log('direction', direction);

//     nextMove = shipSize.checkMove(direction, i); // checking if move is possible
//     console.log('nextMove = ', nextMove);
//  return shipSize.addNewField(direction, i); // Adding new field to array
//     // console.log('newField = ', newField)
//     // shipSize.updateShip(newField);
//     // shipSize.setStep(direction);
//     // console.log('steps = ', shipSize.steps);
//   }

// }

const shipsList = [];

function addShipToTheShipsList(shipToAdd) {
  return shipsList.push(shipToAdd);
}

// const ShipQuadrupleIdZero = addingQuadrupleShip(0);
// addShipToTheShipsList(ShipQuadrupleIdZero);
const tripleShipIdOne = addingTripleAndQuadrupleShip(1, 3);
addShipToTheShipsList(tripleShipIdOne);
const tripleShipIdTwo = addingTripleAndQuadrupleShip(2, 3);
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
