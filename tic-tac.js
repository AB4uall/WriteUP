//alert("Its working")

//Restart game
var turn=1;
var Restart= document.querySelector("#b");
Restart.addEventListener('click',clear);


//grab all squares
var squares=document.querySelectorAll('td');


//clear all squares
function clear() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';}
    turn=1;
  }


//check the square marker
function marking() {
  if(turn==1){

    if(this.textContent==='X'){
      this.textContent=='X'
      turn=1;
    }
    if(this.textContent==='O'){
      this.textContent=='O'
      turn=1;}
    if(this.textContent===''){
      this.textContent='X';
      turn=2;
    }
  }
  if(turn===2){
    if(this.textContent==='X'){
      this.textContent=='X'
      turn=2;
    }
    if(this.textContent==='O'){
      this.textContent=='O'
      turn=2;}
    if(this.textContent===''){
      this.textContent='O';
      turn=1;}
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',marking);

}

