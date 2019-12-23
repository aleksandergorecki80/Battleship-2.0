const view = {
  boardFieldsTaken: [],

  getBoardFieldsTaken: function(){
    return this.boardFieldsTaken;
  },

  searchField: function(numbers) {
    return this.boardFieldsTaken.find(function(obj) {
      return obj.col === numbers.col && obj.row === numbers.row;
    });
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

function SingleShip() {
  this.ship = [];

  this.buildNewShip = function() {
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    return [{ id: 1, row: this.ship.row, column: this.ship.column }];
  };

  this.addNewShip = function(shipStartPoint) {
    this.ship = shipStartPoint;
  };

  this.getTheShip = function(){
    return this.ship;
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
function DoubleShip() {
  SingleShip.call(this);

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
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column + 1
          }
        ];
        break;
      case 1:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row + 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
      case 2:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row,
            column: this.ship[previousArrPosition].column - 1
          }
        ];
        break;
      case 3:
        return [
          ...this.ship,
          {
            id: this.ship[previousArrPosition].id + 1,
            row: this.ship[previousArrPosition].row - 1,
            column: this.ship[previousArrPosition].column
          }
        ];
        break;
    }
  };

  // Updating a ship
  this.updateShip = function(updatedShip) {
    this.ship = updatedShip;
  };
}

// Triple ship
function TripleShip() {
  DoubleShip.call(this);
}

// Quadruple ship
function QuadrupleShip() {
  DoubleShip.call(this);
}

//     ---  Quadruole SHIP    ---
function addingQuadrupleShip() {
  const quadrupleShip = new QuadrupleShip(); // initialisation of double ship
  addingFields(quadrupleShip, 3);
}
// addingQuadrupleShip();

//     ---  TRIPLE SHIP    ---
function addingTripleShipsToTheGrid() {
  const tripleShip = new TripleShip(); // initialisation of double ship
  addingFields(tripleShip, 2);
}
// addingTripleShipsToTheGrid();
// addingTripleShipsToTheGrid();

// //     ---  DOUBLE SHIP    ---
function addingDoubleShipsToTheGrid() {
  const doubleShip = new DoubleShip(); // initialisation of double ship  
  
  let shipStartPoint = '';
  let found = '';

  do {
    shipStartPoint = doubleShip.buildNewShip(); ///     ODKOMENTUJ
    doubleShip.addNewShip(shipStartPoint);
    addingFields(doubleShip, 1);
    const currentBoardFieldsTaken = view.getBoardFieldsTaken();
    console.log("double ship", doubleShip.ship);
    found = view.searchField(currentBoardFieldsTaken);
  }
  while(found);
  const currentShipState = doubleShip.getTheShip();
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  console.log('updatedView', updatedView);  
  
}
addingDoubleShipsToTheGrid();
addingDoubleShipsToTheGrid();
addingDoubleShipsToTheGrid();

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
    shipSize.markTheField(); // marking the ship
  }
}

// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid() {
  const singleShip = new SingleShip(); // initialisation of single ship


  let shipStartPoint = '';
  let found = '';

  do {
    shipStartPoint = singleShip.buildNewShip(); ///     ODKOMENTUJ
    singleShip.addNewShip(shipStartPoint);
    
    const currentBoardFieldsTaken = view.getBoardFieldsTaken();
    console.log("singleShip ship", singleShip.ship);
    found = view.searchField(currentBoardFieldsTaken);
  }
  while(found);
  const currentShipState = singleShip.getTheShip();
  const updatedView = view.addShipFieldsAsTaken(currentShipState);
  view.updateTakenFields(updatedView);
  singleShip.markTheField(); // marking the ship
  console.log('updatedView', updatedView);  

}
addingSingleShipsToTheGrid();
addingSingleShipsToTheGrid();
addingSingleShipsToTheGrid();
addingSingleShipsToTheGrid();

// console.log("wiev, ", view.boardFieldsTaken);
