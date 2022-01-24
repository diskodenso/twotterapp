
export const UserModule = {
    namespaced: true,

    state: {
        user: null,
    },
    // mutations are functions that effect the state- mutations directly change the state
    mutations: {
        // mutations = all caps 
        // when we run this mutation in an action we passing 
        //in a user and set the state object to the user we passing in
        SET_USER(state, user) {
            state.user = user;
        }
    },
    // actions are functions that you call throughout your application that call mutations
    actions: {
        setUser({ commit }, user) {
            commit(`SET_USER`, user);
        }
    }
}