

//              ------    Ships section     --------------
// Single Ships

function SingleShip(id) {
  this.ship = [];
  this.id = id;

  this.buildNewShip = function() {
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    return [{ id: this.id, row: this.ship.row, column: this.ship.column }];
  };

  this.addNewShip = function(shipStartPoint) {
    this.ship = shipStartPoint;
  };

  this.getTheShip = function() {
    return this.ship;
  };

  // Update a ship
  this.updateShip = function(updatedShip) {
    this.ship = updatedShip;
  };

  //    funkcja zaznacza statek na planszy - do wywalenia
  this.markTheField = function() {
    this.ship.forEach(cellId => {
      document
        .getElementById(`${cellId.row}-${cellId.column}`)
        .classList.add("marked");
    });
  };
}

// Double ship
function DoubleShip(id) {
  SingleShip.call(this, id);

  // Function determins next move 0-right 1-down 2-left 3-up
  this.choseDirection = function() {
    return Math.floor(Math.random() * 4);
  };

  // Check if a move is posible
  this.checkMove = function(direction, previousArrPosition) {
    switch (direction) {
      case 0:
        return this.ship[previousArrPosition].column + 1 < 10;
        break;
      case 1:
        return this.ship[previousArrPosition].row + 1 < 10;
        break;
      case 2:
        return this.ship[previousArrPosition].column - 1 >= 0;
        break;
      case 3:
        return this.ship[previousArrPosition].row - 1 >= 0;
        break;
    }
  };

  // Adding a next field to a existing ship
  this.addNewField = function(direction, previousArrPosition) {
    switch (direction) {
      case 0:
        return [
          ...this.ship,
          {
            id: this.id,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column + 1
          }
        ];
        break;
      case 1:
        return [
          ...this.ship,
          {
            id: this.id,
            row: this.ship[previousArrPosition].row + 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
      case 2:
        return [
          ...this.ship,
          {
            id: this.id,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column - 1
          }
        ];
        break;
      case 3:
        return [
          ...this.ship,
          {
            id: this.id,
            row: this.ship[previousArrPosition].row - 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
    }
  };
}

// Triple ship
function TripleShip(id) {
  DoubleShip.call(this, id);
  this.oposits = [2, 3, 0, 1];        // indeks tabeli [0,1,2,3]ma watrosc wylosowanego kroku, wartosc w indeksie to krok naprzeciwko ktorego nie mozna wykonac 
  this.steps = [];

  this.setStep = function(step){
      this.steps = [...this.steps, step];
  }


  this.compareSteps = function(nextStep, lastStep){
      return this.steps[lastStep] === this.oposits[nextStep];
  }
}



// Quadruple ship
function QuadrupleShip(id) {
  TripleShip.call(this, id);
}

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
  
  addShipSuroundingToTheBoarf(currentShipState);
  // const shipSurrounding = view.addSurroundings(currentShipState);                // add sourounding of the ship
  // view.pushAllSurroundingsToOneArray(shipSurrounding);      // pushes all suroundings into one array
  // const suroundingsArr = view.getSurroundings();
  // view.pushOneOccurrenceOfFieldToSurroundings(suroundingsArr);

  quadrupleShip.markTheField(); // marking the ship

  console.log('view.surroundings', view.surroundings);
  console.log('view.boardFieldsTaken', view.boardFieldsTaken);  
  console.log("quadrupleShip ship", quadrupleShip.ship);
}
addingQuadrupleShip(1);



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

  console.log('view.surroundings', view.surroundings);
  console.log('view.boardFieldsTaken', view.boardFieldsTaken);
  console.log("tripleShip ship", tripleShip.ship);
}


addingTripleShipsToTheGrid(2);
addingTripleShipsToTheGrid(3);





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
// const shipSurrounding = view.addSurroundings(currentShipState);                // add sourounding of the ship
// view.pushAllSurroundingsToOneArray(shipSurrounding);      // pushes all suroundings into one array
// const suroundingsArr = view.getSurroundings();
// view.pushOneOccurrenceOfFieldToSurroundings(suroundingsArr);
//
console.log('view.surroundings', view.surroundings);
console.log('view.boardFieldsTaken', view.boardFieldsTaken);
doubleShip.markTheField(); // marking the ship
  console.log("double ship", doubleShip.ship);
}
addingDoubleShipsToTheGrid(4);
addingDoubleShipsToTheGrid(5);
addingDoubleShipsToTheGrid(6);






// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid() {
  const singleShip = new SingleShip(); // initialisation of single ship
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
  console.log('view.surroundings', view.surroundings);
console.log('view.boardFieldsTaken', view.boardFieldsTaken);
  console.log("singleShip ship", singleShip.ship);
}
addingSingleShipsToTheGrid(7);
addingSingleShipsToTheGrid(8);
addingSingleShipsToTheGrid(9);
addingSingleShipsToTheGrid(10);



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
          console.log('comparedSteps', comparedSteps);
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
    console.log('steps', shipSize.steps);
  }
}