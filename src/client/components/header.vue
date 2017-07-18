<template>
  <nav>
    <router-link to="/" class="logo" exact>TTRACKER</router-link>
    <router-link to="/newmatch" exact>Start a match</router-link>
    <router-link to="/newplayer" exact>New Player</router-link>
    <router-link to="/statistics" exact>Statistics</router-link>
  </nav>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  nav {
    position: fixed;
    top: 0;
    background: #333;
    width: 100%;
    display: flex;
    z-index: 9999;
  }
  nav h1 {
    color: yellow;
    flex-grow: 2;
  }

  nav .logo {
    color: #efbd3e;
    font-size: 24px;
    font-weight: 600;
    flex-grow: 2;
  }

  nav a {
    border-top: 5px solid transparent;
    color: #fff;
    padding: 18px;
    flex-grow: 1;
    text-decoration: none;
    font-size: 1.2em;
  }

  nav a.router-link-active:not(.logo) {
    border-top: 5px solid #efbd3e;
  }
</style>
