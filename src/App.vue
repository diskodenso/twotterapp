<template>
  <div id="app">
  <nav>
  <router-link to="/">
      <div class="navigation_logo">
      Twotter
      </div>
  </router-link>
<div class="navigation_user" v-if="user">
{{.user.username}}
      </div>
  </nav>
    <router-view/> <!-- this router-view is gonna be injected with whatever page we are on!!! -->
  </div>
</template>


<!--script = JavaScript - Vue Interface -->
<!-- import component-->
<script>
import {useStore} from 'vuex';
import {computed} from 'vue';


export default {
  name: `App`,
  setup(){
    const store = useStore();
    // now we wanna get the user from the store
    const user = computed(()=> store.state.User.user);
    return {
    user
      }
  }
}
</script>

<!-- Style = CSS--> 

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;
    
    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }
    
    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>