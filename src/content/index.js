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

  highlight(board, pieces) {
    let output = [];
    let numberRow = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let letterRow = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let alphabet = this.id.split("")[0];
    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex((element) => element == alphabet);
    let moves;
    if (number == 1 || number == 6) moves = 2;
    else moves = 1;

    console.log(board);
    console.log(this.id);
    console.log(number);
    console.log(moves);

    for (let i = 0; i <= moves; i++) {
      if (this.color == "white") {
        number = number + moves;
        let spot = letterRow[letter] + numberRow[number];
        if (pieces.find((piece) => piece.id == spot)) output = [];
        else output.push(spot)
        number = number - moves;
        if (moves == 1) {
          let left = letter - 1;
          let right = letter + 1;
          left = letterRow[left] + numberRow[number + moves];
          right = letterRow[right] + numberRow[number + moves];
          left = pieces.find((piece) => piece.id == left);
          right = pieces.find((piece) => piece.id == right);
          console.log(right, left);
          if (right && right.color != this.color) output.push(right.id);
          if (left && left.color != this.color) output.push(left.id);
          console.log("checked adjacent rows");
        }
      }
      if (this.color == "black") {
        number = number - moves;
        let spot = letterRow[letter] + numberRow[number];
        output.push(spot);
        number = number + moves;
      }
      moves--;
    }
    console.log(output);
  }
};

export { Pawn };
