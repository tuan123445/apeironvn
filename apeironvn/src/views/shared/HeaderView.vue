<template>
  <main class="header" id="menu-pc">
    <div class="navigation-bar" id="navigation-bar">
      <div class="nav-bar-icon">
        <img src="../../assets/img/logo_resize.png" alt="" width="50" />
      </div>
      <div v-for="item in menuList" :key="item.name">
        <div class="nav-bar-item">
          <RouterLink :data-text="item.name" :to="item.name">{{
            item.name
          }}</RouterLink>
        </div>
      </div>
    </div>
  </main>
  <main class="header" id="menu-phone">
    <div class="menu-area">
      <div class="menu-btn" @click="menuClicked">
        <div class="menu-btn_burger"></div>
      </div>
      <div class="menu-items">
        <div class="phone-menu-icon">
          <img src="../../assets/img/logo_resize.png" alt="" width="50" />
        </div>
        <div class="menu-items-wrapper">
          <div v-for="item in menuList" :key="item.name">
            <div class="menu-item">
              <RouterLink :to="item.name" @click="itemSelected">{{
                item.name
              }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      menuOpen: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.getMenuList();
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
    getMenuList() {
      console.log(this.$router);
      this.$router.options.routes.forEach((item) => {
        if (item.name != "") this.menuList.push(item);
      });
    },
    menuClicked() {
      const menuBtn = document.getElementsByClassName("menu-btn")[0];
      const menuWrapper = document.getElementsByClassName("menu-items")[0];

      if (!this.menuOpen) {
        menuBtn.classList.add("opened");
        menuWrapper.classList.add("menu-showed");
        this.menuOpen = true;
      } else {
        menuBtn.classList.remove("opened");
        menuWrapper.classList.remove("menu-showed");
        this.menuOpen = false;
      }
    },
    itemSelected() {
      this.menuClicked();
    },
  },
};
</script>
