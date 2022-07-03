<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper apostle-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>A</span>
        <span>P</span>
        <span>O</span>
        <span>S</span>
        <span>T</span>
        <span>L</span>
        <span>E</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Apostle là gì?</h1>
        <h2 class="apeiron-font">Apostle</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Apostle không khác gì những con pet của bạn trong game. Chúng sẽ hỗ
          trợ bạn chiến đấu
        </div>
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three" id="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Apostle.mp4"
        loop
        type="video/mp4"
        muted="muted"
        controls
        playsinline
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four" id="section-four">
      <div class="infomation">
        <Splide :options="options" style="z-index: 1">
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/warrior_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">warrior</div>
              <div class="slide-title apeiron-font">warrior</div>
              <div class="slide-detail">
                <p>
                  Thẻ bài của warriror kết hợp cả gây sát thương và phòng thủ.
                </p>
                <p>
                  Warrior có thể sẽ đứng ở hàng đầu để có thể chịu sát thương
                  cũng như gây được nhiều sát thương nhất có thể
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/mage_nft.png" />
            </div>
            <div class="slide-info">
              <div class="slide-title">Mage</div>
              <div class="slide-title apeiron-font">Mage</div>
              <div class="slide-detail">
                <p>
                  Không giống như warrior Mage có cự li đánh tầm xa và chúng có
                  sát thương phép cực mạnh.
                </p>
                <p>
                  Tuy nhiên chúng có sức phỏng thủ không cao. Vậy nên chúng sẽ
                  phải được bảo vệ khỏi những sát thương lớn từ địch. Đó là lý
                  do chúng được xếp ở hàng phía sau, tránh xa các tướng gây sát
                  thương của địch.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/bard_nft.png" />
            </div>
            <div class="slide-info">
              <div class="slide-title">Bard</div>
              <div class="slide-title apeiron-font">Bard</div>
              <div class="slide-detail">
                <p>
                  Bard giống như 1 supporter.Bard sẽ không xông pha đứng đầu đội
                  hình mà sẽ ở phía sau để hỗ trợ cho các Apostle khác. Tăng sát
                  thương chí mạng hoặc tăng máu cho đội hình.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/berserker_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">Berserker</div>
              <div class="slide-title apeiron-font">Berserker</div>
              <div class="slide-detail">
                <p>
                  Các Berserker sẽ có nhiệm vụ đứng ở tuyến trước, chúng là tiên
                  phong của đội hình. Thường được ghép bài với Priest. Chúng có
                  các kỹ năng giúp xâm nhập vào giữa đội hình đối phương gây náo
                  loạn đội hình đối phương.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/dragoon_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">dragoon</div>
              <div class="slide-title apeiron-font">dragoon</div>
              <div class="slide-detail">
                <p>
                  Dragoon là Apostle với tầm đánh gần gây sát thương vật lý. Ví
                  trí của Dragoon sẽ là giữa tuyến trước và tuyến sau. Để khi có
                  một hay nhiều kẻ địch xâm nhập vào hanngf sau nhằm vào những
                  Priest hay Mage của bạn thì Dragoon sẽ là người bảo vệ họ.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/hunter_nft.png" />
            </div>
            <div class="slide-info">
              <div class="slide-title">hunter</div>
              <div class="slide-title apeiron-font">hunter</div>
              <div class="slide-detail">
                <p>
                  Thợ săn mang đến sự kết hợp vô song giữa khả năng tiếp cận
                  tuyến sau, điều mà bất kỳ Apostle nào cũng đánh giá cao.
                </p>
                <p>
                  Các kỹ năng như Áp chế Lửa có thể giữ kẻ thù tại chỗ, cho phép
                  các đồng đội khác của bạn tập trung vào đội hình phía trước
                  khi có bất kỳ rắc rối nào.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/knight_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">knight</div>
              <div class="slide-title apeiron-font">knight</div>
              <div class="slide-detail">
                <p>
                  Knight trong chiến đấu được mặc áo giáp và khiên cổ điển. Vậy
                  nên Knight sẵn sàng đối đầu với bát kỳ ai. Knight phù hợp nhất
                  là ở tuyến phòng thủ. Đây cũng có thể coi như 1 semi-tank của
                  đội hình.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/priest_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">priest</div>
              <div class="slide-title apeiron-font">priest</div>
              <div class="slide-detail">
                <p>
                  Trong chiến đấu các Priest giữ cho các apostle khác sống sót.
                  Chúng là những người chữa trị. Tăng giáp tăng máu cho đồng
                  minh khi cần thiết.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/rogue_nft.png" />
            </div>
            <div class="slide-info">
              <div class="slide-title">rogue</div>
              <div class="slide-title apeiron-font">rogue</div>
              <div class="slide-detail">
                <p>
                  Rogue là tướng cận chiến sát thương vật lý. Chúng gây sát
                  thương nhưng chúng không có sức phỏng thủ được như Warrior. Bộ
                  skill của Rouge sẽ chủ yếu là gây sát thương.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/shaman_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">shaman</div>
              <div class="slide-title apeiron-font">shaman</div>
              <div class="slide-detail">
                <p>
                  Trong chiến đấu các Shaman cúng có nhiệm vụ hỗ trợ cho đồng
                  minh. Chúng có khả năng loại bỏ các hiệu ứng và có khá năng
                  hồi máu theo từng đợt nhưng không nhiều để giữ vững tinh thần
                  cho cả đội hình. Không những thế Shaman còn có thể gây ra các
                  hiệu ứng bát lợi cho phía đội hình của địch.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/summoner_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">summoner</div>
              <div class="slide-title apeiron-font">summoner</div>
              <div class="slide-detail">
                <p>
                  Trong chiến đấu, các Summoner có thể triệu hồi các linh hồn để
                  có thể gây sát thương cho đội hình địch. Summoner yêu cầu có
                  kinh nghiệm chơi căn chỉnh thời gian vì khi thời gian khi bạn
                  cast phép và khi phép được thực thi sẽ mất một khoảng thời
                  gian nhỏ. Nếu bạn không căn chỉnh chính xác sẽ khiến phép của
                  bạn có hiệu quả không cao.
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/gauntlet_nft.png" />
            </div>
            <div class="slide-info">
              <div class="slide-title">Guardian</div>
              <div class="slide-title apeiron-font">Guardian</div>
              <div class="slide-detail">
                <p>
                  Đây là tướng tank đích thực trong hàng ngũ Apostle. Một bức
                  tường khó phá vỡ của đội hình trong trận chiến.
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five" id="section-five">
      <img class="bgr-img" src="../assets/img/apostle-opensea.jpeg" alt="" />
      <div class="info-wrapper">
        <div>
          <img
            src="../assets/img/Logomark-Blue.png"
            alt=""
            @click="toApostleShop"
          />
        </div>
      </div>
    </div>
    <!-- section-six -->
    <div class="section-six" id="section-six">
      <div class="slide-from-left">
        <h1>Benefit</h1>
        <h2 class="apeiron-font">Benefit</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Tùy thuộc vào số lượng Apostle mà bạn sở hữu. Bạn sẽ có cơ hội nhận
          được cực kỳ nhiều phần thưởng giá trị.
          <br />
          <br />
          <div>
            Dưới đây là danh sách phần thưởng tùy theo số lượng Apostle bạn sở
            hữu:
          </div>
          <br />
          <div style="text-align: center">
            <div>
              <h6>4 Unique Apostle</h6>
              <div>- Dood Plushie Rafle</div>
            </div>
            <div style="padding-top: 10px">
              <h6>6 Unique Apostle</h6>
              <div>- Planet NFT Whitelist [Completed]</div>
            </div>
            <div style="padding-top: 10px">
              <h6>7 Unique Apostle</h6>
              <div>- APRS TGE Whitelist</div>
            </div>
            <div style="padding-top: 10px">
              <h6>8 Unique Apostle</h6>
              <div>- Star NFT Whitelist</div>
            </div>
            <div style="padding-top: 10px">
              <h6>9 Unique Apostle</h6>
              <div>
                - Planet VIP Whitelist [Completed], Free Planet NFT Raffle
              </div>
            </div>
            <div style="padding-top: 10px">
              <h6>10 Unique Apostle</h6>
              <div>
                - APRS TGE Whitelist , Increased APRS Staking Rewards , Free
                APRS Raffle , Discord OG Role
              </div>
            </div>
            <div style="padding-top: 10px">
              <h6>11 Unique Apostle</h6>
              <div>- Star NFT VIP Whitelist, Free Star NFT Raffle</div>
            </div>
            <div style="padding-top: 10px">
              <h6>12 Unique Apostle</h6>
              <div>- CLASSIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-five -->
    <div class="section-five" id="section-seven">
      <img class="bgr-img" src="../assets/img/team.png" alt="" />
      <div class="info-wrapper"></div>
    </div>
  </main>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import LoadingView from "../components/LoadingView.vue";
