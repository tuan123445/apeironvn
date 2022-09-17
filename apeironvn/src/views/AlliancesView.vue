<template>
  <LoadingView></LoadingView>
  <main class="body-wrapper alliances-view">
    <!-- section-one -->
    <div class="section-one" id="section-one">
      <h1 class="title">
        <span>A</span>
        <span>L</span>
        <span>L</span>
        <span>I</span>
        <span>A</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
      </h1>
    </div>
    <!-- section-two -->
    <div class="section-two" id="section-two">
      <div class="slide-from-left">
        <h1>Alliances là gì?</h1>
        <h2 class="apeiron-font">Alliances</h2>
        <CenterIconView></CenterIconView>
        <div class="infomation">
          Alliances giống như Guild trong các game khác. Nó là tập hợp của các
          người chơi lại với nhau để có thể tham gia nhiều event hơn như Boss
          thế giới, esports event. Alliances sẽ có members cap(số lượng người
          tham gia vào guild) cơ bản là 10 người. Nhưng cứ mỗi 1 star guild bạn
          sở hữu thì số lượng members cap sẽ được tăng lên 10 members cho mỗi 1
          Star. Cái hay ở đây là Alliances sẽ sở hữu các chòm sao(Constellation)
          thứ mà chứa các Star. Và khi Alliances sở hữu 1 chòm sao thì những
          người trong Alliances đó sẽ nhận được buff(Zodiac Buff) từ các
          Constellation. Nói dễ hiểu thì sẽ là buff của guild. Sẽ có giới hạn
          Star và Constellation có thể sở hữu trong 1 Alliance. Max là 100 Star
          hoặc 13 Constellations.
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
};
</script>

<style lang="scss" scoped>
.alliances-view {
  .section-one {
    background-image: url(../assets/img/alliance.jpg) !important;
  }

  .section-two {
    height: 800px !important;
  }
}
</style>
