import { defineStore } from "pinia";
import { Pawn, Rook, Knight, Bishop, Queen, King } from "../content";
export const useStore = defineStore("main", {
  state: () => ({
    player: "black",
    board: {},
    pieces: [
      new Rook("a1", "white"),
      new Rook("h1", "white"),
      new Rook("a8", "black"),
      new Rook("h8", "black"),
      new Knight("b8", "black"),
      new Knight("g8", "black"),
      new Knight("b1", "white"),
      new Knight("g1", "white"),
      new Bishop("c8", "black"),
      new Bishop("f8", "black"),
      new Bishop("c1", "white"),
      new Bishop("f1", "white"),
      new Queen("d8", "black"),
      new Queen("d1", "white"),
      new King("e8", "black"),
      new King("e1", "white"),
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
    selected: false,
  }),
  actions: {
    act(id) {
      let color = this.getColor(id);
      if (this.player == color) {
        if (this[color].isCheckMate) this.hintKing(id);
        else this.hint(id);
      } else {
        let spot;
        console.log(this.hints);
        if (this.hints) spot = this.hints.find((h) => h == id);
        if (spot != undefined) this.shift(id);
        else console.log("Empty Spot");
      }
    },
    hint(id) {
      this.updateBoard();
      let piece = this.pieces.find((piece) => piece.id === id);
      this.hints = piece.getMoves(this.board, this.pieces);
      this.activePiece = id;
    },
    shift (to) {
      let pieceToDelete = this.pieces.find((piece) => piece.id == to);
      if (pieceToDelete) {
        let pieceToDeleteIndex = this.pieces.findIndex(
          (piece) => piece.id == pieceToDelete.id
        );
        this.pieces = this.pieces.filter(
          (el, ind) => pieceToDeleteIndex != ind
        );
      }
      let piece = this.pieces.find((piece) => piece.id == this.activePiece);
      piece.id = to;
      this.hints = null;
      this.switchPlayer();
      this.updateBoard();
    },
    hintKing(id) {
      console.log("Only King Can Hint");
      let piece = this.pieces.find(
        (piece) => piece.name == "King" && piece.id == id
      );
      if (piece) this.lift(id);
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
    switchPlayer() {
      if (this.player == "white") this.player = "black";
      else if (this.player == "black") this.player = "white";
      this.checkMate(this.player);
    },
    checkMate(color) {
      let hints = [];
      let king = this.pieces.find(
        (piece) => piece.name === "King" && piece.color === color
      );
      this.pieces.forEach((piece) => {
        if (piece.color != color) hints.push(...piece.hint(this.pieces));
      });
      let check = hints.find((hint) => {
        if (hint == king.id) return hint;
      });
      if (check) this[color].isCheckMate = true;
      else this[color].isCheckMate = false;
    },
  },
});
