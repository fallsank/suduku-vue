<template>
  <div class="dashboard-wrapper">
    <button class="dash-button" @click="startNewGame">
      新游戏
    </button>
    <button class="dash-button" @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  methods: {
    startNewGame() {
      this.$emit("startNewGame");
    },
    reset() {
      this.$emit("resetGame");
    }
  }
};
</script>

<style lang="scss">
.dashboard-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 42px;
  background: #eee;

  box-sizing: border-box;

  button.dash-button {
    height: 100%;
    color: rgb(56, 54, 54);
    background-color: #f4f7f7;
    border: 1px solid #dae6e0;
    width: 50%;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
