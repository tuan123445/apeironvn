<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper gameplay-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>G</span>
        <span>A</span>
        <span>M</span>
        <span>E</span>
        <span>P</span>
        <span>L</span>
        <span>A</span>
        <span>Y</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-four">
      <h1>Eden là gì?</h1>
      <h2 class="apeiron-font">Eden</h2>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Eden có bốn nguyên tố chính: lửa, gió, nước và đất. Thông qua bốn nguyên
        tố này người chơi có thể tự do kết hợp để tạo ra phép thuật khác nhau
        giúp định hình thế giới của bạn. Và không những thế các Doods của bạn
        cũng sẽ phản hồi theo từng phép thuật. Bạn có thể dùng nước để có thể
        tạo mưa giúp các doods trồng trọt. Dùng đất để phá vỡ các ngọn núi. Hoặc
        nếu có dood nào khiến bạn không vừa lòng bạn hoàn toàn có thể dùng lửa
        để ném quả cầu lửa vào chúng. Bạn cũng có thể kết hợp được các nguyên tố
        lại với nhau để có thể tạo ra được nguyên tố mới tương tác với môi
        trường và xã hội Dood của bạn.
      </div>
    </div>
    <!-- section-three -->
    <div class="section-five">
      <div class="half-body">
        <div class="right-side">
          <img src="../assets/img/Good.jpg" />
        </div>
        <div class="left-side">
          <img src="../assets/img/Evil.jpg" />
        </div>
      </div>
    </div>
    <!-- section-four -->
    <div class="section-four">
      <h1>Alignment</h1>
      <h2 class="apeiron-font">Alignment</h2>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Mỗi khi sử dụng Eden để niệm phép, bản ngã của bạn sẽ suy vong hoặc tăng
        tiến, hướng thiện hoặc tà ác cho tới khi đạt cảnh giới bản ngã. Khi đó
        thế giới sẽ trở thành địa ngục trần gian hoặc thiên đường trên mặt đất,
        việc này sẽ giúp việc mở ra các kĩ năng, nhiệm vụ và ngoại hình mới cho
        thần dân Dood của bạn và biết đâu sẽ một vài cá thể ưu việt hoặc kỳ quan
        sẽ xuất hiện. Liệu bạn sẽ chọn hướng đi nào cho hành tinh và thần dân
        của mình?
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <img class="bgr-img" src="../assets/img/bbqparty_final.png" alt="" />
    </div>
    <!-- section-four -->
    <div class="section-two">
      <h1>Armageddon</h1>
      <h2 class="apeiron-font">Armageddon</h2>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        Khi hành tinh của bạn đã lớn đến một mức độ nhất định, bạn sẽ có hai
        hướng đi. Một là bạn có thể lựa chọn tiếp tục chơi hành tinh của bạn.
        Hai là bạn có thể hy sinh hành tinh. Nếu bạn lựa chọn tiếp tục thì bạn
        sẽ được cấp tiền thưởng lâu dài và một lượng nhỏ Soul Gem, trong khi
        trường hợp hai thì bạn sẽ nhận được một lượng lớn soul gem (và hướng bản
        ngã của bạn sang một chút tà ác).
      </div>
    </div>
    <!-- section-three -->
    <div class="section-three">
      <img class="bgr-img" src="../assets/img/gameplay.jpeg" alt="" />
    </div>
    <!-- section-four -->
    <div class="section-six">
      <h1>PvE & PvP</h1>
      <h2 class="apeiron-font">PvE PvP</h2>
      <CenterIconView></CenterIconView>
      <div class="infomation">
        <h3>PvE:</h3>
        <div>
          Khi bạn đã chuẩn bị sẵn sàng, bạn và các Apostle của mình có thể khám
          phá các Dungeon để có thể thu thập được vật phẩm quý hiếm cũng như
          ANIMA. Sẽ có ba loại Dungeon. Dirac Sea (Dungeon thường) là nơi bạn có
          thể giải cứu các linh hồn của Dood Apostle và mời họ vào team của bạn.
          Manifold Paths of Dirac (Dungeon cao cấp) độ khó sẽ tăng dần và phần
          thưởng cũng sẽ tăng. Dungeon Worlds (Dungeon ngẫu nhiên) sẽ xuất hiện
          ngãu nhiên giống như nhưng nhiệm vụ phụ của bạn.
        </div>
        <hr />
        <h3>PvP:</h3>
        <div>
          Khi người chơi đã tập hợp đầy đủ Apostle bạn có thể đưa chúng vào
          Hourglass Coliseum (một đấu trường giữa các thiên hà) để so tài. Đấu
          trường sẽ là một trải nghiệm 1v1, nơi bạn có thể so tài các Apostle và
          Avatar của bạn với người chơi khác. Người chơi có thứ hạng cao cuối
          mùa sẽ được nhận nhiều phần thưởng hấp dẫn. Chúng tôi sẽ theo dõi sát
          sao meta PvP và đưa ra các bản sửa để đảm bảo trận chiến được công
          bằng nhất.
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
  mixins: [index.mixins],
  components: {
    LoadingView,
    CenterIconView,
  },
  data() {
    return {};
  },
  created() {
    this.scrollToTop();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  .section-six {
    .infomation {
      .eden-img {
        img {
          width: 100%;
        }
      }
    }
  }
}
@media (min-width: 400px) {
  .section-six {
    .infomation {
      .eden-img {
        img {
          width: 300px;
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .section-five {
    .right-side,
    .left-side {
      width: 50%;
    }
  }

  .section-six {
    .infomation {
      .eden-img {
        img {
          width: 400px;
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

.gameplay-view {
  .section-one {
    background-image: url(../assets/img/Settlement.png) !important;
  }

  .section-five {
    .right-side,
    .left-side {
      img {
        object-fit: unset;
      }
    }
  }

  .section-six {
    .infomation {
      .eden-img {
        img {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
