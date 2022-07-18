<template>
  <div ref="app">
    <div class="chess-table">
      <div class="row">
        <div ref="a1" class="piece-box black-box">
          <span class="piece-box-text">a1</span>
        </div>
        <div ref="b1" class="piece-box white-box">
          <span class="piece-box-text">b1</span>
        </div>
        <div ref="c1" class="piece-box black-box">
          <span class="piece-box-text">c1</span>
        </div>
        <div ref="d1" class="piece-box white-box">
          <span class="piece-box-text">d1</span>
        </div>
        <div ref="e1" class="piece-box black-box">
          <span class="piece-box-text">e1</span>
        </div>
        <div ref="f1" class="piece-box white-box">
          <span class="piece-box-text">f1</span>
        </div>
        <div ref="g1" class="piece-box black-box">
          <span class="piece-box-text">g1</span>
        </div>
        <div ref="h1" class="piece-box white-box">
          <span class="piece-box-text">h1</span>
        </div>
      </div>
      <div class="row">
        <div ref="a2" class="piece-box white-box">
          <span class="piece-box-text">a2</span>
        </div>
        <div ref="b2" class="piece-box black-box">
          <span class="piece-box-text">b2</span>
        </div>
        <div ref="c2" class="piece-box white-box">
          <span class="piece-box-text">c2</span>
        </div>
        <div ref="d2" class="piece-box black-box">
          <span class="piece-box-text">d2</span>
        </div>
        <div ref="e2" class="piece-box white-box">
          <span class="piece-box-text">e2</span>
        </div>
        <div ref="f2" class="piece-box black-box">
          <span class="piece-box-text">f2</span>
        </div>
        <div ref="g2" class="piece-box white-box">
          <span class="piece-box-text">g2</span>
        </div>
        <div ref="h2" class="piece-box black-box">
          <span class="piece-box-text">h2</span>
        </div>
      </div>
      <div class="row">
        <div ref="a3" class="piece-box black-box">
          <span class="piece-box-text">a3</span>
        </div>
        <div ref="b3" class="piece-box white-box">
          <span class="piece-box-text">b3</span>
        </div>
        <div ref="c3" class="piece-box black-box">
          <span class="piece-box-text">c3</span>
        </div>
        <div ref="d3" class="piece-box white-box">
          <span class="piece-box-text">d3</span>
        </div>
        <div ref="e3" class="piece-box black-box">
          <span class="piece-box-text">e3</span>
        </div>
        <div ref="f3" class="piece-box white-box">
          <span class="piece-box-text">f3</span>
        </div>
        <div ref="g3" class="piece-box black-box">
          <span class="piece-box-text">g3</span>
        </div>
        <div ref="h3" class="piece-box white-box">
          <span class="piece-box-text">h3</span>
        </div>
      </div>
      <div class="row">
        <div ref="a4" class="piece-box white-box">
          <span class="piece-box-text">a4</span>
        </div>
        <div ref="b4" class="piece-box black-box">
          <span class="piece-box-text">b4</span>
        </div>
        <div ref="c4" class="piece-box white-box">
          <span class="piece-box-text">c4</span>
        </div>
        <div ref="d4" class="piece-box black-box">
          <span class="piece-box-text">d4</span>
        </div>
        <div ref="e4" class="piece-box white-box">
          <span class="piece-box-text">e4</span>
        </div>
        <div ref="f4" class="piece-box black-box">
          <span class="piece-box-text">f4</span>
        </div>
        <div ref="g4" class="piece-box white-box">
          <span class="piece-box-text">g4</span>
        </div>
        <div ref="h4" class="piece-box black-box">
          <span class="piece-box-text">h4</span>
        </div>
      </div>
      <div class="row">
        <div ref="a5" class="piece-box black-box">
          <span class="piece-box-text">a5</span>
        </div>
        <div ref="b5" class="piece-box white-box">
          <span class="piece-box-text">b5</span>
        </div>
        <div ref="c5" class="piece-box black-box">
          <span class="piece-box-text">c5</span>
        </div>
        <div ref="d5" class="piece-box white-box">
          <span class="piece-box-text">d5</span>
        </div>
        <div ref="e5" class="piece-box black-box">
          <span class="piece-box-text">e5</span>
        </div>
        <div ref="f5" class="piece-box white-box">
          <span class="piece-box-text">f5</span>
        </div>
        <div ref="g5" class="piece-box black-box">
          <span class="piece-box-text">g5</span>
        </div>
        <div ref="h5" class="piece-box white-box">
          <span class="piece-box-text">h5</span>
        </div>
      </div>
      <div class="row">
        <div ref="a6" class="piece-box white-box">
          <span class="piece-box-text">a6</span>
        </div>
        <div ref="b6" class="piece-box black-box">
          <span class="piece-box-text">b6</span>
        </div>
        <div ref="c6" class="piece-box white-box">
          <span class="piece-box-text">c6</span>
        </div>
        <div ref="d6" class="piece-box black-box">
          <span class="piece-box-text">d6</span>
        </div>
        <div ref="e6" class="piece-box white-box">
          <span class="piece-box-text">e6</span>
        </div>
        <div ref="f6" class="piece-box black-box">
          <span class="piece-box-text">f6</span>
        </div>
        <div ref="g6" class="piece-box white-box">
          <span class="piece-box-text">g6</span>
        </div>
        <div ref="h6" class="piece-box black-box">
          <span class="piece-box-text">h6</span>
        </div>
      </div>
      <div class="row">
        <div ref="a7" class="piece-box black-box">
          <span class="piece-box-text">a7</span>
        </div>
        <div ref="b7" class="piece-box white-box">
          <span class="piece-box-text">b7</span>
        </div>
        <div ref="c7" class="piece-box black-box">
          <span class="piece-box-text">c7</span>
        </div>
        <div ref="d7" class="piece-box white-box">
          <span class="piece-box-text">d7</span>
        </div>
        <div ref="e7" class="piece-box black-box">
          <span class="piece-box-text">e7</span>
        </div>
        <div ref="f7" class="piece-box white-box">
          <span class="piece-box-text">f7</span>
        </div>
        <div ref="g7" class="piece-box black-box">
          <span class="piece-box-text">g7</span>
        </div>
        <div ref="h7" class="piece-box white-box">
          <span class="piece-box-text">h7</span>
        </div>
      </div>
      <div class="row">
        <div ref="a8" class="piece-box white-box">
          <span class="piece-box-text">a8</span>
        </div>
        <div ref="b8" class="piece-box black-box">
          <span class="piece-box-text">b8</span>
        </div>
        <div ref="c8" class="piece-box white-box">
          <span class="piece-box-text">c8</span>
        </div>
        <div ref="d8" class="piece-box black-box">
          <span class="piece-box-text">d8</span>
        </div>
        <div ref="e8" class="piece-box white-box">
          <span class="piece-box-text">e8</span>
        </div>
        <div ref="f8" class="piece-box black-box">
          <span class="piece-box-text">f8</span>
        </div>
        <div ref="g8" class="piece-box white-box">
          <span class="piece-box-text">g8</span>
        </div>
        <div ref="h8" class="piece-box black-box">
          <span class="piece-box-text">h8</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "./store";
