<template>
  <div class="header">
    <div class="header-title">
      {{ webSiteName }}
    </div>
    <div class="header-hamburger">
      <div class="bar"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      webSiteName: '',
    };
  },
  mounted() {
    this.webSiteName = this.$store.state.websiteInfo.name;
  }
};
</script>
