<!-- In VUE we have SINGLE FILE COMPONENTS whichs keep // everything in one file
and split in different sections // template = HFTML -->

<template>
  <div class="user-profile_sidebar">
    <div class="user-profile_user-panel" />
    <h1 class="user-profile_username">@{{ state.user.username }}</h1>
    <div class="user-profile_admin-badge" v-if="state.user.isAdmin">
    Admin
    </div>
    <div class="user-profile_follower-count">
      <strong>Followers:</strong>{{ state.followers }}
    </div>
    <CreateTwootPanel @add-twoot="addTwoot"/>
  </div>
  </div>
  <div class="user-profile_twoots-wrapper">
    <TwootItem 
    v-for="twoot in state.user.twoots" 
    :key="twoot.id" 
    :username="state.user.username" 
    :twoot="twoot" 
    />
  </div>
</template>

<!-- script = JavaScript - Vue Interface -->

<script>
import {reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import {users} from '../assets/users';
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from '../components/CreateTwootPanel';

export default {
  name: "UserProfile",
  components: { CreateTwootPanel, TwootItem },
  setup(props, ctx) {
const route = useRoute();
const userId = computed(()=>route.params.userId);// we get the userId for the url from here
// if (userId) fetchUserFromApi(userId) - so you can fetch userprofile if user exists

    const state = reactive({
          followers: 0,
      user: users[userId.value -1] || users[0]; 
      // userId technically starts at 1 so -1 and array starts at -1 so 0
      // user [1] so it gets always the first one in the list when there is no user to match by id
    })
      function addTwoot(twoot){
        state.user.twoots.unshift({id: state.user.twoots.length, content: twoot});
      }
    // data works as a function
    return {
     state,
      addTwoot
    }
  },
  // watch watches a datapoint and when it changes you can run a function
  // watch: {
  //   followers(newFollowerCount, oldFollowerCount) {
  //     if (oldFollowerCount < newFollowerCount) {
  //       console.log(`${this.user.username} has gained a new Follower`);
  
};
</script>

// Style = CSS // . = classes, # = iD
// scoped wendet das styling nur bei den einzelnen html in der Kompente an
<style lang="scss">

.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile_user-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  
  h1 {
  margin: 0;
}

  .user-profile_admin-badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
  }
 }
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>
