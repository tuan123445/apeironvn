<template>
  <div>
    <el-dialog
      v-model="showDialog"
      :before-close="handleClose"
      style="width: 80%"
    >
      <div class="astronomic-view">
        <div class="astronomic-title apeiron-font">astronomic</div>
        <div class="astronomic-body">
          <div class="astronomic-intro">
            Không chỉ riêng mặt trời chúng ta còn nhiều loại Astronomic, khác
            nhau. Nhưng những loại này không giúp buff tuổi cho các planet mà
            chúng sẽ giúp tăng đường quỹ đạo (từ 1 đến 3 đường) cho Star. Dưới
            đây là hình ảnh của các Astronomic khác.
          </div>
          <div class="mt-3 astronomic-img">
            <el-tabs v-model="activeName" class="asto-img-tabs">
              <el-tab-pane label="ASTEROID" name="asteroid">
                <div class="row mt-2">
                  <div
                    v-for="asteroid in astronomicList.asteroidList"
                    :key="asteroid.value"
                    class="astronomic-col-2 astronomic-img-item mb-3"
                  >
                    <img :src="asteroid.link" />
                    <div style="text-align: center">{{ asteroid.name }}</div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="COMET" name="comet">
                <div class="row mt-2">
                  <div
                    v-for="comet in astronomicList.cometList"
                    :key="comet.value"
                    class="astronomic-col-2 astronomic-img-item mb-3"
                  >
                    <img :src="comet.link" />
                    <div style="text-align: center">{{ comet.name }}</div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="SUPERNOVA" name="supernova">
                <div class="row mt-2">
                  <div
                    v-for="superNova in astronomicList.superNovaList"
                    :key="superNova.value"
                    class="astronomic-col-2 astronomic-img-item mb-3"
                  >
                    <img :src="superNova.link" />
                    <div style="text-align: center">{{ superNova.name }}</div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import astronomicList from "../core/astronomicLib";
export default {
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      showDialog: false,
      activeName: "asteroid",
      astronomicList: astronomicList,
    };
  },
  watch: {
    show: function (val) {
      this.showDialog = val;
    },
  },
  methods: {
    handleClose() {
      this.$emit("getShowValue", false);
      this.showDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  .astronomic-col-2 {
    width: 50%;
  }
}

@media (min-width: 400px) {
  .astronomic-col-2 {
    width: 25%;
  }
}

@media (min-width: 768px) {
  .astronomic-col-2 {
    width: 16.6666%;
  }
}

.astronomic-view {
  color: #fff8dc !important;
  width: 100%;
  height: 100%;
  padding: 0px 30px;

  .astronomic-title {
    font-size: 30px;
  }

  .astronomic-img-item {
    img {
      width: 100%;
    }
  }
}
</style>
