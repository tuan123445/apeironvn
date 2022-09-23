<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper alliances-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>A</span>
        <span>L</span>
        <span>L</span>
        <span>I</span>
        <span>A</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Alliances là gì?</h1>
        <h2 class="apeiron-font">Alliances</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Alliances giống như Guild trong các game khác. Nó là tập hợp của các
          người chơi lại với nhau để có thể tham gia nhiều event hơn như Boss
          thế giới, esports event. Alliances sẽ có members cap(số lượng người
          tham gia vào guild) cơ bản là 10 người. Nhưng cứ mỗi 1 star guild bạn
          sở hữu thì số lượng members cap sẽ được tăng lên 10 members cho mỗi 1
          Star. Cái hay ở đây là Alliances sẽ sở hữu các chòm sao(Constellation)
          thứ mà chứa các Star. Và khi Alliances sở hữu 1 chòm sao thì những
          người trong Alliances đó sẽ nhận được buff(Zodiac Buff) từ các
          Constellation. Nói dễ hiểu thì sẽ là buff của guild. Sẽ có giới hạn
          Star và Constellation có thể sở hữu trong 1 Alliance. Max là 100 Star
          hoặc 13 Constellations. Bạn có thể xem thêm cách tính toán member Cap
          tại
          <span
            ><el-button type="info" size="small" @click="capDialogShow()"
              ><i class="mdi mdi-chevron-right"></i>
              Đây
              <i class="mdi mdi-chevron-left"></i></el-button
          ></span>
        </div>
      </div>
    </div>
    <el-dialog
      v-model="calCapDialogShow"
      :before-close="!calCapDialogShow"
      style="width: 80%"
    >
      <div class="cal-dialog-title">
        <h3>Tính toán member Cap simulation</h3>
      </div>
      <div class="cal-dialog-body mt-5">
        <el-table
          :data="tableData"
          :border="true"
          style="width: 100%"
          max-height="400"
        >
          <el-table-column prop="constellationType" label="Loại Constellation">
            <template #default="props">
              <el-input
                class="my-3"
                v-model="props.row.constellationType"
                type="number"
                min="3"
                max="20"
                placeholder="Nhập loại chòm sao (số từ 1-20)"
                @change="constellationTypeChange(props.$index)"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="numberOfConstellation" label="Số lượng">
            <template #default="props">
              <el-input
                class="my-3"
                v-model="props.row.numberOfConstellation"
                type="number"
                min="1"
                max="13"
                placeholder="Nhập số lượng chòm sao (số từ 1-13)"
                @change="numberOfConstellationChange(props.$index)"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="memberCapBuff"
            label="Zodiac Alliance Member Cap Buff"
          />
          <el-table-column
            prop="orbitalTrackBuff"
            label="Số lượng Buff của Orbital Track "
          />
          <el-table-column label="" width="120">
            <template #default="props">
              <el-button
                type="info"
                size="small"
                @click.prevent="deleteRow(props.$index)"
              >
                Remove
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mt-3" style="color: #fff8dc">
        Số lượng Member Cap được buff: {{ totalMemberCap }}
      </div>
      <div class="cal-dialog-footer-btn">
        <el-button class="mt-4" style="width: 50%" @click="onAddItem">
          Add Item
        </el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script>
import index from "../core/index.js";
import LoadingView from "../components/LoadingView.vue";
import CenterIconView from "../components/CenterIconView.vue";
import helper from "../core/helper.js";

