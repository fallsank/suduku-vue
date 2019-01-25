<template>
  <div class="popup-num grid">
    <div class="row" v-for="n in 3" :key="n">
      <div class="col" v-for="m in 3" :key="m" @click="setCell((n - 1) * 3 + m)">
        {{ (n - 1) * 3 + m }}
      </div>
    </div>
    <div class="row">
      <div class="col confirm" @click="setCell('confirm')"></div>
      <div class="col doubt" @click="setCell('doubt')"></div>
      <div class="col empty" @click="setCell('empty')"></div>
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
  },
  methods: {
    setCell(val) {
      console.log(val);
    }
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
