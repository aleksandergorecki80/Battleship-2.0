const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

// for (let i = 0; i < gameArray.length; i++) {
//   const shotField = document.getElementById(i);
//   shotField.addEventListener("click", () => {
//     ship.checkIfHit(shotField.id);
//   });
// }

// console.log(game);
console.log(gameArray);
console.log(gameArray.length);


for (let row = 0; row < 10; row++) {
for(let column = 0; column<10; column++){
    
    document.getElementById(`${row}-${column}`).addEventListener('click',()=>{
        action(row, column)
    });
}
}

// const shipsIdentification = [
//     quadrupleShipIdZero,
//     'tripleShipIdOne', 
//     tripleShipIdTwo,
//     doubleShipIdThree,
//     doubleShipIdFour,
//     doubleShipIdFive,
//     singleShipIdSix,
//     singleShipIdSeven,
//     singleShipIdEight,
//     'singleShipIdNine',
// ];

function action(row, column){
    const clickedField =  {row, column};

   const clickedFieldRespond = view.findClickedFieldOnList(clickedField);

// console.log(clickedFieldRespond.id);


   const foundShip = shipsIdentification[clickedFieldRespond.id];
//    console.log(foundShip);
//    console.log(foundShip.ship)
}


function getGlobalProperties(prefix) {
    var keyValues = [], global = window; // window for browser environments
    for (var prop in global) {
      if (prop.indexOf(prefix) == 0) // check the prefix
        keyValues.push(prop + "=" + global[prop]);
    }
    return keyValues.join('&'); // build the string
  }
  
  
//   var xxx_foo = "foo";
//   xxx_bar = "bar";
//   window.xxx_baz = "baz";
  
  var test = getGlobalProperties('Ship');

  console.log(test)