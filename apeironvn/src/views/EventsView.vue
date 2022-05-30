<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper events-view">
    <!-- section-one -->
    <div class="section-one">
      <h1 class="title">
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>S</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-ten">
      <div class="events-wrapper">
        <h1>Sự kiện gần đây</h1>
        <hr />
        <div class="event-list">
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/event3.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>DaDi Apeiron T-Shirt Design Contest.</h6>
              <div>Thời gian: 01/06/2022 ~ 15/06/2022.</div>
              <div>Đối tượng: DADis.</div>
              <div>Cách thức tham gia: Thiết kế T-shirt về Apeiron.</div>
              <div>
                Chú thích:
                <div>
                  - Nếu bạn tạo ra được hình ảnh có độ phân giải 150-300 DPI thì
                  càng được điểm cao
                </div>
                <div>
                  - Chúng tôi khuyên bạn (nhưng không bắt buộc) nên làm thiết kế
                  bao gồm biểu tượng của Apeiron và các hình ảnh đại diện cho
                  cách chơi Apeiron
                </div>
                <div>- Kích thước tệp phải dưới 50mb</div>
                <div>
                  Vui lòng xem liên kết dưới đây để xem DTG Printing có thể làm
                  được những gì trên Printful.com, đối tác được chúng tôi lựa
                  chọn để in áo thun. Các thiết kế có thể được áp dụng cho mặt
                  trước, mặt sau, nhãn bên ngoài, nhãn bên trong, ống tay trái
                  và ống tay phải.
                  <a
                    href="https://www.printful.com/generator/mens/t-shirts/unisex-staple-t-shirt-bella-canvas-3001"
                    >(Printful)</a
                  >
                </div>
                <div>
                  Xin lưu ý bài dự thi phải được gửi cho chúng tôi dưới dạng tệp
                  hình ảnh cho từng phần của áo, lý tưởng nhất là bao gồm hình
                  ảnh tác phẩm của bạn trên mẫu áo phông. Cũng vui lòng nêu rõ
                  màu áo mà bạn muốn thiết kế của mình được làm nổi bật.
                </div>
                <div>
                  Vui lòng không tải bài dự thi của bạn lên Printful.com. Chúng
                  tôi sẽ không chấp nhận các bài dự thi từ trang Printful.com.
                </div>
              </div>
              <div>
                Phần thưởng: 200USDC + Nếu thiết kế của bạn được chọn và bán,
                bạn sẽ nhận được hoa hồng trên mỗi lần bán.
              </div>
              <div>
                Thông tin chi tiết:
                <span
                  ><a href="https://discord.gg/UAJsWwZygr" target="_blank">
                    discord.gg/apeironnft
                  </a></span
                >
              </div>
            </div>
          </div>
          <hr />
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/event1.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Aperon x Zombue Club Poker Night.</h6>
              <div>Thời gian: 04/06/2022 1PM UTC.</div>
              <div>
                Đối tượng: Những planet holder và những người sở hữu role
                ZombieDood.
              </div>
              <div>Phần thưởng: Có thể nhận được lên đến 2000 USDC.</div>
              <div>
                Thông tin chi tiết:
                <span
                  ><a href="https://discord.gg/UAJsWwZygr" target="_blank">
                    discord.gg/apeironnft
                  </a></span
                >
              </div>
            </div>
          </div>
          <hr />
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/event2.jpg" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Inhouse fireside AMA with LoreKeeper.</h6>
              <div>Thời gian: 29/05/2022 2PM UTC.</div>
              <div>Đối tượng: Toàn bộ Doodie.</div>
              <div>
                Cách thức tham gia: Đặt câu hỏi và câu đùa hay nhất cho
                LORDKEEPER.
              </div>
              <div>
                Phần thưởng: 10 người có câu hỏi và câu đùa hay nhất sẽ nhận
                được 50USDC.
              </div>
              <div>
                Thông tin chi tiết:
                <span
                  ><a href="https://discord.gg/UAJsWwZygr" target="_blank">
                    discord.gg/apeironnft
                  </a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-ten -->
    <div class="section-ten">
      <div class="body-wrapper">
        <div class="icon-wrapper">
          <img
            class="icon"
            src="../assets/img/discord_icon.png"
            @click="goDiscord"
          />
          <img
            class="icon"
            src="../assets/img/facebook_icon.png"
            @click="goFacebook"
          />
          <img src="../assets/img/logo_resize.png" @click="goOfficial" />
          <img
            class="icon"
            src="../assets/img/telegram_icon.png"
            @click="goTele"
          />
          <img
            class="icon"
            src="../assets/img/twitter_icon.png"
            @click="goTwitter"
          />
        </div>
        <div class="join">join us</div>
      </div>
    </div>
  </main>
</template>

<script>
import LoadingView from "../components/LoadingView.vue";
import index from "../core/index.js";

export default {
  components: {
    LoadingView,
  },
  mixins: [index.mixins],
  created() {
    this.scrollToTop();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@media (min-width: 200px) {
  .event-item {
    display: block;
    .event-item-img {
      width: 100%;
    }

    .event-item-information {
      padding: 0;
    }
  }
}
@media (min-width: 400px) {
}
@media (min-width: 768px) {
}
@media (min-width: 900px) {
  .event-item {
    display: flex;

    .event-item-img {
      display: flex;
      width: 40%;
    }

    .event-item-information {
      padding: 0 50px;
    }
  }
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
}

.events-view {
  .section-one {
    background-image: url(../assets/img/event.jpeg) !important;
  }

  .section-ten {
    background-image: url(../assets/img/landing-background-img-1.jpg);

    .events-wrapper {
      padding: 200px 20%;
      width: 100%;

      h1 {
        color: #fff;
      }

      hr {
        margin: 2rem 0 1rem 0;
        color: #fff;
        border: 0;
        border-top: 4px solid;
        opacity: 0.5;
      }

      .event-list {
        width: 100%;
        height: fit-content;

        .event-item {
          width: 100%;
          height: fit-content;

          .event-item-img {
            img {
              width: -webkit-fill-available;
              object-fit: cover;
              box-shadow: 0 0 20px black;
            }
          }

          .event-item-information {
            color: #fff;

            h6 {
              padding-top: 20px;
              text-transform: uppercase;
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
}
</style>
