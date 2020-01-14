export default function auth({ next, store }) {
  console.log(Object.values(store.getters)[2].loggedIn);
  // console.log(store.getters['login/auth']);
  if (!Object.values(store.getters)[2].loggedIn) {
    return next({
      name: "login"
    });
  }

  return next();
}