import index from "../core/index.js";
import CenterIconView from "../components/CenterIconView.vue";

export default {
  components: {
    Splide,
    SplideSlide,
    LoadingView,
    CenterIconView,
  },
  mixins: [index.mixins],
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
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
  methods: {
    toApostleShop() {
      window.open("https://opensea.io/collection/apeironoriginscollection");
    },
  },
};
</script>

<style lang="scss" scoped>
/* apostle-view */

.apostle-view {
  .section-one {
    background-image: url(../assets/img/apostles.png) !important;
  }

  .section-two {
    &::before {
      background-image: url(../assets/img/background/background-apostle.jpg);
    }
  }

  .section-four {
    margin: 0%;

    &::before {
      background-image: url(../assets/img/background/landing-background.jpg);
    }

    .infomation {
      color: #fff8dc;
      width: -webkit-fill-available;
      font-weight: 300;
      padding: 0 20px;
    }
  }

  .section-five {
    .info-wrapper {
      text-align: center;
      img {
        transition: 0.7s;
        border-radius: 50%;

        &:hover {
          box-shadow: 0 0 30px black;
        }
      }
    }
  }

  .section-six {
    height: 1100px !important;

    &::before {
      background-image: url(../assets/img/background/background-apostle2.jpg);
    }
  }
}
</style>
