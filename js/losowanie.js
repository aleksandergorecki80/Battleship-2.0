// const obj =[{
//     id: 1,
//    name: 'kki'
//  }];
 
 
//  const obj2 = [...obj, {id2: 'jjk'}];
 
//  console.log(obj2);

const obj = {
    ship: []
}

function addData(){
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 3);
    const result = [...obj.ship, {id: 0, row, col}];
    return result;
    // return ship.push({id: 0, row, col});
    
}

function addField(){
    return [...obj.ship, {id:2, kki: 'kki'}];
}


obj.ship = addField();
console.log('ship = ', obj.ship);
obj.ship = addData();
console.log('ship = ', obj.ship);
// console.log('ship3 = ', ship3);



// na dole dziala

// console.log('Start', row, col);

// // 0 prawo 1 duł 2 lewo 3 góra
function choseDirection(){
    return Math.floor(Math.random() * 4);
}


// // check if posible
function checkMove (move){
    switch (move) {
        case 0:
          return obj.ship.col + 1 < 3;
          break;
        case 1:
          return obj.ship.row + 1 < 3;
          break;
        case 2:
          return obj.ship.col - 1 >= 0;
          break;
        case 3:
          return obj.ship.row - 1 >= 0;
          break;
      }
}

// function dodawanie(move){
    
//     return move+row;
// }
// for(let i=0; i<4; i++){

//     let isPosible = false;
//     while (!isPosible) {
    
//         let move = choseDirection();
//         console.log('move is', move)
//         isPosible = checkMove(move);
    
    
//         console.log('funkcja dodawanie', dodawanie(move));
//     }
// }

