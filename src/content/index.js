let numberRow = ["1", "2", "3", "4", "5", "6", "7", "8"];
let letterRow = ["a", "b", "c", "d", "e", "f", "g", "h"];

const highlight = (board, output) => {
  output.forEach((element) => {
    for (let key in board) {
      if (key == element) {
        let hint = document.createElement("div");
        hint.classList.add("hint");
        board[key].appendChild(hint);
      }
    }
  });
};

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
    highlight(board, output);
    return output;
  }

  hint(pieces) {
    let moves;
    let output = [];

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

    let hints = output;
    return hints;
  }
};

const Rook = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "Rook";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackRook.png";
    } else return "./assets/img/WhiteRook.png";
  }

  getMoves(board, pieces) {
    let output = [];
    let up = [],
      down = [],
      left = [],
      right = [];

    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );
    numberRow.forEach((element, index) => {
      if (number > index) up.push(letterRow[letter] + numberRow[index]);
      if (number < index) down.push(letterRow[letter] + numberRow[index]);
    });
    letterRow.forEach((element, index) => {
      if (letter > index) left.push(letterRow[index] + numberRow[number]);
      if (letter < index) right.push(letterRow[index] + numberRow[number]);
    });

    while (up.length > 0) {
      let spot = up[up.length - 1];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        up.length = 0;
      } else {
        output.push(spot);
        up.length--;
      }
    }
    while (down.length > 0) {
      let spot = down[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        down.length = 0;
      } else {
        output.push(spot);
        down.shift();
      }
    }
    while (left.length > 0) {
      let spot = left[left.length - 1];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        left.length = 0;
      } else {
        output.push(spot);
        left.length--;
      }
    }
    while (right.length) {
      let spot = right[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        right.length = 0;
      } else {
        output.push(spot);
        right.shift();
      }
    }
    console.log(output);
    highlight(board, output);
    return output;
  }

  hint(pieces) {
    let output = [];
    let up = [],
      down = [],
      left = [],
      right = [];

    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );
    numberRow.forEach((element, index) => {
      if (number > index) up.push(letterRow[letter] + numberRow[index]);
      if (number < index) down.push(letterRow[letter] + numberRow[index]);
    });
    letterRow.forEach((element, index) => {
      if (letter > index) left.push(letterRow[index] + numberRow[number]);
      if (letter < index) right.push(letterRow[index] + numberRow[number]);
    });

    while (up.length > 0) {
      let spot = up[up.length - 1];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        up.length = 0;
      } else {
        output.push(spot);
        up.length--;
      }
    }
    while (down.length > 0) {
      let spot = down[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        down.length = 0;
      } else {
        output.push(spot);
        down.shift();
      }
    }
    while (left.length > 0) {
      let spot = left[left.length - 1];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        left.length = 0;
      } else {
        output.push(spot);
        left.length--;
      }
    }
    while (right.length) {
      let spot = right[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        right.length = 0;
      } else {
        output.push(spot);
        right.shift();
      }
    }
    console.log(output);
    let hints = output;
    return hints;
  }
};

const Knight = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "Knight";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackKnight.png";
    } else return "./assets/img/WhiteKnight.png";
  }

  hint() {
    let hints = [this.id];
    return hints;
  }
};
const Bishop = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "Bishop";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackBishop.png";
    } else return "./assets/img/WhiteBishop.png";
  }

  hint() {
    let hints = [this.id];
    return hints;
  }
};
const Queen = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "Queen";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackQueen.png";
    } else return "./assets/img/WhiteQueen.png";
  }

  hint() {
    let hints = [this.id];
    return hints;
  }
};
const King = class {
  constructor(id, color) {
    this.id = id;
    this.color = color;
    this.img = this.getImage(color);
  }
  name = "King";
  getImage() {
    if (this.color == "black") {
      return "./assets/img/BlackKing.png";
    } else return "./assets/img/WhiteKing.png";
  }

  hint() {
    let hints = [this.id];
    return hints;
  }
};

export { Pawn, Rook, Knight, Bishop, Queen, King };
