const game = document.getElementsByClassName("field");
const gameArray = Array.from(game);

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
   

const hitShip = shipsList.find((element)=>{
    return element.id === clickedFieldRespond.id;
});
   console.log(hitShip);
//    console.log(foundShip.ship);


}
