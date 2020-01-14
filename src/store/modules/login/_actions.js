export default {
  loggedIn({ commit, getters }, payload) {
    try {
      console.log(payload.email);
      commit("setLoggedIn", payload.email === "q" ? true : false);
      console.log(getters);
    } catch (error) {
      console.log(error);
    }
  }
};
