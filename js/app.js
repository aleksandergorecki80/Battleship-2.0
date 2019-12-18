const view = {
  boardFieldsTaken: [{ row: 2, column: 0 }],

  searchField: function(numbers) {
    return this.boardFieldsTaken.find(function(obj) {
      return obj.col === numbers.col && obj.row === numbers.row;
    });
  },

  addShipFieldsAsTaken: function(data) {
    return this.boardFieldsTaken.push(data);
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

  //    funkcja zaznacza statek na planszy - do wywalenia
  this.markTheField = function(newField) {
    newField.forEach(cellId => {
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

// sprobuj cały blok do końca funkcji dać w pętle while


  // let shipStartPoint = doubleShip.buildNewShip(); ///     ODKOMENTUJ
  let shipStartPoint = [{ row: 2, column: 0}];
  doubleShip.addNewShip(shipStartPoint);
  addingFields(doubleShip, 1);

  for(let i =0; i<doubleShip.ship.length; i++){
    let isFieldFound = view.searchField(doubleShip.ship[i]);
    if(isFieldFound){
      console.log('znalaz');
    }
  }

console.log('double ship',doubleShip.ship);
}
addingDoubleShipsToTheGrid();
// addingDoubleShipsToTheGrid();
// addingDoubleShipsToTheGrid();

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
    shipSize.markTheField(newField); // marking the ship
  }
}

// //    ---  SINGLE SHIP ---
function addingSingleShipsToTheGrid() {
  const singleShip = new SingleShip(); // initialisation of single ship
  // drawing numbers
  let shipStartPoint = [{ row: 2, column: 0 }];
  let isFieldFound = view.searchField(shipStartPoint[0]);
  while (isFieldFound) {
    shipStartPoint = singleShip.buildNewShip();
    isFieldFound = view.searchField(shipStartPoint[0]);
  }

  view.addShipFieldsAsTaken(shipStartPoint[0]);
  singleShip.addNewShip(shipStartPoint);
  singleShip.markTheField(singleShip.ship);
  console.log(singleShip.ship);
}
addingSingleShipsToTheGrid();
// addingSingleShipsToTheGrid();
// addingSingleShipsToTheGrid();
// addingSingleShipsToTheGrid();

console.log("wiev, ", view.boardFieldsTaken);

