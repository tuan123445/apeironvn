<template>
  <main class="header">
    <div class="navigation-bar" id="navigation-bar">
      <div class="nav-bar-icon">
        <img src="../../assets/img/logo_resize.png" alt="" width="70" />
      </div>
      <div class="nav-bar-item">
        <RouterLink to="/home">home</RouterLink>
      </div>
      <div class="nav-bar-item">
        <RouterLink to="/apostle">apostle</RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollYValue = window.top.scrollY;
      if (scrollYValue > 10) {
        document.getElementById("navigation-bar").style.opacity = "0.8";
      } else {
        document.getElementById("navigation-bar").style.opacity = "1";
      }
    },
  },
};
</script>
