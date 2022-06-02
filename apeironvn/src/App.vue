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
  mounted() {},
};
</script>
