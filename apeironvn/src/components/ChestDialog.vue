<template>
  <div>
    <el-dialog
      v-model="showDialog"
      :before-close="handleClose"
      style="width: fit-content"
      align-center
    >
      <div class="chest-view">
        <div class="chest-title apeiron-font">{{ title }}</div>
        <div class="chest-body mt-3" v-if="typeOfChest === 1">
          <div>
            Chỉ có duy nhất 207 Regular chest được bán trong đợt sale này.
          </div>
          <div>- Mở ra random 1 Star NFTs Tier từ 10-11</div>
          <div>- Mở ra random 1 Astronomic NFTs Tier từ 1-3</div>
        </div>
        <div class="chest-body mt-3" v-if="typeOfChest === 2">
          <div>
            Chỉ có duy nhất 204 Celestial chest được bán trong đợt sale này.
          </div>
          <div>- Mở ra random 1 Star NFTs Tier từ 7-9</div>
          <div>- Mở ra random 2 Astronomic NFTs Tier từ 1-3</div>
        </div>
        <div class="chest-body mt-3" v-if="typeOfChest === 3">
          <div>
            Chỉ có duy nhất 62 Empyrean chest được bán trong đợt sale này.
          </div>
          <div>- Mở ra random 1 Star NFT Tier từ 10-11</div>
          <div>- Mở ra random 4 Astronomic NFT Tier từ 2-3</div>
          <div>- Có cơ hội nhỏ mở ra celestial đặc biệt</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    typeOfChest: {
      type: Number,
      default: () => null,
    },
  },
  data() {
    return {
      showDialog: false,
      title: "",
    };
  },
  watch: {
    show: function (val) {
      this.showDialog = val;
    },
    typeOfChest: function (val) {
      if (val === 1) {
        this.title = "Regular Chest";
      } else if (val === 2) {
        this.title = "celestial Chest";
      } else {
        this.title = "Empyrean Chest";
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit("getShowChestDialogValue", false);
      this.showDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.chest-view {
  color: #fff8dc !important;
  width: 100%;
  height: 100%;
  padding: 0px 30px;
}
</style>
