export default function guest({ next, store }) {
    console.log("guest")
    if (store.getters.loggedIn) {
        return next({
            name: "posts"
        })
    }

    return next()
}