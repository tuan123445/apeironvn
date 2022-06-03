<template>
  <HeaderView></HeaderView>
  <RouterView class="contents" />
  <FooterView></FooterView>
</template>
<script>
import HeaderView from "./views/shared/HeaderView.vue";
import FooterView from "./views/shared/FooterView.vue";
export default {
  components: {
    HeaderView: HeaderView,
    FooterView: FooterView,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
