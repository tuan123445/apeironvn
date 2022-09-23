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
          <div v-for="eventItem in eventList" :key="eventItem.title">
            <div class="event-item">
              <div class="event-item-img">
                <img :src="eventItem.linkImg" alt="" />
              </div>
              <div class="event-item-information">
                <h6>{{ eventItem.title }}</h6>
                <h6 class="apeiron-font">{{ eventItem.title }}</h6>
                <div>Thời gian: {{ eventItem.time }}</div>
                <div>Đối tượng: {{ eventItem.register }}</div>
                <div>Phần thưởng: {{ eventItem.prizes }}</div>
                <div>
                  Thông tin chi tiết:
                  <span
                    ><a :href="eventItem.detail" target="_blank">
                      discord.gg/apeironnft
                    </a></span
                  >
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LoadingView from "../components/LoadingView.vue";
import index from "../core/index.js";
import Overseer_cup from "../assets/img/event/Overseer_cup.png";
import grand_prix from "../assets/img/event/grand_prix.png";
import valorant_event from "../assets/img/event/valorant_event.png";

export default {
  components: {
    LoadingView,
  },
  mixins: [index.mixins],
  created() {
    this.scrollToTop();
  },
  data() {
    return {
      eventList: [
        {
          title: "Grand Prix",
          time: "Từ 09/09/2022 đến 28/09/2022",
          register: "Tất cả các Dood",
          prizes: "Tổng phần thưởng lên tới 15ETH",
          detail:
            "https://discord.com/channels/922326984497954857/922336631820787732/1017538819928625162",
          linkImg: grand_prix,
        },
        {
          title: "The Overseers Cup",
          time: "Thứ 6 23/09/2022 01:00 PM +UTC",
          register: "Tất cả các Dood",
          prizes: "soul, Foonie Emblem NFT, Luna Flag NFT",
          detail:
            "https://discord.com/channels/922326984497954857/989018926765723658/1020271649905455134",
          linkImg: Overseer_cup,
        },
        {
          title: "Apeiron Mini Guild War II - Valorant",
          time: "Thứ 6 26/09/2022 02:00 PM +UTC",
          register: "Tất cả các Dood",
          prizes: "Tổng phần thưởng lên tới 3000USD",
          detail:
            "https://discord.com/channels/922326984497954857/989018926765723658/1022068690184831046",
          linkImg: valorant_event,
        },
      ],
    };
  },
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
