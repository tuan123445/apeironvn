<template>
  <main class="body-wrapper">
    <!-- section-one -->
    <div class="section-one">
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
    <div class="section-two">
      <h1>Apostle là gì?</h1>
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
        Apostle không khác gì những con pet của bạn trong game. Chúng sẽ hỗ trợ
        bạn chiến đấu
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <video
        id="home-video"
        autoplay
        src="../assets/video/Apostle.mp4"
        loop
        type="video/mp4"
        muted="muted"
      ></video>
    </div>
    <!-- section-four -->
    <div class="section-four">
      <div class="infomation" style="margin-top: 70px">
        <Splide :options="options" style="z-index: 10">
          <SplideSlide class="slide-item">
            <div class="slide-img">
              <img src="../assets/img/apostle/warrior_nft.jpg" />
            </div>
            <div class="slide-info">
              <div class="slide-title">warrior</div>
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
              <div class="slide-title">bard</div>
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
              <div class="slide-title">berserker</div>
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
  </main>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        height: "15rem",
        arrows: false,
        pagination: true,
      },
    };
  },
};
</script>

<style>
.section-one {
  background-image: url(../assets/img/apostles.png) !important;
}
</style>
