<template>
  <div class="home">
    <Header :class="defaultClass.common" />
    <Introduction :class="defaultClass.section" />
    <Profile :class="defaultClass.section" />
    <Skill :class="defaultClass.section" />
    <Experience :class="defaultClass.section" />
    <Achievement :class="defaultClass.section" />
    <About :class="defaultClass.section" />
    <Footer :class="defaultClass.common" />
    <Menu />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: () => import("../components/header/Index.vue"),
    Introduction: () => import("../components/home/Introduction.vue"),
    Profile: () => import("../components/home/Profile.vue"),
    Skill: () => import("../components/home/Skill.vue"),
    Experience: () => import("../components/home/Experience.vue"),
    Achievement: () => import("../components/home/Achievement.vue"),
    About: () => import("../components/home/About.vue"),
    Footer: () => import("../components/footer/Index.vue"),
    Menu: () => import("../components/header/Menu.vue")
  },
  data() {
    return {
      defaultClass: {
        section: "content-section",
        common: "common-section"
      }
    };
  }
};
</script>
