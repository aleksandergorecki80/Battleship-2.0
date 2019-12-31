console.log('shipFields.length', shipFields.length);
console.log('this.boardFieldsTaken length', this.boardFieldsTaken.length);
console.log('i = ', i,  'k = ', k);
console.log(shipFields[i].row , this.boardFieldsTaken[k].row);
console.log(shipFields[i].column , this.boardFieldsTaken[k].column);
if (
  shipFields[i].row === this.boardFieldsTaken[k].row &&
  shipFields[i].column === this.boardFieldsTaken[k].column ) {
  console.log("zgadzasie");
  
  console.log(shipFields[i].row , this.boardFieldsTaken[k].row);
  console.log(shipFields[i].column , this.boardFieldsTaken[k].column);

  return true;
} else {
  return false;
}