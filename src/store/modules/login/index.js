import state from "./_state.js"
import getters from "./_getters"
import actions from "./_actions"
import mutations from "./_mutations"


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}