
function DoubleShip() {
    SingleShip.call(this);
  
    // Function determins next move 0-right 1-down 2-left 3-up
    this.nextMoveDirection = function(numberOfMoves) {
      const moveDirection = Math.floor(Math.random() * 4);
      console.log(`Direction of the move: ${moveDirection}`);
      this.nextMove(moveDirection, numberOfMoves);
    };
  
    // Function checks if next move is posible
    this.nextMove = function(direction, numberOfMoves) {
      for(let i=0; i<numberOfMoves; i++){
        console.log('Numbers of move to do: ', numberOfMoves)
        console.log('Kolejne pole: ', this.ship[i].column , this.ship[i].row)
        switch (direction) {
          case 0:
            
            if (this.ship[i].column + 1 < 10) {
  
              this.ship.push({ id: this.ship[i].id+1, row: this.ship[i].row, column: this.ship[i].column + 1 });
              this.markTheField();
            } else {
               this.nextMoveDirection();
            }
            break;
          case 1:
            if (this.ship[i].row + 1 <= 9) {
              this.ship.push({ id:2, row: this.ship[i].row + 1, column: this.ship[i].column });
              this.markTheField();
            } else {
              this.nextMoveDirection();
            }
            break;
          case 2:
            if (this.ship[i].column - 1 >= 0) {
              this.ship.push({ id:2, row: this.ship[i].row, column: this.ship[i].column - 1 });
              this.markTheField();
            } else {
              this.nextMoveDirection();
            }
            break;
          case 3:
            if (this.ship[i].row - 1 >= 0) {
              this.ship.push({ id:2, row: this.ship[i].row - 1, column: this.ship[i].column });
              this.markTheField();
            } else {
              this.nextMoveDirection();
            }
            break;
        }
      }
          
    };
  }
  
  function TripleShip(){
    DoubleShip.call(this);
  }
  
  function QuadrupleShip(){
    DoubleShip.call(this);
  }