export default {
  mixins: [index.mixins],
  components: {
    LoadingView,
    CenterIconView,
  },
  created() {
    this.scrollToTop();
  },
  data() {
    return {
      calCapDialogShow: false,
      tableData: [],
      listConstellation: [
        {
          type: 20,
          memberBuff: 200,
          orbitalTrackBuff: 200,
        },
        {
          type: 19,
          memberBuff: 190,
          orbitalTrackBuff: 190,
        },
        {
          type: 18,
          memberBuff: 180,
          orbitalTrackBuff: 180,
        },
        {
          type: 17,
          memberBuff: 170,
          orbitalTrackBuff: 170,
        },
        {
          type: 16,
          memberBuff: 160,
          orbitalTrackBuff: 160,
        },
        {
          type: 15,
          memberBuff: 150,
          orbitalTrackBuff: 150,
        },
        {
          type: 14,
          memberBuff: 140,
          orbitalTrackBuff: 140,
        },
        {
          type: 13,
          memberBuff: 130,
          orbitalTrackBuff: 130,
        },
        {
          type: 12,
          memberBuff: 120,
          orbitalTrackBuff: 120,
        },
        {
          type: 11,
          memberBuff: 100,
          orbitalTrackBuff: 100,
        },
        {
          type: 10,
          memberBuff: 90,
          orbitalTrackBuff: 90,
        },
        {
          type: 9,
          memberBuff: 80,
          orbitalTrackBuff: 80,
        },
        {
          type: 8,
          memberBuff: 70,
          orbitalTrackBuff: 70,
        },
        {
          type: 7,
          memberBuff: 60,
          orbitalTrackBuff: 60,
        },
        {
          type: 6,
          memberBuff: 50,
          orbitalTrackBuff: 50,
        },
        {
          type: 5,
          memberBuff: 40,
          orbitalTrackBuff: 40,
        },
        {
          type: 4,
          memberBuff: 30,
          orbitalTrackBuff: 30,
        },
        {
          type: 3,
          memberBuff: 20,
          orbitalTrackBuff: 20,
        },
      ],
      totalMemberCap: 0,
      totalOrbitalCap: 0,
    };
  },
  watch: {},
  methods: {
    capDialogShow() {
      this.calCapDialogShow = true;
    },
    onAddItem() {
      this.tableData.push({
        constellationType: 0,
        numberOfConstellation: 0,
        memberCapBuff: 0,
        orbitalTrackBuff: 0,
      });
    },
    deleteRow(index) {
      return new Promise((rex) => rex())
        .then(() => {
          this.tableData.splice(index, 1);
        })
        .then(() => {
          this.totalMemberCap = this.calTotalMemberCap();
        });
    },
    constellationTypeChange(index) {
      if (
        parseInt(this.tableData[index].constellationType) > 20 ||
        parseInt(this.tableData[index].constellationType) < 3
      ) {
        return helper.toast.warning(
          "Constellation hiện tại chỉ có loại từ 3-20 star trở lên"
        );
      }
      return new Promise((rex) => rex())
        .then(() => {
          this.getDataFromConstellationType(index);
        })
        .then(() => {
          if (this.tableData[index].numberOfConstellation != 0) {
            this.totalMemberCap = this.calTotalMemberCap();
          }
        });
    },
    numberOfConstellationChange(index) {
      if (this.getTotalNumberOfConstellation() > 13) {
        return helper.toast.warning("Max là 13 constellation");
      }

      if (this.tableData[index].constellationType != 0) {
        this.totalMemberCap = this.calTotalMemberCap();
      }
    },
    getDataFromConstellationType(index) {
      this.listConstellation.forEach((item) => {
        if (item.type == this.tableData[index].constellationType) {
          this.tableData[index].memberCapBuff = item.memberBuff;
          this.tableData[index].orbitalTrackBuff = item.orbitalTrackBuff;
        }
      });
    },
    calTotalMemberCap() {
      let totalMemberCapBuff = 0;
      let baseCapBuff = 0;
      this.tableData.forEach((data) => {
        totalMemberCapBuff += data.numberOfConstellation * data.memberCapBuff;
      });
      this.tableData.forEach((data) => {
        baseCapBuff += data.numberOfConstellation * data.constellationType * 10;
      });
      return totalMemberCapBuff + baseCapBuff;
    },
    calTotalOrbitalTrackBuff() {
      let totalOrbitalTrackBuff = 0;
      this.tableData.forEach((data) => {
        totalOrbitalTrackBuff +=
          data.numberOfConstellation * data.constellationType;
      });
      return totalOrbitalTrackBuff;
    },
    getTotalNumberOfConstellation() {
      let numberOfConstellation = 0;
      this.tableData.forEach((data) => {
        numberOfConstellation += parseInt(data.numberOfConstellation);
      });

      return numberOfConstellation;
    },
  },
};
</script>

<style lang="scss" scoped>
.alliances-view {
  .section-one {
    background-image: url(../assets/img/alliance.jpg) !important;
  }

  .section-two {
    height: 800px !important;
  }

  .cal-dialog-title {
    color: #fff8dc;
  }

  .cal-dialog-body {
  }

  .cal-dialog-footer-btn {
    width: 100%;
    text-align: center;
  }
  .el-input {
    --el-input-border-color: #606266;
  }
}
</style>
