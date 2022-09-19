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

      // section
      let sectionTwo = document.getElementsByClassName("section-two")[0];
      let sectionFour = document.getElementsByClassName("section-four")[0];
      let sectionSix = document.getElementsByClassName("section-six")[0];
      let sectionEight = document.getElementsByClassName("section-eight")[0];

      if (sectionTwo) {
        let valueOfSectionOne = this.getValueOfSection("section-one");
        sectionTwo = sectionTwo.getElementsByClassName("slide-from-left");
        if (sectionTwo.length != 0) {
          if (scrollYValue > valueOfSectionOne) {
            if (!sectionTwo[0].classList.contains("slide-from-left-active")) {
              sectionTwo[0].className += " slide-from-left-active";
            }
          } else {
            sectionTwo[0].classList.remove("slide-from-left-active");
          }
        }
      }

      if (sectionFour) {
        let valueOfSectionThree = this.getValueOfSection("section-three");
        sectionFour = sectionFour.getElementsByClassName("slide-from-right");
        if (sectionFour.length != 0) {
          if (scrollYValue > valueOfSectionThree) {
            if (!sectionFour[0].classList.contains("slide-from-right-active")) {
              sectionFour[0].className += " slide-from-right-active";
            }
          } else {
            sectionFour[0].classList.remove("slide-from-right-active");
          }
        }
      }

      if (sectionSix) {
        let valueOfSectionFive = this.getValueOfSection("section-five");
        sectionSix = sectionSix.getElementsByClassName("slide-from-left");
        if (sectionSix.length != 0) {
          if (scrollYValue > valueOfSectionFive) {
            if (!sectionSix[0].classList.contains("slide-from-left-active")) {
              sectionSix[0].className += " slide-from-left-active";
            }
          } else {
            sectionSix[0].classList.remove("slide-from-left-active");
          }
        }
      }

      if (sectionEight) {
        sectionEight = sectionEight.getElementsByClassName("slide-from-right");
        let valueOfSectionSeven = this.getValueOfSection("section-seven");
        if (sectionEight.length != 0) {
          if (scrollYValue > valueOfSectionSeven) {
            if (!sectionEight[0].classList.contains("slide-from-right-active")) {
              sectionEight[0].className += " slide-from-right-active";
            }
          } else {
            sectionEight[0].classList.remove("slide-from-right-active");
          }
        }

      }
    },
    getValueOfSection(section) {
      var sum;
      var listSection = ["section-one", "section-two", "section-three", "section-four", "section-five", "section-six", "section-seven", "section-eight", "section-nine"];
      var indexPosition = listSection.indexOf(section);
      if (document.getElementById(section)) {
        sum = document.getElementById(section).offsetHeight / 1.5;
      }
      for (var i = 0; i < indexPosition; i++) {
        if (document.getElementById(section)) {
          sum += document.getElementById(listSection[i]).offsetHeight;
        }
      }
      return sum;
    }
  },
};