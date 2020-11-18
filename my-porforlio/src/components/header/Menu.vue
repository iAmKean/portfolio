<template>
  <div class="menu">
    <div class="menu-items">
      <div class="item" v-for="(item, itemKey) in menuItems" :key="itemKey">
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        "Introduction",
        "Profile",
        "Skills",
        "Experience",
        "Achievements",
        "About"
      ]
    };
  },
};
</script>
