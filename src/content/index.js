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
    while (right.length > 0) {
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

  getMoves(board, pieces) {
    let output = [];

    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );

    let v = [
      letterRow[letter] + numberRow[number - 2],
      letterRow[letter] + numberRow[number + 2],
    ];

    let h = [
      letterRow[letter - 2] + numberRow[number],
      letterRow[letter + 2] + numberRow[number],
    ];

    v.forEach((id) => {
      let number = parseInt(id.split("")[1]) - 1;
      let letter = letterRow.findIndex((element) => element == id.split("")[0]);
      let left = letterRow[letter - 1] + numberRow[number];
      let right = letterRow[letter + 1] + numberRow[number];
      output.push(left, right);
    });

    h.forEach((id) => {
      let number = parseInt(id.split("")[1]) - 1;
      let letter = letterRow.findIndex((element) => element == id.split("")[0]);
      let top = letterRow[letter] + numberRow[number - 1];
      let bottom = letterRow[letter] + numberRow[number + 1];
      output.push(top, bottom);
    });

    output = output.filter((spot) => {
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          return spot;
        }
      } else return spot;
    });

    highlight(board, output);
    return output;
  }

  hint(pieces) {
    let hints;
    let output = [];

    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );

    let v = [
      letterRow[letter] + numberRow[number - 2],
      letterRow[letter] + numberRow[number + 2],
    ];

    let h = [
      letterRow[letter - 2] + numberRow[number],
      letterRow[letter + 2] + numberRow[number],
    ];

    v.forEach((id) => {
      let number = parseInt(id.split("")[1]) - 1;
      let letter = letterRow.findIndex((element) => element == id.split("")[0]);
      let left = letterRow[letter - 1] + numberRow[number];
      let right = letterRow[letter + 1] + numberRow[number];
      output.push(left, right);
    });

    h.forEach((id) => {
      let number = parseInt(id.split("")[1]) - 1;
      let letter = letterRow.findIndex((element) => element == id.split("")[0]);
      let top = letterRow[letter] + numberRow[number - 1];
      let bottom = letterRow[letter] + numberRow[number + 1];
      output.push(top, bottom);
    });

    output = output.filter((spot) => {
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          return spot;
        }
      } else return spot;
    });
    hints = output;
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

  getMoves(board, pieces) {
    let output = [];
    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );

    let northEast = [],
      northWest = [],
      southEast = [],
      southWest = [];
    for (let i = 1; i < 8; i++) {
      let ne = letterRow[letter - i] + numberRow[number - i];
      let se = letterRow[letter - i] + numberRow[number + i];
      let nw = letterRow[letter + i] + numberRow[number - i];
      let sw = letterRow[letter + i] + numberRow[number + i];
      if (ne.length == 2)
        northEast.push(letterRow[letter - i] + numberRow[number - i]);
      if (se.length == 2)
        southEast.push(letterRow[letter - i] + numberRow[number + i]);
      if (nw.length == 2)
        northWest.push(letterRow[letter + i] + numberRow[number - i]);
      if (sw.length == 2)
        southWest.push(letterRow[letter + i] + numberRow[number + i]);
    }
    while (northEast.length > 0) {
      let spot = northEast[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        northEast.length = 0;
      } else {
        output.push(spot);
        northEast.shift();
      }
    }
    while (northWest.length > 0) {
      let spot = northWest[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        northWest.length = 0;
      } else {
        output.push(spot);
        northWest.shift();
      }
    }
    while (southEast.length > 0) {
      let spot = southEast[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        southEast.length = 0;
      } else {
        output.push(spot);
        southEast.shift();
      }
    }
    while (southWest.length > 0) {
      let spot = southWest[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        southWest.length = 0;
      } else {
        output.push(spot);
        southWest.shift();
      }
    }

    highlight(board, output);
    return output;
  }
  hint(pieces) {
    let hints;
    let output = [];
    let number = parseInt(this.id.split("")[1]) - 1;
    let letter = letterRow.findIndex(
      (element) => element == this.id.split("")[0]
    );

    let northEast = [],
      northWest = [],
      southEast = [],
      southWest = [];
    for (let i = 1; i < 8; i++) {
      let ne = letterRow[letter - i] + numberRow[number - i];
      let se = letterRow[letter - i] + numberRow[number + i];
      let nw = letterRow[letter + i] + numberRow[number - i];
      let sw = letterRow[letter + i] + numberRow[number + i];
      if (ne.length == 2)
        northEast.push(letterRow[letter - i] + numberRow[number - i]);
      if (se.length == 2)
        southEast.push(letterRow[letter - i] + numberRow[number + i]);
      if (nw.length == 2)
        northWest.push(letterRow[letter + i] + numberRow[number - i]);
      if (sw.length == 2)
        southWest.push(letterRow[letter + i] + numberRow[number + i]);
    }
    while (northEast.length > 0) {
      let spot = northEast[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        northEast.length = 0;
      } else {
        output.push(spot);
        northEast.shift();
      }
    }
    while (northWest.length > 0) {
      let spot = northWest[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        northWest.length = 0;
      } else {
        output.push(spot);
        northWest.shift();
      }
    }
    while (southEast.length > 0) {
      let spot = southEast[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        southEast.length = 0;
      } else {
        output.push(spot);
        southEast.shift();
      }
    }
    while (southWest.length > 0) {
      let spot = southWest[0];
      let piece = pieces.find((piece) => piece.id == spot);
      if (piece) {
        if (piece.color != this.color) {
          output.push(spot);
        }
        southWest.length = 0;
      } else {
        output.push(spot);
        southWest.shift();
      }
    }

    hints = output;

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

  getMoves(board, pieces) {
    console.log(board, pieces);
    let output = [];
    output.push("e5");
    highlight(board, output);
    return output;
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
