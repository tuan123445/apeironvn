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
  },
};