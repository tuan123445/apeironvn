/* eslint-disable prettier/prettier */
export default {
  mounted() {
    this.load();
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    load() {
      setTimeout(() => {
        document.getElementById("loader").classList.add("fadeout");
      }, 3000);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};