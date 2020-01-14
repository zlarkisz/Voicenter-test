import Vue from "vue";
import Vuex from "vuex";
import posts from "@/store/modules/posts/index";
import login from "@/store/modules/login/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    login
  }
});
