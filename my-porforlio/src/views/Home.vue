<template>
  <div class="home">
    <Header />
    <Introduction />
    <Profile />
    <Skill />
    <Experience />
    <Achievement />
    <About />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: () => import("../components/header/index.vue"),
    Introduction: () => import("../components/home/Introduction.vue"),
    Profile: () => import("../components/home/Profile.vue"),
    Skill: () => import("../components/home/Skill.vue"),
    Experience: () => import("../components/home/Experience.vue"),
    Achievement: () => import("../components/home/Achievement.vue"),
    About: () => import("../components/home/About.vue"),
    Footer: () => import("../components/footer/index.vue")
  }
};
</script>
