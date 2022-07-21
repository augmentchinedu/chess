const Pawn = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "Pawn";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackPawn.png";
    } else return "./assets/img/WhitePawn.png";
  }

  highlight(board) {
    let output = [];
    let numberRow = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let letterRow = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let number = parseInt(this.id.split("")[1]) - 1;
    let alphabet = this.id.split("")[0];
    let letter = letterRow.findIndex((element) => element == alphabet);
    let moves;
    if (number == 1 || number == 6) moves = 2;
    else moves = 1;

    console.log(board);
    console.log(this.id);
    console.log(moves);
    console.log(letter);

    for (let i = 0; i < moves; i++) {
      if (this.color == "white") {
        number++;
        let spot = letterRow[letter] + numberRow[number];
        output.push(spot);
      }
      if (this.color == "black") {
        number--;
        let spot = letterRow[letter] + numberRow[number];
        output.push(spot);
      }
    }
    console.log(output);
  }
};

export { Pawn };
