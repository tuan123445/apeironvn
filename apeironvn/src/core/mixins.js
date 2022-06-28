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
  created() {
    window.addEventListener("scroll", this.handleScrollForSlide);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScrollForSlide);
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
    handleScrollForSlide() {
      let scrollYValue = window.top.scrollY;
      console.log(scrollYValue);
      if (scrollYValue > 400) {
        console.log(scrollYValue);
        document.getElementById("slide-from-left").classList.add("slide-from-left-active");
      }
      if (scrollYValue > 1500) {
        document.getElementById("slide-from-right").classList.add("slide-from-right-active");
      }
    }
  },
};