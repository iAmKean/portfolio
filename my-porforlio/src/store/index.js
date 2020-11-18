import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "../lib/firebase";
import router from "../router";

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
      await firebase.auth
        .signInWithEmailAndPassword(form.email, form.pass)
        .then(data => {
          localStorage.setItem("uid", data.user.uid);
          if (data) {
            dispatch("fetchuserProfile");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async logout({ commit }) {
      await firebase.auth.signOut();
      localStorage.removeItem("uid");
      commit("setUserProfile", {});
    },
    async fetchuserProfile({ commit }) {
      var userProfile = firebase.usersCollection;
      userProfile
        .get()
        .then(data => {
          if (data.exists) {
            commit("setUserProfile", data);
            router.push("/home");
          } else {
            console.log("No such document!");
          }
        })
        .catch(error => {
          console.log("Error getting document:", error);
        });
    }
  },
  modules: {}
});
