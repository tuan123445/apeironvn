<template>
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
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four">
      <h1>Cách sở hữu</h1>
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
        Hiện tại vòng Planet NFT sale đã được diễn ra vào ngày 14 tháng 4 năm
        2022. Giờ đây các Planet NFT đang được bán trên
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
    <div class="section-five"></div>
  </main>
</template>

<script>
import index from "../core/index.js";
// import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  mixins: [index.mixins],
  components: {},
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        perPage: 3,
        autoplay: true,
        height: "15rem",
        arrows: true,
        pagination: false,
      },
    };
  },
  created() {
    this.scrollToTop();
  },
};
</script>

<style>
.planet-view .section-one {
  background-image: url(../assets/img/planet.jpg) !important;
}
</style>
