//              ------    Ships classes section     --------------
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
  