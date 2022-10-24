<template>
  <div class="chess-table">
    <div class="row">
      <div
        ref="a1"
        class="piece-box black-box"
        @click="act('a1')"
        @mouseover="select('a1')"
        @mouseleave="deselect('a1')"
      >
        <span class="piece-box-text">a1</span>
      </div>
      <div
        ref="b1"
        class="piece-box white-box"
        @click="act('b1')"
        @mouseleave="deselect('b1')"
        @mouseover="select('b1')"
      >
        <span class="piece-box-text">b1</span>
      </div>
      <div
        ref="c1"
        class="piece-box black-box"
        @click="act('c1')"
        @mouseleave="deselect('c1')"
        @mouseover="select('c1')"
      >
        <span class="piece-box-text">c1</span>
      </div>
      <div
        ref="d1"
        class="piece-box white-box"
        @click="act('d1')"
        @mouseleave="deselect('d1')"
        @mouseover="select('d1')"
      >
        <span class="piece-box-text">d1</span>
      </div>
      <div
        ref="e1"
        class="piece-box black-box"
        @click="act('e1')"
        @mouseleave="deselect('e1')"
        @mouseover="select('e1')"
      >
        <span class="piece-box-text">e1</span>
      </div>
      <div
        ref="f1"
        class="piece-box white-box"
        @click="act('f1')"
        @mouseleave="deselect('f1')"
        @mouseover="select('f1')"
      >
        <span class="piece-box-text">f1</span>
      </div>
      <div
        ref="g1"
        class="piece-box black-box"
        @click="act('g1')"
        @mouseleave="deselect('g1')"
        @mouseover="select('g1')"
      >
        <span class="piece-box-text">g1</span>
      </div>
      <div
        ref="h1"
        class="piece-box white-box"
        @click="act('h1')"
        @mouseleave="deselect('h1')"
        @mouseover="select('h1')"
      >
        <span class="piece-box-text">h1</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a2"
        class="piece-box white-box"
        @click="act('a2')"
        @mouseleave="deselect('a2')"
        @mouseover="select('a2')"
      >
        <span class="piece-box-text">a2</span>
      </div>
      <div
        ref="b2"
        class="piece-box black-box"
        @click="act('b2')"
        @mouseleave="deselect('b2')"
        @mouseover="select('b2')"
      >
        <span class="piece-box-text">b2</span>
      </div>
      <div
        ref="c2"
        class="piece-box white-box"
        @click="act('c2')"
        @mouseleave="deselect('c2')"
        @mouseover="select('c2')"
      >
        <span class="piece-box-text">c2</span>
      </div>
      <div
        ref="d2"
        class="piece-box black-box"
        @click="act('d2')"
        @mouseleave="deselect('d2')"
        @mouseover="select('d2')"
      >
        <span class="piece-box-text">d2</span>
      </div>
      <div
        ref="e2"
        class="piece-box white-box"
        @click="act('e2')"
        @mouseleave="deselect('e2')"
        @mouseover="select('e2')"
      >
        <span class="piece-box-text">e2</span>
      </div>
      <div
        ref="f2"
        class="piece-box black-box"
        @click="act('f2')"
        @mouseleave="deselect('f2')"
        @mouseover="select('f2')"
      >
        <span class="piece-box-text">f2</span>
      </div>
      <div
        ref="g2"
        class="piece-box white-box"
        @click="act('g2')"
        @mouseleave="deselect('g2')"
        @mouseover="select('g2')"
      >
        <span class="piece-box-text">g2</span>
      </div>
      <div
        ref="h2"
        class="piece-box black-box"
        @click="act('h2')"
        @mouseleave="deselect('h2')"
        @mouseover="select('h2')"
      >
        <span class="piece-box-text">h2</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a3"
        class="piece-box black-box"
        @click="act('a3')"
        @mouseleave="deselect('a3')"
        @mouseover="select('a3')"
      >
        <span class="piece-box-text">a3</span>
      </div>
      <div
        ref="b3"
        class="piece-box white-box"
        @click="act('b3')"
        @mouseleave="deselect('b3')"
        @mouseover="select('b3')"
      >
        <span class="piece-box-text">b3</span>
      </div>
      <div
        ref="c3"
        class="piece-box black-box"
        @click="act('c3')"
        @mouseleave="deselect('c3')"
        @mouseover="select('c3')"
      >
        <span class="piece-box-text">c3</span>
      </div>
      <div
        ref="d3"
        class="piece-box white-box"
        @click="act('d3')"
        @mouseleave="deselect('d3')"
        @mouseover="select('d3')"
      >
        <span class="piece-box-text">d3</span>
      </div>
      <div
        ref="e3"
        class="piece-box black-box"
        @click="act('e3')"
        @mouseleave="deselect('e3')"
        @mouseover="select('e3')"
      >
        <span class="piece-box-text">e3</span>
      </div>
      <div
        ref="f3"
        class="piece-box white-box"
        @click="act('f3')"
        @mouseleave="deselect('f3')"
        @mouseover="select('f3')"
      >
        <span class="piece-box-text">f3</span>
      </div>
      <div
        ref="g3"
        class="piece-box black-box"
        @click="act('g3')"
        @mouseleave="deselect('g3')"
        @mouseover="select('g3')"
      >
        <span class="piece-box-text">g3</span>
      </div>
      <div
        ref="h3"
        class="piece-box white-box"
        @click="act('h3')"
        @mouseleave="deselect('h3')"
        @mouseover="select('h3')"
      >
        <span class="piece-box-text">h3</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a4"
        class="piece-box white-box"
        @click="act('a4')"
        @mouseleave="deselect('a4')"
        @mouseover="select('a4')"
      >
        <span class="piece-box-text">a4</span>
      </div>
      <div
        ref="b4"
        class="piece-box black-box"
        @click="act('b4')"
        @mouseleave="deselect('b4')"
        @mouseover="select('b4')"
      >
        <span class="piece-box-text">b4</span>
      </div>
      <div
        ref="c4"
        class="piece-box white-box"
        @click="act('c4')"
        @mouseleave="deselect('c4')"
        @mouseover="select('c4')"
      >
        <span class="piece-box-text">c4</span>
      </div>
      <div
        ref="d4"
        class="piece-box black-box"
        @click="act('d4')"
        @mouseleave="deselect('d4')"
        @mouseover="select('d4')"
      >
        <span class="piece-box-text">d4</span>
      </div>
      <div
        ref="e4"
        class="piece-box white-box"
        @click="act('e4')"
        @mouseleave="deselect('e4')"
        @mouseover="select('e4')"
      >
        <span class="piece-box-text">e4</span>
      </div>
      <div
        ref="f4"
        class="piece-box black-box"
        @click="act('f4')"
        @mouseleave="deselect('f4')"
        @mouseover="select('f4')"
      >
        <span class="piece-box-text">f4</span>
      </div>
      <div
        ref="g4"
        class="piece-box white-box"
        @click="act('g4')"
        @mouseleave="deselect('g4')"
        @mouseover="select('g4')"
      >
        <span class="piece-box-text">g4</span>
      </div>
      <div
        ref="h4"
        class="piece-box black-box"
        @click="act('h4')"
        @mouseleave="deselect('h4')"
        @mouseover="select('h4')"
      >
        <span class="piece-box-text">h4</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a5"
        class="piece-box black-box"
        @click="act('a5')"
        @mouseleave="deselect('a5')"
        @mouseover="select('a5')"
      >
        <span class="piece-box-text">a5</span>
      </div>
      <div
        ref="b5"
        class="piece-box white-box"
        @click="act('b5')"
        @mouseleave="deselect('b5')"
        @mouseover="select('b5')"
      >
        <span class="piece-box-text">b5</span>
      </div>
      <div
        ref="c5"
        class="piece-box black-box"
        @click="act('c5')"
        @mouseleave="deselect('c5')"
        @mouseover="select('c5')"
      >
        <span class="piece-box-text">c5</span>
      </div>
      <div
        ref="d5"
        class="piece-box white-box"
        @click="act('d5')"
        @mouseleave="deselect('d5')"
        @mouseover="select('d5')"
      >
        <span class="piece-box-text">d5</span>
      </div>
      <div
        ref="e5"
        class="piece-box black-box"
        @click="act('e5')"
        @mouseleave="deselect('e5')"
        @mouseover="select('e5')"
      >
        <span class="piece-box-text">e5</span>
      </div>
      <div
        ref="f5"
        class="piece-box white-box"
        @click="act('f5')"
        @mouseleave="deselect('f5')"
        @mouseover="select('f5')"
      >
        <span class="piece-box-text">f5</span>
      </div>
      <div
        ref="g5"
        class="piece-box black-box"
        @click="act('g5')"
        @mouseleave="deselect('g5')"
        @mouseover="select('g5')"
      >
        <span class="piece-box-text">g5</span>
      </div>
      <div
        ref="h5"
        class="piece-box white-box"
        @click="act('h5')"
        @mouseleave="deselect('h5')"
        @mouseover="select('h5')"
      >
        <span class="piece-box-text">h5</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a6"
        class="piece-box white-box"
        @click="act('a6')"
        @mouseleave="deselect('a6')"
        @mouseover="select('a6')"
      >
        <span class="piece-box-text">a6</span>
      </div>
      <div
        ref="b6"
        class="piece-box black-box"
        @click="act('b6')"
        @mouseleave="deselect('b6')"
        @mouseover="select('b6')"
      >
        <span class="piece-box-text">b6</span>
      </div>
      <div
        ref="c6"
        class="piece-box white-box"
        @click="act('c6')"
        @mouseleave="deselect('c6')"
        @mouseover="select('c6')"
      >
        <span class="piece-box-text">c6</span>
      </div>
      <div
        ref="d6"
        class="piece-box black-box"
        @click="act('d6')"
        @mouseleave="deselect('d6')"
        @mouseover="select('d6')"
      >
        <span class="piece-box-text">d6</span>
      </div>
      <div
        ref="e6"
        class="piece-box white-box"
        @click="act('e6')"
        @mouseleave="deselect('e6')"
        @mouseover="select('e6')"
      >
        <span class="piece-box-text">e6</span>
      </div>
      <div
        ref="f6"
        class="piece-box black-box"
        @click="act('f6')"
        @mouseleave="deselect('f6')"
        @mouseover="select('f6')"
      >
        <span class="piece-box-text">f6</span>
      </div>
      <div
        ref="g6"
        class="piece-box white-box"
        @click="act('g6')"
        @mouseleave="deselect('g6')"
        @mouseover="select('g6')"
      >
        <span class="piece-box-text">g6</span>
      </div>
      <div
        ref="h6"
        class="piece-box black-box"
        @click="act('h6')"
        @mouseleave="deselect('h6')"
        @mouseover="select('h6')"
      >
        <span class="piece-box-text">h6</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a7"
        class="piece-box black-box"
        @click="act('a7')"
        @mouseleave="deselect('a7')"
        @mouseover="select('a7')"
      >
        <span class="piece-box-text">a7</span>
      </div>
      <div
        ref="b7"
        class="piece-box white-box"
        @click="act('b7')"
        @mouseleave="deselect('b7')"
        @mouseover="select('b7')"
      >
        <span class="piece-box-text">b7</span>
      </div>
      <div
        ref="c7"
        class="piece-box black-box"
        @click="act('c7')"
        @mouseleave="deselect('c7')"
        @mouseover="select('c7')"
      >
        <span class="piece-box-text">c7</span>
      </div>
      <div
        ref="d7"
        class="piece-box white-box"
        @click="act('d7')"
        @mouseleave="deselect('d7')"
        @mouseover="select('d7')"
      >
        <span class="piece-box-text">d7</span>
      </div>
      <div
        ref="e7"
        class="piece-box black-box"
        @click="act('e7')"
        @mouseleave="deselect('e7')"
        @mouseover="select('e7')"
      >
        <span class="piece-box-text">e7</span>
      </div>
      <div
        ref="f7"
        class="piece-box white-box"
        @click="act('f7')"
        @mouseleave="deselect('f7')"
        @mouseover="select('f7')"
      >
        <span class="piece-box-text">f7</span>
      </div>
      <div
        ref="g7"
        class="piece-box black-box"
        @click="act('g7')"
        @mouseleave="deselect('g7')"
        @mouseover="select('g7')"
      >
        <span class="piece-box-text">g7</span>
      </div>
      <div
        ref="h7"
        class="piece-box white-box"
        @click="act('h7')"
        @mouseleave="deselect('h7')"
        @mouseover="select('h7')"
      >
        <span class="piece-box-text">h7</span>
      </div>
    </div>
    <div class="row">
      <div
        ref="a8"
        class="piece-box white-box"
        @click="act('a8')"
        @mouseleave="deselect('a8')"
        @mouseover="select('a8')"
      >
        <span class="piece-box-text">a8</span>
      </div>
      <div
        ref="b8"
        class="piece-box black-box"
        @click="act('b8')"
        @mouseleave="deselect('b8')"
        @mouseover="select('b8')"
      >
        <span class="piece-box-text">b8</span>
      </div>
      <div
        ref="c8"
        class="piece-box white-box"
        @click="act('c8')"
        @mouseleave="deselect('c8')"
        @mouseover="select('c8')"
      >
        <span class="piece-box-text">c8</span>
      </div>
      <div
        ref="d8"
        class="piece-box black-box"
        @click="act('d8')"
        @mouseleave="deselect('d8')"
        @mouseover="select('d8')"
      >
        <span class="piece-box-text">d8</span>
      </div>
      <div
        ref="e8"
        class="piece-box white-box"
        @click="act('e8')"
        @mouseleave="deselect('e8')"
        @mouseover="select('e8')"
      >
        <span class="piece-box-text">e8</span>
      </div>
      <div
        ref="f8"
        class="piece-box black-box"
        @click="act('f8')"
        @mouseleave="deselect('f8')"
        @mouseover="select('f8')"
      >
        <span class="piece-box-text">f8</span>
      </div>
      <div
        ref="g8"
        class="piece-box white-box"
        @click="act('g8')"
        @mouseleave="deselect('g8')"
        @mouseover="select('g8')"
      >
        <span class="piece-box-text">g8</span>
      </div>
      <div
        ref="h8"
        class="piece-box black-box"
        @click="act('h8')"
        @mouseleave="deselect('h8')"
        @mouseover="select('h8')"
      >
        <span class="piece-box-text">h8</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store";
import { mapActions, mapStores } from "pinia";
export default {
  name: "App",
  methods: {
    ...mapActions(useStore, ["updateBoard", "select", "deselect", "act"]),
  },
  computed: {
    ...mapStores(useStore),
  },
  mounted() {
    this.mainStore.createBoard(this.$refs);
    this.mainStore.updateBoard();
  },
};
</script>
