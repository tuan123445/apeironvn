<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper planet-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>P</span>
        <span>L</span>
        <span>A</span>
        <span>N</span>
        <span>E</span>
        <span>T</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two">
      <h1>Planet là gì?</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Tất nhiên nếu bạn muốn làm god của một hành tinh thì trước hết bạn sẽ
        phải sở hữu ít nhất một hành tinh để làm được điều đó. Mỗi một hành tinh
        là một NFT độc nhất được tạo thành từ sự kết hợp của các yếu tố truyền
        thống là nước, không khí, lửa, và đất. Trên hết, mỗi hành tinh đều có
        Avatar đặc biệt của riêng mình, đi kèm với ngoại hình và lớp chiến đấu
        riêng. Bạn hoàn toàn có thể sở hữu không giới hạn số lượng hành tinh.
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Planet.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four">
      <h1>Cách sở hữu</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Hiện tại vòng Primeval Planet sale đã được diễn ra vào ngày 14 tháng 4
        năm 2022. Giờ đây các Planet NFT đang được bán trên
        <a href="https://opensea.io/collection/apeironplanet">OPENSEA</a>. Vậy
        nên bạn có thể sở hữu chúng bằng cách mua trực tiếp trên
        <a href="https://opensea.io/collection/apeironplanet">OPENSEA</a>. Tuy
        nhiên nếu bạn không có điều kiện kinh tế để có thể sở hữu một Planet cho
        riêng bản thân mình thì cũng không sao cả. Có rất nhiều cách để tham gia
        game mà không cần đến vốn. Đúng vậy Apeiron có chế độ FreeToEarn. Bạn
        hoàn toàn có thể tham gia miễn phí bằng cách tham gia vào các guild
        gaming và trở thành học viên của họ để có thể sở hữu một suất
        scholalship để tham gia game. Hiện nay Apeiron đã và vẫn đang bắt tay
        với nhiều gaming guild lớn trên khắp thế giới như GUILDFI, YGGSEA,
        ANCIENT8( một gaming guild của Việt Nam ),...
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five">
      <div class="body-wrapper">
        <div class="third-body">
          <div class="side-one">
            <img src="../assets/img/all_core.png" alt="" />
          </div>
          <div class="side-two">
            <img src="../assets/img/elemental_core.png" alt="" />
          </div>
          <div class="side-three">
            <img src="../assets/img/Mythic_core.png" alt="" />
          </div>
        </div>
        <div class="third-body">
          <div class="side-one">
            <img src="../assets/img/Arcane_core.png" alt="" />
          </div>
          <div class="side-two">
            <img src="../assets/img/Divine_core.png" alt="" />
          </div>
          <div class="side-three">
            <img src="../assets/img/primal_core.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- section-six -->
    <div class="section-six">
      <h1>Core là gì?</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Core chính là thứ cốt lõi, nguyên thủy nhất. Thứ mà mở ra 1 planet cho
        bạn. Như đã thấy ở trên. Đây là toàn bộ 5 core của chúng tôi. Mỗi 1 core
        sẽ có tỷ lệ ra các Planet có element khác nhau. Và khi bạn sở hữu một
        core bạn sẽ được hưởng lợi ích theo từng tier của core bạn đang nắm giữ.
        Không những thế tier bạn giữ càng cao thì lợi ích bạn được hưởng sẽ càng
        lớn theo cấp số nhân. Ví dụ bạn giữ Elemental Core thì phần thưởng sẽ
        x0.1 nhưng khi bạn giữ divine core thì phần thưởng bạn sẽ được nhận là
        x2( gấp 20 lần ). Không những thế giữ càng nhiều core thì số lượng phần
        thưởng còn được nhân lên hơn nữa. Hiện tại vòng Primeval Planet sale đã
        kết thúc nên khi bạn mua Planet hãy để ý cả Core của chúng. Tier của
        Core được ghi góc bên dưới của Planet NFT.
      </div>
    </div>
    <!-- section-seven -->
    <div class="section-five">
      <img class="bgr-img" src="../assets/img/planet_avatar.jpeg" alt="" />
      <div class="info-wrapper"></div>
    </div>
    <!-- section-eight -->
    <div class="section-eight">
      <h1>Planet & Avatar</h1>
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
      <div class="infomation" style="text-align: center">
        Mỗi một planet sẽ có một avatar của riêng mình.
      </div>
      <div class="info-center-img">
        <Splide :options="options">
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Delta.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Delta.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Archipelago.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Archipelago.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Dunes.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Dunes.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Foresty.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Foresty.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Gigas.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Gigas.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Inferno.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Inferno.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Karst.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Karsts.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Leviathan.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Leviathan.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Mountainous.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Mountainous.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Normal.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Normal.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Oasis.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Oasis.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Tempest.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Tempest.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Tundra.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Tundra.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Volcanic.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Volcanic.png" alt="" />
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="slide-item-wrapper">
              <div class="planet normal-rotate">
                <img src="../assets/img/planet/Wasterland.png" alt="" />
              </div>
              <div class="avatar">
                <img src="../assets/img/avatar/Wasteland.png" alt="" />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <!-- section-nine -->
    <div class="section-five">
      <div class="half-body">
        <div class="left-side">
          <img src="../assets/img/conjungsion.jpeg" alt="" />
        </div>
        <div class="right-side">
          <h3 class="title" style="margin-top: 20px">Planet Age</h3>
          <div class="infor">
            Mỗi planet đều có tuổi thọ. Khi một hành tinh được sinh ra, tuổi của
            nó được đặt thành 0 và nó sẽ tăng thêm 1 mỗi ngày (tính theo ngày
            ngoài đời thực). Sau khi đạt đến một độ tuổi nhất định - được hiển
            thị trong bảng bên dưới - nó sẽ tiến tới nhóm tuổi tiếp theo, mở
            khóa nhiều khe di tích hơn. Khi thời gian trôi qua, hành tinh càng
            già và mạnh mẽ hơn!
          </div>
          <div style="width: min-content; margin: 25px auto">
            <table class="age_line_table">
              <tr>
                <th v-for="rowOneItem in rowOne" :key="rowOneItem">
                  {{ rowOneItem }}
                </th>
              </tr>
              <tr>
                <th v-for="rowTwoItem in rowTwo" :key="rowTwoItem">
                  {{ rowTwoItem }}
                </th>
              </tr>
              <tr>
                <th v-for="rowThreeItem in rowThree" :key="rowThreeItem">
                  {{ rowThreeItem }}
                </th>
              </tr>
            </table>
            <table class="age_vertical_table">
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
    </div>
    <div class="section-five">
      <div class="half-body">
        <div class="right-side">
          <h3 class="title" style="margin-top: 20px">Planet Breed</h3>
          <div class="infor">
            Khi bạn sở hữu 2 planet trở lên bạn có thể tham gia vào sự kiện
            Primeval Celestial Conjunction để nhân giống hành tinh của bạn. Có 2
            quy tắc khi nhân giống hành tinh. Một lần nhân giống sẽ mất 2 tuần
            để có thể tiếp tục nhân giống tiếp.
            <br />
            <span>
              <img src="../assets/img/planet/Oasis.png" style="width: 20px" />
            </span>
            Mỗi 1 hành tinh chỉ có thể nhân giống 3 lần
            <br />
            <span>
              <img
                src="../assets/img/planet/Wasterland.png"
                style="width: 20px"
              />
            </span>
            Các hành tinh có cùng cha mẹ thì sẽ không thể nhân giống được
          </div>
          <div style="width: min-content; margin: 25px auto"></div>
        </div>
        <div class="left-side">
          <img src="../assets/img/planet.jpg" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import index from "../core/index.js";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import LoadingView from "../components/LoadingView.vue";
