import { defineStore } from "pinia";
import { Pawn } from "../content";

export const useStore = defineStore("main", {
  state: () => ({
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
      new Pawn("a6", "black"),
      new Pawn("b7", "black"),
      new Pawn("c7", "black"),
      new Pawn("d7", "black"),
      new Pawn("e7", "black"),
      new Pawn("f3", "black"),
      new Pawn("g7", "black"),
      new Pawn("h7", "black"),
      new Pawn("a2", "white"),
      new Pawn("b6", "white"),
      new Pawn("c2", "white"),
      new Pawn("d2", "white"),
      new Pawn("e2", "white"),
      new Pawn("f2", "white"),
      new Pawn("g2", "white"),
      new Pawn("h3", "white"),
    ],
    white: { isCheckMate: false },
    black: { isCheckMate: false },
    inPlay: false,
    hints: [],
    activePiece: null,
  }),
  actions: {
    act(id) {
      console.log(this.activePiece, id);
      let result = this.hints.find((h) => h == id);
      if (result != undefined) this.drop(id);
      let color = this.getColor(id);
      if (this.player == color) {
        if (this[this.player].isCheckMate == false) {
          this.updateBoard();
          if (this.activePiece != id) {
            this.lift(id);
          } else {
            this.activePiece = null;
          }
        } else {
          let piece = this.pieces.find(
            (piece) => piece.name == "King" && piece.id == id
          );
          if (piece) this.lift(id);
        }
      }
    },
    drop(id) {
      let piece = this.pieces.find((piece) => piece.id == this.activePiece);
      console.log(piece.id + "to", id);
      piece.move(this.board, id);
      let pieceToDelete = this.pieces.find((piece) => piece.id == id);
      if (pieceToDelete) {
        console.log("delete piece", pieceToDelete);
        let index = this.pieces.findIndex(
          (piece) => piece.id == pieceToDelete.id
        );
        console.log(index + " name");
        this.pieces=this.pieces.splice(index);
        console.log(this.pieces);
        this.updateBoard()
      } else {
        console.log("spot is not empty");
      }
    },
    lift(id) {
      let piece = this.pieces.find((piece) => piece.id === id);
      this.hints = piece.getMoves(this.board, this.pieces);
      this.activePiece = id;
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
          let children = element.childNodes.length;
          for (let i = children; i > 0; i--) {
            if (i != 1) element.removeChild(element.childNodes[i - 1]);
          }
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
