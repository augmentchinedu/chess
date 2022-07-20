const Pawn = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
  }
  name = "Pawn";
  img = "./assets/img/BlackPawn.png";
  move() {
    console.log("Piece Moved");
  }
};

console.log(Pawn);

let pieces = [];
const getPieces = () => {
  pieces.push(new Pawn("4", "black"));
};
getPieces();
pieces[0].move();
console.log(pieces[0].move());

export  { Pawn, pieces };
