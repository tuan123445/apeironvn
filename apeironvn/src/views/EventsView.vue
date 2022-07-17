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
              <img src="../assets/img/event/podcast.png" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Apeiron Music Podcast</h6>
              <h6 class="apeiron-font">Apeiron Music Podcast</h6>
              <div>Thời gian: 20/07/2022 02:00 PM UTC</div>
              <div>Đối tượng: Toàn bộ cộng đồng</div>
              <div>Phần thưởng: 20 Foonie emblem</div>
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
              <img src="../assets/img/event/pokerAndAMA.jpg" alt="" />
            </div>
            <div class="event-item-information">
              <h6>
                Grand Poker Tournament + Inhouse Fireside #AMA with LoreKeeper
              </h6>
              <h6 class="apeiron-font">
                Grand Poker Tournament + Inhouse Fireside #AMA with LoreKeeper
              </h6>
              <div>Thời gian: 17/07/2022 02:00 PM UTC</div>
              <div>Đối tượng: Toàn bộ cộng đồng</div>
              <div>Phần thưởng: Lên đến 4000$ USDC</div>
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
              <img src="../assets/img/event/AGT.jpeg" alt="" />
            </div>
            <div class="event-item-information">
              <h6>Apeiron's Got Talent</h6>
              <h6 class="apeiron-font">Apeiron's Got Talent</h6>
              <div>Thời gian: 09/07/2022 12:00 PM UTC</div>
              <div>Đối tượng: Toàn bộ cộng đồng</div>
              <div>Phần thưởng: Lên đến Divine Core giá trị 2ETH</div>
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