import { mapStores } from "pinia";
export default {
  name: "App",
  methods: {
    assignPieces(pieces) {
      let board = this.getBoard();
      pieces.forEach((element) => {
        let img = document.createElement("img");
        img.src = element.img;
        img.width = "30";
        let div = board[element.id];
        div.appendChild(img);
      });
    },
    getBoard() {
      let board = {};
      let refs = this.$refs;
      let result = Object.keys(refs).map((key) => [key, refs[key]]);
      result = result.filter((element) => element[0] != "app");
      result.forEach((element) => (board[element[0]] = element[1]));
      return board;
    },
  },
  computed: {
    ...mapStores(useStore),
  },
  mounted() {
    console.log(this.$refs);
    console.log(this.mainStore.pieces);
    let pieces = this.mainStore.pieces;
    this.assignPieces(pieces);
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");

* {
  user-select: none;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #312e2b;
  margin: 0;
  padding: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease;
}

/** ####################################### */

.chess-table {
  height: 400px;
  width: 400px;
  /* display: flex; */
}
.piece-box {
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.piece {
  width: 40px;
  height: 45px;
}
.piece-box-text {
  /* display: none; */
  position: absolute;
  bottom: 1px;
  right: 2px;
  font-size: 8px;
  opacity: 0.7;
  font-family: Arial;
}
.black-box .piece-box-text {
  color: #eeeed2;
}
.white-box .piece-box-text {
  color: #769656;
}

/** ####################################### */

.piece-box.white-box {
  background: #eeeed2;
}
.piece-box.black-box {
  background: #769656;
}
.piece-box.piece-selected {
  background: #f6f669;
  cursor: pointer;
}
.piece-box.piece-ready {
  background: greenyellow;
}
.piece-box.piece-potential {
  background: lightskyblue;
  border: 0.1px solid rgb(24, 155, 236);
}
.piece-box.piece-not-allowed {
  background: coral;
}
.piece-box.piece-pointer {
  cursor: pointer;
}

/** #################################### */

.chess-message .check-mate-message {
  position: absolute;
  width: 200px;
  left: calc(-142px + 50vw);
  top: calc(-10px + 50vh);
  text-align: center;
  padding: 10px 50px;
}
.chess-message .black-wins {
  display: none;
  background: black;
  color: white;
  box-shadow: 0 0 150px 75px white;
}
.chess-message .white-wins {
  display: none;
  background: white;
  color: black;
  box-shadow: 0 0 150px 75px black;
}

/** #################################### */

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .chess-table {
    height: 240px;
    width: 240px;
  }
  .piece-box {
    width: 30px;
    height: 30px;
  }
  img.piece {
    width: 25px;
    height: 25px;
  }
  .chess-message .check-mate-message {
    width: 150px;
    top: calc(-15px + 50vh);
    left: calc(-85px + 50vw);
    font-size: 12px;
    padding: 10px;
  }
}

@media only screen and (min-device-width: 560px) and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    padding: 50px 0;
  }
  .chess-message .check-mate-message {
    width: 175px;
    top: calc(35px + 50vh);
    left: calc(-127.5px + 50vw);
    font-size: 14px;
    padding: 10px 40px;
  }
}
</style>
