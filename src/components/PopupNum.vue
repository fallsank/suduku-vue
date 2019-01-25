<template>
  <div class="popup-num grid">
    <div class="row" v-for="n in 3" :key="n">
      <div class="col" v-for="m in 3" :key="m">
        {{ (n - 1) * 3 + m }}
      </div>
    </div>
    <div class="row">
      <div class="col confirm"></div>
      <div class="col doubt"></div>
      <div class="col empty"></div>
    </div>
    <div class="row remove">
      删除
    </div>
  </div>
</template>

<script>
export default {
  name: "popupNum",
  data() {
    return {
      popupNums: Array.from(new Array(13), (v, k) => k + 1)
    };
  }
};
</script>

<style lang="scss">
.row.remove {
  border: 1px solid #ddd;
  height: 0.8rem;
  background: #fff;
  border-top-width: 0;
  text-align: center;
  line-height: 0.8rem;
  color: red;
}
</style>
