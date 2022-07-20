import { defineStore } from "pinia";
import { Pawn, pieces } from "../content";

export const useStore = defineStore("main", {
  state: () => ({
    Pieces: pieces,
    player: "black",
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

      new Pawn("a7", "black"),
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
    white: { isCheckMate: false },
    black: { isCheckMate: false },
    inPlay: false,
  }),
  actions: {
    act(id) {
      console.log(id);
      let color = this.getColor(id);
      if (this.player == color) {
        if (!this.inPlay) {
          if (this[this.player].isCheckMate == false) {
            this.lift(id);
          } else {
            let piece = this.pieces.find(
              (piece) => piece.name == "King" && piece.id == id
            );
            if (piece) this.lift(id);
          }
        } else this.drop(id);
      }
    },
    lift(id) {
      let piece = this.pieces.find((piece) => piece.id === id);
      console.log(piece.name, "lifted");
    },
    getColor(id) {
      let piece = this.pieces.find((piece) => piece.id === id);
      if (piece == undefined) return null;
      else return piece.color;
    },
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
      this.board[id].classList.remove("moveover");
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
      console.log(this.Pieces);
      let result = Object.keys(refs).map((key) => [key, refs[key]]);
      result = result.filter((element) => element[0] != "app");
      result.forEach((element) => (this.board[element[0]] = element[1]));
    },
  },
});
