/* eslint-disable prettier/prettier */
export default {
  mounted() {
    setTimeout(() => {
      document.getElementById("loader").classList.add("fadeout");
    }, 3000);
  },
  data() {
    return {
      loading: true,
    };
  },
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
      window.open("https://t.me/apeiron_vietnam", "_blank");
    },
    goTwitter() {
      window.open("https://twitter.com/ApeironVN", "_blank");
    },
    goOfficial() {
      window.open("https://apeironnft.com/", "_blank");
    }
  },
};