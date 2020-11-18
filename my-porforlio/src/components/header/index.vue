<template>
  <div class="header">
    <div class="header-title">
      <a :href="websiteInfo.url">{{ websiteInfo.name }}</a>
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
      websiteInfo: {}
    };
  },
  mounted() {
    this.websiteInfo = this.$store.state.websiteInfo;
  }
};
</script>
