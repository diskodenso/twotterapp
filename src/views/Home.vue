<!-- here we want to show a list of all user -->
<template>
  <div class="home">
<h1>Home</h1>
<div class="users-list"> 
<!-- we create a router link and with v-for we render the list of users (source data array!) from users.js-->
      <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="user.id">
{{user.username}}
  </router-link>
</div>
  </div>
</template>

<script>
import { users} from "../assets/users";

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>

<style lang="scss">
.home {
  padding: 50px 5%;
  .users-list {
    display: flex;
    flex-direction: column;
  }
}
</style>