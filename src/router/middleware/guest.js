export default function guest({ next, store }) {
  console.log(Object.values(store.getters)[2].loggedIn);
  if (Object.values(store.getters)[2].loggedIn) {
    return next({
      name: "posts"
    });
  }

  return next();
}
