<template>
  <main class="header" id="menu-pc">
    <div class="navigation-bar" id="navigation-bar">
      <div class="nav-bar-icon">
        <img src="../../assets/img/logo_resize.png" alt="" width="50" />
      </div>
      <div v-for="item in menuList" :key="item.name">
        <div class="nav-bar-item">
          <RouterLink
            v-if="!item.meta.dropdown"
            :data-text="item.name"
            :to="item.name"
            >{{ item.name }}</RouterLink
          >
        </div>
      </div>
      <div class="drop-down">
        <div class="nav-bar-item">
          <a class="more" data-text="more">more</a>
        </div>
        <div class="more-dropdown-item-list">
          <div
            class="more-dropdown-item"
            v-for="dropdownItem in dropdownList"
            :key="dropdownItem.name"
          >
            <RouterLink
              :data-text="dropdownItem.name"
              :to="dropdownItem.name"
              >{{ dropdownItem.name }}</RouterLink
            >
          </div>
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
              <RouterLink
                v-if="!item.meta.dropdown"
                :to="item.name"
                @click="itemSelected"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
          <div>
            <div class="menu-item" @click="dropdownClick">
              <a data-text="more">
                more
                <span class="arrow">
                  <i class="mdi mdi-chevron-down"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="dropdown-item">
            <div
              class="menu-item"
              v-for="dropdownItem in dropdownList"
              :key="dropdownItem.name"
            >
              <RouterLink :to="dropdownItem.name" @click="itemSelected">{{
                dropdownItem.name
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
      dropdownList: [],
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
      this.$router.options.routes.forEach((item) => {
        if (item.meta.dropdownItem) this.dropdownList.push(item);
        if (item.name != "" && !item.meta.dropdown) this.menuList.push(item);
      });
      console.log(this.dropdownList);
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
    dropdownClick() {
      let arrow = document.getElementsByClassName("arrow");
      let dropdownItem = document.getElementsByClassName("dropdown-item");
      if (arrow[0].classList.length < 2) {
        dropdownItem[0].style.display = "block";
        arrow[0].classList.add("dropdown-active");
      } else {
        dropdownItem[0].style.display = "none";
        arrow[0].classList.remove("dropdown-active");
      }
    },
  },
};
</script>
