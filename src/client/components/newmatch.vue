<template>
  <div class="new-match">
    <h3>New Match</h3>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-xs-2">N° of players</label>
        <div class="col-xs-10">
          <label class="checkbox-inline pull-left"><input type="radio" v-model="match.numPlayers" value="2">&nbsp;2</label>
          <label class="checkbox-inline pull-left"><input type="radio" v-model="match.numPlayers" value="4">&nbsp;4</label>
        </div>
      </div>

      <!-- 2 players -->
      <div v-if="match.numPlayers == 2">

        <!-- match with 2 players -->
        <div class="col-xs-12">
          <div class="col-sm-5">
              <h3 v-if="match.teamA.length == 0">Player A</h3>
              <h3 v-else>{{ match.teamA.name}}</h3>

              <select v-if="match.teamA.length == 0" v-model="match.teamA" >
                <option v-for="player in players" v-bind:value="player">{{player.name}}</option>
              </select>

              <figure v-if="match.teamA.length != 0">
                <img src="http://via.placeholder.com/350x300" alt="">
              </figure>

          </div>
          <div class="col-sm-2 versus">
              <span>VS</span>
          </div>
          <div class="col-sm-5">
              <h3 v-if="match.teamB.length == 0">Player B</h3>
              <h3 v-else>{{ match.teamB.name }}</h3>

              <select v-if="match.teamB.length == 0" v-model="match.teamB">
                <option v-for="player in players" v-bind:value="player">{{player.name}}</option>
              </select>

              <figure v-if="match.teamB.length != 0">
                <img src="http://via.placeholder.com/350x300" alt="">
              </figure>
          </div>
        </div>
      </div>

      <!-- 4 players -->
      <div v-else-if="match.numPlayers == 4">

        <!-- match with 4 players -->
        <div class="col-xs-12">
          <div class="col-sm-5">
              <h3>Team A</h3>

              <select v-if="match.teamA.length == 0" class="" name="">
                <option v-for="player in players" value="">{{player}}</option>
              </select>
              <select v-if="match.teamA.length == 0" class="" name="">
                <option v-for="player in players" value="">{{player}}</option>
              </select>

              <figure v-if="match.teamA.length > 0">
                <img src="http://via.placeholder.com/350x150" alt="">
                <figcaption>
                  <h4 >{{ match.teamA[0].name }}</h4>
                </figcaption>
              </figure>

          </div>
          <div class="col-sm-2">
              VS
          </div>
          <div class="col-sm-5">
              <h3>Team B</h3>

              <select v-if="match.teamA.length == 0" class="" name="">
                <option v-for="player in players" value="">{{player}}</option>
              </select>
              <select v-if="match.teamA.length == 0" class="" name="">
                <option v-for="player in players" value="">{{player}}</option>
              </select>

              <figure v-if="match.teamB.length > 0">
                <img src="http://via.placeholder.com/350x150" alt="">
                <figcaption>
                  <h4 >{{ match.teamB[0].name }}</h4>
                </figcaption>
              </figure>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: [],
      match: {
        numPlayers: 0,
        teamA: [],
        teamB: []
      }
    }
  },
  created() {
    // this.$http.get('/api/players').then(function(data){
    //   this.players = data.body;
    // });

    this.players = [
      {
        id: 1,
        name: "Mario Jorquera"
      },
      {
        id: 2,
        name: "Luis Mena"
      },
      {
        id: 3,
        name: "Nelson Vergara"
      },
      {
        id: 4,
        name: "Ricardo Herrera"
      }
    ]
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

.versus {
  font-size: 3em;
  position: relative;
  height: 100%;
}
.versus span {
  position: absolute;
  top: 50%;
}
</style>
