//    -----     Board object   ----

const view = {
    boardFieldsTaken: [],
    surroundings: [],
    
  
    getBoardFieldsTaken: function() {
      return this.boardFieldsTaken;
    },
       
    searchForFields: function(shipFields) {
      for (let i = 0; i < shipFields.length; i++) {
        for (let k = 0; k < this.boardFieldsTaken.length; k++) {
          if (
            shipFields[i].row === this.boardFieldsTaken[k].row &&
            shipFields[i].column === this.boardFieldsTaken[k].column
          ) {
            // console.log("zgadzasie");
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
  
  
    //  surrounding section
  
    addSurroundings: function(fields) {
      return fields.map(field => {
        let newArray = [
          { row: field.row, column: field.column + 1 },
          { row: field.row + 1, column: field.column + 1 },
          { row: field.row + 1, column: field.column },
          { row: field.row + 1, column: field.column - 1 },
          { row: field.row, column: field.column - 1 },
          { row: field.row - 1, column: field.column - 1 },
          { row: field.row - 1, column: field.column },
          { row: field.row - 1, column: field.column + 1 }
        ];
        return newArray;
      });
    },
  
    pushAllSurroundingsToOneArray: function(shipSurroundings){
      shipSurroundings.forEach(element1 => {
        element1.forEach(element => {
          this.surroundings.push(element);
        });
      });
    },
  
    pushOneOccurrenceOfFieldToSurroundings: function(arr) {
      for (i = 0; i < arr.length; i++) {
        let foundOnTakenList = this.boardFieldsTaken.find(element => {
          return (element.row === arr[i].row && element.column === arr[i].column) 
                  || (arr[i].row<0 || arr[i].column<0)
                  || (arr[i].row>9 || arr[i].column>9);
        });
        if (!foundOnTakenList) {
          this.boardFieldsTaken.push(arr[i]);
        }
      }
    },
  
    getSurroundings: function(){
      return this.surroundings;
    },
  
    markFieldsAsTaken: function(object) {
      console.log(object);
    },
  
    displayMessage: function(li) {
      const ul = document.getElementById('gameLog');
      ul.appendChild(li);
    },
    displayHit: function(location) {
      const cell = document.getElementById(`${location.row}-${location.column}`);
      cell.classList.add("hit");
    },
    displayMiss: function(location) {
      const cell = document.getElementById(`${location.row}-${location.column}`);
      // cell.classList.add("splash");
      // setTimeout(function(){
      //   cell.classList.remove("splash");
        
      // }, 2000);
      cell.classList.add("miss");
    },

    displaySunk: function(locations){
      locations.forEach((location)=>{
        const cell = document.getElementById(`${location.row}-${location.column}`);
        cell.setAttribute("class", "gone");
      });
    },

    displayBubble: function(message, positionX, positionY){
      const bubble = document.getElementById('bubble');
      bubble.classList.remove('hidden');
      bubble.style.left = `${positionX}px`;
      bubble.style.top = `${positionY}px`;
      bubble.innerText = message;
    setTimeout(()=>{
      bubble.classList.add('hidden');
    }, 2000)      
    },

    blockTheField: function(location){
      const fieldToBlock = document.getElementById(`${location.row}-${location.column}`);
      fieldToBlock.classList.add("blocked");
    }
  };
  