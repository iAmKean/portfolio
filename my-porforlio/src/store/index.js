import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "../lib/firebase";
// import router from "./router";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      console.log(form);
      await firebase.auth
        .signInWithEmailAndPassword(form.email, form.pass)
        .then(data => {
          dispatch("fetchuserProfile", data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async logout({ commit }) {
      await firebase.auth.signOut();
      commit("setUserProfile", {});
    },
    async fetchuserProfile({ commit }, user) {
      console.log(user);
      // const userProfile = await firebase.usersCollection(user.id).get();
      commit("setUserProfile", user);
    }
  },
  modules: {}
});
