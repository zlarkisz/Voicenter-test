import ApiService from "./apiService";

export default {
  fetchItems: () =>
    ApiService.get({
      url: "posts"
    }),
  fetchItem: ({ id }) =>
    ApiService.get({
      url: `posts/${id}`
    })
};