import CenterIconView from "../components/CenterIconView.vue";

export default {
  mixins: [index.mixins],
  components: {
    Splide,
    SplideSlide,
    LoadingView,
    CenterIconView,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        arrows: true,
        pagination: false,
      },
      rowOne: [
        "Age",
        "0",
        "10",
        "100",
        "1k",
        "10k",
        "100k",
        "1 mil",
        "10 mil",
        "100 mil",
      ],
      rowTwo: [
        "Name",
        "New formed",
        "Nascent",
        "Young",
        "Adult",
        "Mature",
        "Elder",
        "Ancient",
        "Ante-diluvian",
        "Forgottetn",
      ],
      rowThree: ["Relic slots", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      tableDataHeader: ["Age", "Name", "Relic slots"],
      tableData: [
        ["0", "New formed", "1"],
        ["10", "Nascent", "2"],
        ["100", "Young", "3"],
        ["1k", "Adult", "4"],
        ["10k", "Mature", "5"],
        ["100k", "Elder", "6"],
        ["1 mil", "Ancient", "7"],
        ["10 mil", "Ante-diluvian", "8"],
        ["100 mil", "Forgottetn", "9"],
      ],
    };
  },
  created() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
.planet-view {
  .section-one {
    background-image: url(../assets/img/planet_background.jpg) !important;
  }

  .section-four {
    height: 900px;
  }

  .section-five {
    height: fit-content !important;
  }

  /* section-eight */
  .section-eight {
    height: 1000px;
  }

  .info-center-img {
    .splide {
      height: fit-content;
    }

    .slide-item-wrapper {
      width: fit-content;
      margin: auto;
      .planet,
      .avatar {
        img {
          box-shadow: unset;
        }
      }

      .normal-rotate {
        animation: spin 90s linear infinite;
      }
    }
  }

  .section-five {
    display: unset;
    .half-body {
      .right-side {
        padding: 40px 0;
        background: #fff;

        .infor {
          padding: 0 10%;
        }

        .age_line_table,
        .age_vertical_table {
          tr {
            th,
            td {
              border: 1px solid black;
              padding: 0 5px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(1440deg);
    }
  }
}
</style>
