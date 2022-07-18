import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    pieceImages: {
      white_pawn: "./assets/img/WhitePawn.png",
      white_rook: "./assets/img/WhiteRook.png",
      white_knight: "./assets/img/WhiteKnight.png",
      white_bishop: "./assets/img/WhiteBishop.png",
      white_king: "./assets/img/WhiteKing.png",
      white_queen: "./assets/img/WhiteQueen.png",
      black_pawn: "./assets/img/BlackPawn.png",
      black_rook: "./assets/img/BlackRook.png",
      black_knight: "./assets/img/BlackKnight.png",
      black_bishop: "./assets/img/BlackBishop.png",
      black_king: "./assets/img/BlackKing.png",
      black_queen: "./assets/img/BlackQueen.png",
    },
    pieces: [
      {
        id: "a1",
        color: "black",
        img: "./assets/img/BlackQueen.png",
        name: "Queen",
      },
      {
        id: "b1",
        color: "black",
        img: "./assets/img/BlackKing.png",
        name: "King",
      },
      {
        id: "c1",
        color: "black",
        img: "./assets/img/BlackBishop.png",
        name: "Bishop",
      },
    ],
  }),
});
