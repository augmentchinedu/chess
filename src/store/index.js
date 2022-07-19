import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    board: {},
    pieces: [
      {
        id: "a8",
        color: "black",
        img: "./assets/img/BlackRook.png",
        name: "Rook",
      },
      {
        id: "b8",
        color: "black",
        img: "./assets/img/BlackKnight.png",
        name: "Knight",
      },
      {
        id: "c8",
        color: "black",
        img: "./assets/img/BlackBishop.png",
        name: "Bishop",
      },
      {
        id: "d8",
        color: "black",
        img: "./assets/img/BlackQueen.png",
        name: "Queen",
      },
      {
        id: "e8",
        color: "black",
        img: "./assets/img/BlackKing.png",
        name: "King",
      },
      {
        id: "f8",
        color: "black",
        img: "./assets/img/BlackBishop.png",
        name: "Bishop",
      },
      {
        id: "g8",
        color: "black",
        img: "./assets/img/BlackKnight.png",
        name: "Knight",
      },
      {
        id: "h8",
        color: "black",
        img: "./assets/img/BlackRook.png",
        name: "Rook",
      },
      {
        id: "a1",
        color: "white",
        img: "./assets/img/WhiteRook.png",
        name: "Rook",
      },
      {
        id: "b1",
        color: "white",
        img: "./assets/img/WhiteKnight.png",
        name: "Knight",
      },
      {
        id: "c1",
        color: "white",
        img: "./assets/img/WhiteBishop.png",
        name: "Bishop",
      },
      {
        id: "d1",
        color: "white",
        img: "./assets/img/WhiteQueen.png",
        name: "Queen",
      },
      {
        id: "e1",
        color: "white",
        img: "./assets/img/WhiteKing.png",
        name: "King",
      },
      {
        id: "f1",
        color: "white",
        img: "./assets/img/WhiteBishop.png",
        name: "Bishop",
      },
      {
        id: "g1",
        color: "white",
        img: "./assets/img/WhiteKnight.png",
        name: "Knight",
      },
      {
        id: "h1",
        color: "white",
        img: "./assets/img/WhiteRook.png",
        name: "Rook",
      },
      {
        id: "a7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "b7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "c7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "d7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "e7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "f7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "g7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "h7",
        color: "black",
        img: "./assets/img/BlackPawn.png",
        name: "Pawn",
      },
      {
        id: "a2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "b2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "c2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "d2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "e2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "f2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "g2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
      {
        id: "h2",
        color: "white",
        img: "./assets/img/WhitePawn.png",
        name: "Pawn",
      },
    ],
  }),
  actions: {
    select(id) {
      let board = this.board;
      let pieces = [];
      if (this.player == "white") {
        this.pieces.forEach((element) => {
          if (element.color == "white") pieces.push(element.id);
        });
        let piece = pieces.find((element) => element == id);
        if (piece) board[id].classList.add("moveover", "cursor");
      } else {
        this.pieces.forEach((element) => {
          if (element.color == "black") pieces.push(element.id);
        });
        let piece = pieces.find((element) => element == id);
        if (piece) board[id].classList.add("moveover", "cursor");
      }
    },
    deselect(id) {
      let board = this.board;
      board[id].classList.remove("moveover");
    },

    updateBoard() {
      let board = this.board;
      for (let key in board) {
        let element = board[key];
        if (element.childNodes.length > 1) {
          element.removeChild(element.childNodes[1]);
        }
      }
      this.pieces.forEach((element) => {
        let img = document.createElement("img");
        img.src = element.img;
        img.width = "30";
        let div = this.board[element.id];
        div.appendChild(img);
      });
    },
    createBoard(refs) {
      let result = Object.keys(refs).map((key) => [key, refs[key]]);
      result = result.filter((element) => element[0] != "app");
      result.forEach((element) => (this.board[element[0]] = element[1]));
    },
  },
});
