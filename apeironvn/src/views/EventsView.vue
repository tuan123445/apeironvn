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
              <img src="../assets/img/event/game.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Who is the best</h6>
              <div>Thời gian: Đang cập nhật</div>
              <div>Đối tượng: Toàn bộ cộng đồng Việt Nam</div>
              <div>Phần thưởng: Một Apostle NFT Hunter</div>
              <div>Thông tin chi tiết:</div>
              <div>
                Hiện tại bọn mình đang thống nhất với cộng đồng nên tổ chức game
                gì theo dạng react các game có sẵn. Vì vậy nếu bạn muốn tham gia
                game gì hãy vào đường link dưới đây và thả 1 react cho game bạn
                muốn được tổ chức nhé
              </div>
              <a
                href="https://discord.com/channels/922326984497954857/947498231271682118/988092957414526986"
                target="_blank"
                >Discord</a
              >
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
          <!-- event one -->
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/plush.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>PLUMPY PLUSHQUEST</h6>
              <div>Thời gian: từ 23/06/2022 đến 07/07/2022</div>
              <div>
                Đối tượng: Bạn phải có 3 role dưới đây để có thể tham gia event
              </div>
              <div>1. Chat lên level 5 để có thể sở hữu role @Dooder</div>
              <div>
                2. Alignment của bạn phải +5 hoặc -5 để có thể sở hữu 1 trong 2
                role @GOODIETWOSHOES hoặc @IMP
              </div>
              <div>3. Sở hữu ít nhất 4 apostle để có role @TeamOrigins</div>
              <div>Phần thưởng:</div>
              <div>- Một chú gấu bông Dood đáng yêu</div>
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
          <!-- event one -->
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/trivia.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Đố vui về Celestial Conjunction</h6>
              <div>Thời gian: 18/06/2022 2PM UTC.</div>
              <div>Đối tượng: Toàn bộ Doodies</div>
              <div>Phần thưởng:</div>
              <div>- Giải nhất: Mythic Primeval Planet NFT</div>
              <div>- Giải 2-4: 50$USDC</div>
              <div>- Giải 4-10: 20$USDC</div>
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
          <!-- event two -->
          <div class="event-item">
            <div class="event-item-img">
              <img src="../assets/img/event/askAndAnswerContest.jpg" alt="" />
            </div>
            <div class="event-item-information">
              <h6>ASK and ANSWER contest.</h6>
              <div>Thời gian: 13/05/2022 ~ 19/06/2022 .</div>
              <div>Đối tượng: Doodies Việt Nam.</div>
              <div>
                Mỗi ngày vào một khoảng thời gian bất kỳ trên discord. Mình sẽ
                đặt một câu hỏi về Apeiron. Mỗi ngày ba câu hỏi. Nếu ai có câu
                trả lời đúng và nhanh nhất sẽ là người chiến thắng.
              </div>
              <div>
                Điều cần làm? Bạn hãy học và tìm kiếm mọi thông tin về Apeiron.
                Có thể xem trên trang chủ hoặc
                <a
                  href="https://whitepaper.apeironnft.com/apeironnft/ascension-what-is-apeiron"
                  target="_blank"
                  >White Paper</a
                >
                hoặc trên
                <a
                  href="https://apeironabridged.gitbook.io/apeironabridged/"
                  target="_blank"
                  >Gitbook</a
                >
              </div>
              <div>
                Phần thưởng: Mỗi câu trả lời đúng bạn sẽ nhân được 10$USDC. Phần
                thưởng sẽ được trao kể từ sao khi sự kiện kết thúc.
              </div>
            </div>
          </div>
        </div>
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
    background-position: center !important;
    background-attachment: fixed !important;

    .events-wrapper {
      padding: 200px 20%;
      width: 100%;

      h1 {
        color: #fff8dc;
      }

      hr {
        margin: 2rem 0 1rem 0;
        color: #fff8dc;
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
            color: #fff8dc;

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
