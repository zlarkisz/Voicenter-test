import service from "@/services/postsService";

export default {
  async fetchItems({ commit }) {
    try {
      const { data } = await service.fetchItems();
      console.log(data);
      commit("setPosts", data);
    } catch (error) {
      console.log(error);
    }
  },

  async fetchPost({ commit }, id) {
    try {
      const { data } = await service.fetchItem({ id });
      console.log(data);
      commit("setItem", data);
    } catch (error) {
      console.log(error);
    }
  }
};
