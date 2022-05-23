<template>
  <LoadingView></LoadingView>
  <RouterView class="contents" />
</template>
<script>
import LoadingView from "./components/LoadingView.vue";
export default {
  components: {
    LoadingView: LoadingView,
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
