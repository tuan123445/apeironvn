<template>
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
    <div class="section-six">
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
        Eden chính là biểu tượng bên dưới. Sẽ có bốn nguyên tố chính: lửa, gió,
        nước và đất. Thông qua bốn nguyên tố này người chơi có thể tự do kết hợp
        để tạo ra phép thuật khác nhau giúp định hình thế giới của bạn. Và không
        những thế các Doods của bạn cũng sẽ phản hồi theo từng phép thuật. Bạn
        có thể dùng nước để có thể tạo mưa giúp các doods trồng trọt. Dùng đất
        để phá vỡ các ngọn núi. Hoặc nếu có dood nào khiến bạn không vừa lòng
        bạn hoàn toàn có thể dùng lửa để ném quả cầu lửa vào chúng. Bạn cũng có
        thể kết hợp được các nguyên tố lại với nhau để có thể tạo ra được nguyên
        tố mới tương tác với môi trường và xã hội Dood của bạn.
        <div class="eden-img" style="text-align: center">
          <img src="../assets/img/Good.jpg" />
        </div>
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
        Khi bạn dùng Eden để tạo phép Alignment của bạn sẽ chuyển sang hai hướng
        khác nhau đó là tốt hoặc ác. Khi bạn đối xử với các doods bằng lòng nhân
        từ, Alignment của bạn sẽ trở nên tốt hơn, mở ra các kỹ năng, nhiệm vụ
        đặc biệt. Còn ngược lại nếu bạn liên tục trừng phạt các doods thì
        Alignment của bạn sẽ chuyển thành ác - cũng có các kỹ năng, nhiệm vụ của
        riêng nó sẽ được mở và thế giới của bạn sẽ dần trở thành địa ngục trần
        gian. Nếu bạn tối đa hóa Alignment của bạn thì bạn sẽ có cơ hội để Dood
        của bạn xây dựng một hành tinh đặc biệt cho những cá thể Dood độc nhất
        xuất hiện.
      </div>
    </div>
  </main>
</template>

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
