import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule
  }
})


  // we are storing user data in our "store"
  // mutations are functions that effect the state- mutations directly change the state
// mutations = all caps 
  // when we run this mutation in an action we passing 
  //in a user and set the state object to the user we passing in
  // actions are functions that you call throughout your application that call mutations