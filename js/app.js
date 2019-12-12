// Printing the grid

// Function prints rows
function printRows(id) {
  const game = document.getElementById("game");
  var tr = document.createElement("tr");
  game.appendChild(tr);
  // div.classList.add("field");
  tr.id = id;
  printColumns(tr.id); // Passing row id
}

//   //Funstion rints columns
function printColumns(trId) {
  for (let i = 0; i < 10; i++) {
    const tr = document.getElementById(trId);
    var td = document.createElement("td");
    tr.appendChild(td);

    td.id = `${trId}-${i}`;
  }
}

// Printing a board
for (let i = 0; i < 10; i++) {
  printRows(i);
}

const view = {
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

// Ships

function SingleShip() {
  // this.row = row;
  // this.column = column;
  this.ship = [];

  this.addNewShip = function() {
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    this.ship.push({ row: this.ship.row, column: this.ship.column });
    this.markTheField();
  };

  this.markTheField = function() {
    this.ship.forEach(id => {
      document.getElementById(`${id.row}-${id.column}`).classList.add("marked");
    });
  };
}

function DoubleShip() {
  SingleShip.call(this);

  // Function determins next move 0-right 1-down 2-left 3-up
  this.nextMoveDirection = function() {
    return Math.floor(Math.random() * 4);
  };

  // Function checks if next move is posible
  this.isNextMovePosible = function() {
    console.log(this.ship);
    // const direction = this.nextMoveDirection();
    const direction = 0;
    console.log(direction);
    switch (direction) {
      case 0:
        console.log(this.ship.row);
        if((this.ship.column+1)<10){
          this.ship.push({row: this.ship.row, column: this.ship.column+1});
          this.markTheField();
        } else {
          // tu wróć do losowania pola
        };
        break;
      case 1:
        //
        break;
      case 2:
        //
        break;
      case 3:
        //
        break;
    }
    // return move <= 10 && move >= 0;
  };

  // // Function adds a new field to an egzisting ship
  // this.addNewFieldToTheShip = function(direction) {
  //   console.log(`we go to ${direction}`)
  //   console.log(this.ship);
  //   switch (direction) {
  //     case 0:
  //       //
  //       break;
  //     case 1:
  //       //
  //       break;
  //     case 2:
  //       //
  //       break;
  //     case 3:
  //       //
  //       break;
  //   }
  // };

  //Function makes a next move
  this.nextMove = function() {
    const nextMoveDirectionIs = this.nextMoveDirection();
    
    while(!this.isNextMovePosible(nextMoveDirectionIs))
    {

    }
    return this.isNextMovePosible(nextMoveDirectionIs);
    // isMovePosible ? this.addNewFieldToTheShip(nextMoveDirectionIs) : this.nextMoveDirection();
  };
}

const firstSingleShip = new SingleShip();
firstSingleShip.addNewShip();

const firstDoubleShip = new DoubleShip();
firstDoubleShip.addNewShip();
firstDoubleShip.isNextMovePosible();
// console.log(firstDoubleShip.nextMove());

// const nextMoveDirectionIs = firstDoubleShip.nextMoveDirection();
// console.log(nextMoveDirectionIs);
// console.log(firstDoubleShip.isNextMovePosible(nextMoveDirectionIs));

// console.log(nextMoveDirectionIs);
// console.log(isNextMovePosible(11));
// console.log(row, column);
