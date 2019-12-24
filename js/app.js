const view = {
  boardFieldsTaken: [],

  getBoardFieldsTaken: function() {
    return this.boardFieldsTaken;
  },

  searchField: function(shipFields) {
    for (let i = 0; i < shipFields.length; i++) {
      for (let k = 0; k < this.boardFieldsTaken.length; k++) {
        if (
          shipFields[i].row === this.boardFieldsTaken[k].row &&
          shipFields[i].column === this.boardFieldsTaken[k].column
        ) {
          console.log("zgadzasie");
          return true;
        } else {
          // console.log("mozna dodac");
        }
      }
    }
  },

  addShipFieldsAsTaken: function(data) {
    return [...this.boardFieldsTaken, ...data];
  },

  updateTakenFields: function(data) {
    this.boardFieldsTaken = data;
  },

  markFieldsAsTaken: function(object) {
    console.log(object);
  },

  displayMessage: function(msg) {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

// Testing board
view.displayMessage("This is a testing message");
view.displayHit("3-3");
view.displayMiss("6-4");

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


  this.stepsDirectionMade = [];
  this.stepsRestrictions = {
    prev0:2,
    prev1:3,
    prev2:0,
    prev3:1,
    }

   this.getStepMade = function(){
    return this.stepsDirectionMade;
  };

  this.setPreviousStep = function(previousStep){
    return [...this.stepsDirectionMade, previousStep]
  };

  this.updatePreviousSteps = function(previousSteps){
    this.stepsDirectionMade = previousSteps;
  }
}



// Quadruple ship
function QuadrupleShip() {
  DoubleShip.call(this);
}

//     ---  Quadruole SHIP    ---
function addingQuadrupleShip(id) {
  const quadrupleShip = new QuadrupleShip(id); // initialisation of double ship
  addingFields(quadrupleShip, 3);
}
// addingQuadrupleShip(1);

//     ---  TRIPLE SHIP    ---
function addingTripleShipsToTheGrid(id) {
  const tripleShip = new TripleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 2;

  // searching for fileds in current excluded list
  searchForTakenFieldsInTheArray(tripleShip, howManyFieldsToAdd)

  const currentShipState = tripleShip.getTheShip();
  tripleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  tripleShip.markTheField(); // marking the ship
  console.log("tripleShip ship", tripleShip.ship);
}
addingTripleShipsToTheGrid(2);
// addingTripleShipsToTheGrid(3);

// //     ---  DOUBLE SHIP    ---
function addingDoubleShipsToTheGrid(id) {
  const doubleShip = new DoubleShip(id); // initialisation of double ship
  const howManyFieldsToAdd = 1;

  // searching for fileds in current excluded list
  searchForTakenFieldsInTheArray(doubleShip, howManyFieldsToAdd)

  const currentShipState = doubleShip.getTheShip();
  doubleShip.updateShip(currentShipState);                          // nie jestem pewien tego !!!
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  doubleShip.markTheField(); // marking the ship
}
// addingDoubleShipsToTheGrid(4);
// addingDoubleShipsToTheGrid(5);
// addingDoubleShipsToTheGrid(6);

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
    let direction = "";
    while (!nextMove) {
      direction = shipSize.choseDirection(); // choosing diration of marking
      nextMove = shipSize.checkMove(direction, i); // checking if move is possible
    }
    const newField = shipSize.addNewField(direction, i); // Adding new field to array
    shipSize.updateShip(newField);
    
  }
}

// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid() {
  const singleShip = new SingleShip(); // initialisation of single ship

  let shipStartPoint = "";
  let found = "";

  do {
    shipStartPoint = singleShip.buildNewShip(); ///     ODKOMENTUJ
    singleShip.addNewShip(shipStartPoint);

    const currentBoardFieldsTaken = view.getBoardFieldsTaken();
    console.log("singleShip ship", singleShip.ship);
    found = view.searchField(currentBoardFieldsTaken);
  } while (found);
  const currentShipState = singleShip.getTheShip();
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  singleShip.markTheField(); // marking the ship
  console.log("updatedView", updatedView);
}
// addingSingleShipsToTheGrid(7);
// addingSingleShipsToTheGrid(8);
// addingSingleShipsToTheGrid(9);
// addingSingleShipsToTheGrid(10);

// console.log("wiev, ", view.boardFieldsTaken);

