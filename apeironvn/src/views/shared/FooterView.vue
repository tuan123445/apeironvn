<template>
  <main class="body-wrapper">
    <!-- section-seven -->
    <div class="section-ten">
      <div class="body-wrapper">
        <div class="icon-wrapper">
          <img
            class="icon"
            src="../../assets/img/discord_icon.png"
            @click="goDiscord"
          />
          <img
            class="icon"
            src="../../assets/img/facebook_icon.png"
            @click="goFacebook"
          />
          <img src="../../assets/img/logo_resize.png" @click="goOfficial" />
          <img
            class="icon"
            src="../../assets/img/telegram_icon.png"
            @click="goTele"
          />
          <img
            class="icon"
            src="../../assets/img/twitter_icon.png"
            @click="goTwitter"
          />
        </div>
        <div class="join">join us</div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goDiscord() {
      window.open("https://discord.gg/UAJsWwZygr", "_blank");
    },
    goFacebook() {
      window.open("https://www.facebook.com/ApeironVN", "_blank");
    },
    goTele() {
      window.open("https://t.me/apeiron_official", "_blank");
    },
    goTwitter() {
      window.open(
        "https://twitter.com/ApeironNFT?s=20&t=HFROqFe61rWLuJr4IZnYow",
        "_blank"
      );
    },
    goOfficial() {
      window.open("https://apeironnft.com/", "_blank");
    },
  },
};
</script>
