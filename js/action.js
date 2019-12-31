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



function action(row, column){
    const clickedField =  {row, column};

   const clickedFieldRespond = view.findClickedFieldOnList(clickedField);

console.log(clickedFieldRespond.id);
   
//    console.log(foundShip);
//    console.log(foundShip.ship)
}
