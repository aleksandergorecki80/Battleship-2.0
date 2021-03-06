//              ------    Ships classes section     --------------
// Single Ships

function SingleShip(id, numberOfFields) {
  this.ship = [];
  this.id = id;
  this.numberOfFields = numberOfFields;
  this.spotOnShots = [];

  this.buildNewShip = function() {
    this.ship.row = Math.floor(Math.random() * 10);
    this.ship.column = Math.floor(Math.random() * 10);
    return [{ id: this.id, row: this.ship.row, column: this.ship.column }];
  };

  // Set a ship
  this.setTheShip = function(updatedShip) {
    this.ship = updatedShip;
  };
  this.getTheShip = function() {
    return this.ship;
  };

  this.getNumberOfFields = function() {
    return this.numberOfFields;
  };

  this.getSpotOnShots = function(){
    return this.spotOnShots;
  }

  this.addFieldToShots = function(field){
    return [...this.spotOnShots, field]
  };

  this.updateSpotOnShots = function(updatedShots){
    return this.spotOnShots = updatedShots;
  }
}

// Double ship
function DoubleShip(id, numberOfFields) {
  SingleShip.call(this, id, numberOfFields);

      // Function determins next move 0-right 1-down 2-left 3-up
      this.choseDirection = function() {
        return Math.floor(Math.random() * 4);
      };

  // Check if a move is posible
  this.checkMove = function(arrayOfFields, direction, previousArrPosition) {
     switch (direction) {
      case 0:
        return arrayOfFields[previousArrPosition].column + 1 < 10;
        break;
      case 1:
        return arrayOfFields[previousArrPosition].row + 1 < 10;
        break;
      case 2:
        return arrayOfFields[previousArrPosition].column - 1 >= 0;
        break;
      case 3:
        return arrayOfFields[previousArrPosition].row - 1 >= 0;
        break;
    }
  };

  // Adding a next field to a existing ship
  this.assignNewField = function(
    arrayOfFields,
    direction,
    previousArrPosition
  ) {
    switch (direction) {
      case 0:
        return {
          id: arrayOfFields[previousArrPosition].id,
          row: arrayOfFields[previousArrPosition].row,
          column: arrayOfFields[previousArrPosition].column + 1
        };
        break;
      case 1:
        return {
          id: arrayOfFields[previousArrPosition].id,
          row: arrayOfFields[previousArrPosition].row + 1,
          column: arrayOfFields[previousArrPosition].column
        };
        break;
      case 2:
        return {
          id: arrayOfFields[previousArrPosition].id,
          row: arrayOfFields[previousArrPosition].row,
          column: arrayOfFields[previousArrPosition].column - 1
        };
        break;
      case 3:
        return {
          id: arrayOfFields[previousArrPosition].id,
          row: arrayOfFields[previousArrPosition].row - 1,
          column: arrayOfFields[previousArrPosition].column
        };
        break;
    }
  };
}

// Triple and Auadruple ship
function TripleAndQuadrupleShip(id, numberOfFields) {
  DoubleShip.call(this, id, numberOfFields);
  this.opposites = [2, 3, 0, 1]; // indeks tabeli [0,1,2,3]ma watrosc wylosowanego kroku, wartosc w indeksie to krok naprzeciwko ktorego nie mozna wykonac
  this.steps = [];

  this.setStep = function(step) {
    this.steps = [...this.steps, step];
  };

  this.compareSteps = function(lastStep, direction) {
    return this.steps[lastStep] === this.opposites[direction];
  };

  this.determineShipFields = function(howManyFieldsToAdd){

    let foundInGrid = true;
    let arrayOfFields = '';
  do{
    let direction = '' // choosing diration of marking
    arrayOfFields = this.buildNewShip();
  
  for(let i=0; i<howManyFieldsToAdd; i++){
    let isAlreadyIn = true;
    let nextField = '';
    do {
    let isNextMovePossible = false;
    do{
      direction = this.choseDirection(); // choosing diration of marking
      isNextMovePossible = this.checkMove(arrayOfFields, direction, i);
      } while (!isNextMovePossible);
  
    nextField = this.assignNewField(arrayOfFields, direction, i);
    isAlreadyIn = searchInArrayOfFields(arrayOfFields, nextField);
  
    }while(isAlreadyIn !== undefined)
  
  
    arrayOfFields = [...arrayOfFields, nextField];
  }
  foundInGrid = view.searchForFields(arrayOfFields);
  } while (foundInGrid)

  return arrayOfFields;
  }
  


}
