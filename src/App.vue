<template>
  <div ref="app">
    <WhiteBoard v-if="playerIsWhite"></WhiteBoard>
    <BlackBoard v-else></BlackBoard>
   </div>
</template>

<script>
import WhiteBoard from "./components/White.vue";
import BlackBoard from "./components/Black.vue";
import { useStore } from "./store";
import { mapStores } from "pinia";
export default {
  name: "App",
  data: () => {
    return {
      player: null,
      playerIsWhite: false,
    };
  },
  components: {
    WhiteBoard,
    BlackBoard,
  },
  computed: {
    ...mapStores(useStore),
  },
  mounted () {
    this.player = this.mainStore.player;
    if (this.player == "white") this.playerIsWhite = true;
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
@import url("./assets/style.css");
</style>
