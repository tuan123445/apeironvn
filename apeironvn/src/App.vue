<template>
  <HeaderView></HeaderView>
  <RouterView class="contents" />
</template>
<script>
import HeaderView from "./views/shared/HeaderView.vue";
export default {
  components: {
    HeaderView: HeaderView,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("loader").classList.add("fadeout");
    }, 3000);
  },
};
</script>
