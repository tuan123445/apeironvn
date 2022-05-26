<template>
  <LoadingView></LoadingView>
  <HeaderView></HeaderView>
  <RouterView class="contents" />
</template>
<script>
import LoadingView from "./components/LoadingView.vue";
import HeaderView from "./views/shared/HeaderView.vue";
export default {
  components: {
    LoadingView: LoadingView,
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
