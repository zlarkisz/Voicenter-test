export default function auth({ next, store }) {
    console.log("auth")
    if (!store.getters.loggedIn) {
        return next({
            name: "login"
        })
    }

    return next()
}