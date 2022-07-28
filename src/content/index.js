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

  getMoves(board, pieces) {
    let moves;
    let output = [];
    let numberRow = ["1", "2", "3", "4", "5", "6", "7", "8"];
    let letterRow = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );
    if (number == 1 || number == 6) moves = 2;
    else moves = 1;
    for (let i = 0; i <= moves; i++) {
      let left = letter - 1,
        right = letter + 1,
        spot;
      if (this.color == "white") {
        number = number + moves;
        spot = letterRow[letter] + numberRow[number];
        number = number - moves;
        if (moves == 1) {
          left = letterRow[left] + numberRow[number + 1];
          right = letterRow[right] + numberRow[number + 1];
        }
      }
      if (this.color == "black") {
        number = number - moves;
        spot = letterRow[letter] + numberRow[number];
        number = number + moves;
        if (moves == 1) {
          left = letterRow[left] + numberRow[number - moves];
          right = letterRow[right] + numberRow[number - moves];
        }
      }
      if (pieces.find((piece) => piece.id == spot)) output = [];
      else output.push(spot);
      left = pieces.find((piece) => piece.id == left);
      right = pieces.find((piece) => piece.id == right);
      if (right && right.color != this.color) output.push(right.id);
      if (left && left.color != this.color) output.push(left.id);
      moves--;
    }
    // console.log(output);
    this.highlight(board, output);
    return output;
  }
  highlight(board, output) {
    output.forEach((element) => {
      for (let key in board) {
        if (key == element) {
          console.log(board[key]);
          let hint = document.createElement("div");
          hint.classList.add("hint");
          board[key].appendChild(hint);
        }
      }
    });
  }
  move(board, to) {
    this.id = to;
  }
};

export { Pawn };
