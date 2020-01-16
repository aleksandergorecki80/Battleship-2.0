//  ----------    OPENING PAGE ------
// document.addEventListener('DOMContentLoaded', loadWelcomePage);


const button = document.getElementById('startReloadGame');

button.addEventListener('click', (e)=> {
    
    if(e.target.value==='start'){

      // GAME STARTS HERE
      const gameContainer = document.querySelector('#gameContainer');
      const pirateShip = document.querySelector('#pirateShip');
      
      gameContainer.classList.remove('hidden');
      pirateShip.classList.add('hidden');
    
      // const ShipQuadrupleIdZero = addingQuadrupleShip(0);
      // action.addShipToTheShipsList(ShipQuadrupleIdZero);
      
      // const tripleShipIdOne = addingTripleShipToTheGrid(1);
      // action.addShipToTheShipsList(tripleShipIdOne);
      
      // const tripleShipIdTwo = addingTripleShipToTheGrid(2);
      // action.addShipToTheShipsList(tripleShipIdTwo);
      
      // const doubleShipIdThree = addingDoubleShipsToTheGrid(3);
      // action.addShipToTheShipsList(doubleShipIdThree);
      
      // const doubleShipIdFour = addingDoubleShipsToTheGrid(4);
      // action.addShipToTheShipsList(doubleShipIdFour);
      
      // const doubleShipIdFive = addingDoubleShipsToTheGrid(5);
      // action.addShipToTheShipsList(doubleShipIdFive);
      
      // const singleShipIdSix = addingSingleShipsToTheGrid(6);
      // action.addShipToTheShipsList(singleShipIdSix);
      
      // const singleShipIdSeven = addingSingleShipsToTheGrid(7);
      // action.addShipToTheShipsList(singleShipIdSeven);
      
      // const singleShipIdEight = addingSingleShipsToTheGrid(8);
      // action.addShipToTheShipsList(singleShipIdEight);
      
      const singleShipIdNine = addingSingleShipsToTheGrid(9);
      action.addShipToTheShipsList(singleShipIdNine);
      //---


        button.value = 'stop';
        button.innerText = 'Stop the game';
        isGameRun = switchTheStatus();
        console.log(isGameRun);
    } else {
        button.value = 'start';
        button.innerText = 'Sart the game';
        const gameOverMessage = {content: 'GAME OVER'}
        Modal.openModal(gameOverMessage);
        isGameRun = switchTheStatus();
        console.log(isGameRun);
    }
    
});


// const startGameButton = document.querySelector('.start-game');
// startGameButton.addEventListener('click', ()=>{
//   // disable the start button
//   startGameButton.disabled = true;
//   reloadGameButton.disabled = false;

//   const gameContainer = document.querySelector('#gameContainer');
//   const pirateShip = document.querySelector('#pirateShip');
  
//   gameContainer.classList.remove('hidden');
//   pirateShip.classList.add('hidden');

//   // const ShipQuadrupleIdZero = addingQuadrupleShip(0);
//   // action.addShipToTheShipsList(ShipQuadrupleIdZero);
  
//   // const tripleShipIdOne = addingTripleShipToTheGrid(1);
//   // action.addShipToTheShipsList(tripleShipIdOne);
  
//   // const tripleShipIdTwo = addingTripleShipToTheGrid(2);
//   // action.addShipToTheShipsList(tripleShipIdTwo);
  
//   // const doubleShipIdThree = addingDoubleShipsToTheGrid(3);
//   // action.addShipToTheShipsList(doubleShipIdThree);
  
//   // const doubleShipIdFour = addingDoubleShipsToTheGrid(4);
//   // action.addShipToTheShipsList(doubleShipIdFour);
  
//   // const doubleShipIdFive = addingDoubleShipsToTheGrid(5);
//   // action.addShipToTheShipsList(doubleShipIdFive);
  
//   // const singleShipIdSix = addingSingleShipsToTheGrid(6);
//   // action.addShipToTheShipsList(singleShipIdSix);
  
//   // const singleShipIdSeven = addingSingleShipsToTheGrid(7);
//   // action.addShipToTheShipsList(singleShipIdSeven);
  
//   // const singleShipIdEight = addingSingleShipsToTheGrid(8);
//   // action.addShipToTheShipsList(singleShipIdEight);
  
//   const singleShipIdNine = addingSingleShipsToTheGrid(9);
//   action.addShipToTheShipsList(singleShipIdNine);
// });





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

//     ---   Triple Ship     ---
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






