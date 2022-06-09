<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper breed-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>B</span>
        <span>R</span>
        <span>E</span>
        <span>E</span>
        <span>D</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-six">
      <h1>Breed?</h1>
      <div class="center-icon">
        <img
          src="../assets/img/center-icon/small_dood_kv_lineup_left.png"
          alt=""
        />
        <img
          src="../assets/img/center-icon/treasure.png"
          alt=""
          style="width: 30px !important"
        />
        <img
          src="../assets/img/center-icon/small_dood_kv_lineup_right.png"
          alt=""
        />
      </div>
      <div class="infomation">
        <div>
          Giống như hầu hết các game có thể đẻ khác. Apeiron cũng có cơ chế nhân
          giống các hành tinh để mở rộng vũ trụ. Để có thể nhân giống bạn cần ít
          nhất hai hành tinh. Nguyên tố của hành tinh con sẽ phụ thuộc vào
          nguyên tố của cả hai hành tinh bố và mẹ.
        </div>
        <br />
        <div>
          Mỗi hành tinh chỉ nhân giống tối đa được ba lần. Sau khi nhân giống
          thì hành tinh con sẽ nở sau một tuần. Khoảng thời gian chờ sau khi
          nhân giống là hai tuần. Để nhân giống bạn sẽ phải tốn 250 APRS và 1
          Mini Black Hole NFT. Tuy nhiên vào event nhân giống lần tới có tên
          Celestial Conjunction bạn sẽ không cần đến tới APRS mà chỉ cần Mini
          Black Hole NFT để có thể nhân giống.
        </div>
        <br />
        <div>
          <table class="blackHoleNeedTable">
            <tr>
              <th v-for="headerItem in tableDataHeader" :key="headerItem">
                {{ headerItem }}
              </th>
            </tr>
            <tr v-for="tableItem in tableData" :key="tableItem">
              <td v-for="item in tableItem" :key="item">
                {{ item }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <div class="notice">tanbod dadi contributed</div>
      <video
        id="home-video"
        autoplay
        src="../assets/video/breedingGuide.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- <div class="section-six">
      <h1>Breed Simulation</h1>
      <div class="infomation" style="text-align: center">
        Đây chỉ là bản thử nghiệm nên mọi thông tin có thể sai lệch
      </div>
      <div class="half-body">
        <div class="left-side">
          <img src="../assets/img/planet/Wasterland.png" />
        </div>
        <div class="right-side">
          <img src="../assets/img/planet/Wasterland.png" />
        </div>
      </div>
    </div> -->
  </main>
</template>

<script>
import index from "../core/index.js";
import LoadingView from "../components/LoadingView.vue";

export default {
  mixins: [index.mixins],
  components: {
    LoadingView,
  },
  data() {
    return {
      tableDataHeader: [
        "# Số lần nhân giống của một planet",
        "# Số Mini-Black Holes cần (mỗi planet)",
      ],
      tableData: [
        ["0", "1"],
        ["1", "3"],
        ["2+", "6"],
      ],
    };
  },
  created() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  .section-six {
    .half-body {
      .left-side,
      .right-side {
        width: 100%;
      }
    }
  }
}
@media (min-width: 400px) {
}
@media (min-width: 768px) {
  .section-six {
    .half-body {
      .left-side,
      .right-side {
        width: 50%;
        img {
          object-fit: unset;
          width: 300px;
          height: unset;
        }
      }
    }
  }
}
@media (min-width: 900px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
}

.breed-view {
  .section-one {
    background-image: url(../assets/img/planet.jpg) !important;
  }

  .section-six {
    .blackHoleNeedTable {
      tr {
        th,
        td {
          border: 1px solid #fff;
          padding: 0 5px;
          text-align: center;
        }
      }
    }

    .half-body {
      height: 100%;
    }
  }

  .section-three {
    position: relative;
    .notice {
      position: absolute;
      left: 0;
      top: 0;
      color: white;
    }
  }
}
</style>
