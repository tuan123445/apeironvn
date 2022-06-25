<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper home-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>A</span>
        <span>P</span>
        <span>E</span>
        <span>I</span>
        <span>R</span>
        <span>O</span>
        <span>N</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two">
      <h1>NFT Game đầu tiên thuộc thể loại GODGAME</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Không có gì đáng nói ngoài sự thật rằng đây chính là một game thể loại
        god game ĐẦU TIÊN trên blockchain. Nếu bạn muốn sử dụng sức mạnh sáng
        tạo của mình để tạo nên một vũ trụ đầy những chú chubster đáng yêu thì
        khi đến với Apeiron bạn hoàn toàn có thể làm được những điều đó.
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/info.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four">
      <h1>Apeiron</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Trong Apeiron, bạn sẽ có quyền kiểm soát EDEN của một hành tinh - một
        cấu trúc bí ẩn để truyền năng lượng thần thánh - và tạo ra nhiều phép
        màu nguyên tố khác nhau để giải quyết vô số vấn đề mà Doods mũm mĩm gặp
        phải trong cuộc sống hàng ngày của họ. Và sau khi bạn có đủ niềm tin từ
        Doods của mình, bạn sẽ có thể biến thành Thế thần của hành tinh mình,
        một người khổng lồ có thể điều khiển và di chuyển được để khám phá vũ
        trụ, chiến đấu với quái vật và kiếm chiến lợi phẩm cực kỳ hoành tráng!
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five">
      <img class="bgr-img" src="../assets/img/Bood_lineup.jpg" alt="" />
      <div class="info-wrapper">
        <h1>Apostle</h1>
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
          Apostle giống như pet của bạn trong game. Mỗi Apostle lại có bộ kỹ
          năng riêng của chính mình.
        </div>
        <div class="see-detail-btn">
          <a href="/apostle">Xem thêm</a>
        </div>
      </div>
    </div>
    <!-- section-six -->
    <div class="section-six">
      <h1>Planet</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Để có thể bắt đầu chơi Apeiron, bạn sẽ cần một hành tinh. Mỗi 1 hành
        tinh là một NFT độc nhất được tạo thành từ sự kết hợp của các yếu tố
        truyền thống là nước, không khí, lửa, và đất.
      </div>
      <div class="slide-info">
        <div class="img-hover-zoom">
          <img src="../assets/img/breed.png" alt="" />
          <div class="slide-img-captions">
            <h1>Breed</h1>
            <div class="detail-btn">
              <a href="/breed"> Xem Thêm </a>
            </div>
          </div>
        </div>
        <div class="img-hover-zoom">
          <img src="../assets/img/conjungsion.png" alt="" />
          <div class="slide-img-captions">
            <h1>Armageddon</h1>
            <div class="detail-btn">
              <a href="#"> Xem Thêm </a>
            </div>
          </div>
        </div>
        <div class="img-hover-zoom">
          <img src="../assets/img/godiverse.png" alt="" />
          <div class="slide-img-captions">
            <h1>More</h1>
            <div class="detail-btn">
              <a href="#"> Xem Thêm </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-seven -->
    <div class="section-seven">
      <video
        id="home-video"
        autoplay
        src="../assets/video/battle.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-eight -->
    <div class="section-eight">
      <h1>Partner</h1>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Hiện tại apeiron đã gọi vốn và đang hợp tác với nhiều quỹ đầu tư và
        gaming guild lớn! Cộng đồng của Apeiron đang phát triển một cách cực kỳ
        nhanh chóng!
      </div>
      <div class="info-center-img">
        <img src="../assets/img/partner.jpg" alt="" />
      </div>
    </div>
    <!-- section-nine -->
    <div class="section-nine">
      <div class="body-wrapper">
        <div class="img-line-one">
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/BlackHole.jpg" alt="" />
            <div class="slide-img-captions">
              <h1>Star NFT</h1>
              <div class="detail-btn">
                <a href="#"> Xem Thêm </a>
              </div>
            </div>
          </div>
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/relic.png" alt="" />
            <div class="slide-img-captions">
              <h1>Relic</h1>
              <div class="detail-btn">
                <a href="#"> Xem Thêm </a>
              </div>
            </div>
          </div>
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/event.jpeg" alt="" />
            <div class="slide-img-captions">
              <h1>Event</h1>
              <div class="detail-btn">
                <a href="/events"> Xem Thêm </a>
              </div>
            </div>
          </div>
        </div>
        <div class="img-line-two">
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/token.png" alt="" />
            <div class="slide-img-captions">
              <h1>Tokennomic</h1>
              <div class="detail-btn">
                <a href="/token"> Xem Thêm </a>
              </div>
            </div>
          </div>
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/roadmap.jpg" alt="" />
            <div class="slide-img-captions">
              <h1>Road map</h1>
              <div class="detail-btn">
                <a href="#"> Xem Thêm </a>
              </div>
            </div>
          </div>
          <div class="img-hover-zoom" style="margin: 0 !important">
            <img src="../assets/img/team.png" alt="" />
            <div class="slide-img-captions">
              <h1>Team</h1>
              <div class="detail-btn">
                <a href="#"> Xem Thêm </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import index from "../core/index.js";
import LoadingView from "../components/LoadingView.vue";
import CenterIconView from "../components/CenterIconView.vue";

export default {
  components: {
    LoadingView: LoadingView,
    CenterIconView,
  },
  mixins: [index.mixins],
  created() {
    this.scrollToTop();
  },
  methods: {},
};
</script>

<style>
.home-view .section-one {
  background-image: url(../assets/img/apostle_oasis.jpg) !important;
}
</style>
