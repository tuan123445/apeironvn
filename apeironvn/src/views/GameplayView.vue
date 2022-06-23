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
    <!-- <div class="section-two">
      <h1>Armageddon</h1>
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
        Khi hành tinh của bạn đã lớn đến một mức độ nhất định, bạn có thể chọn
        lựa
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
