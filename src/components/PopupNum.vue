<template>
  <div class="popup-num grid" :style="positionStyle" ref="popupNumContainer">
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
    <div class="row remove" @click="setCell('remove')">
      删除(x)
    </div>
  </div>
</template>

<script>
export default {
  name: "popupNum",
  props: {
    position: {
      default: function() {
        return {
          left: 0,
          top: 0
        };
      },
      required: true,
      type: Object
    },
    currCell: {
      required: true
    },
    visible: {
      required: true
    }
  },
  computed: {
    positionStyle: function() {
      if (!this.position.right) {
        return {
          left: this.position.left + "px",
          top: this.position.top + "px"
        };
      } else {
        return {
          right: this.position.right + "px",
          top: this.position.top + "px"
        };
      }
    }
  },
  data() {
    return {
      popupNums: Array.from(new Array(13), (v, k) => k + 1)
    };
  },
  methods: {
    setCell(val) {
      this.currCell.val = val;
      this.$emit("hidePopupNum");
    }
  }
};
</script>

<style lang="scss">
.row.remove {
  border: 1px solid #ddd;
  height: 0.8rem;
  background: #fff;
  border-top-width: 1;
  text-align: center;
  color: #da5858;
  align-items: center;
  justify-content: center;
  background: #fde0e0;
}
</style>
