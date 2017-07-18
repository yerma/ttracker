<template>
  <div class="new-match">
    <h3>New Match</h3>
    <form>
      <label for="">Nº of players</label>
      <input type="radio" name="numPlayers" v-model="numPlayers" value="2">2
      <input type="radio" name="numPlayers" v-model="numPlayers" value="4">4

      <!-- 2 players -->
      <div v-if="numPlayers == 2">
        <select class="" name="">
          <option value="" selected disabled>Choose a player</option>
          <option v-for="player in players" value="">{{player}}</option>
        </select>
      </div>

      <!-- 4 players -->
      <div v-else-if="numPlayers == 4">
        <p>4 players</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      numPlayers: "",
      players: ["Gilberto", "Renato", "Mario"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-match {
  padding: 80px 10px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
