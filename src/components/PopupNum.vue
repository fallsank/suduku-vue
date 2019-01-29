<template>
  <div class="popup-num grid" :style="positionStyle" ref="popupNumContainer">
    <div class="row" v-for="n in 3" :key="n">
      <div class="col" v-for="m in 3" :key="m" @click="setCell((n - 1) * 3 + m)">
        {{ (n - 1) * 3 + m }}
      </div>
    </div>
    <div class="row">
      <div class="col" @click="setCell('cancel')">取消</div>
      <div class="col" @click="setCell(0)">删除</div>
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
    return {};
  },
  methods: {
    setCell(val) {
      if (val !== "cancel") {
        this.currCell.val = val;
        this.$emit("check");
      }
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
