<template>
  <div class="new-match container">
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
        <div v-if="match.numPlayers == 2" class="players-selection col-xs-12">
            <div class="col-sm-5 left">
              <!-- Player A selection -->
              <div class="form-group" v-if="match.teamA.length == 0">
                <label for="playerA" class="control-label">Player A</label>
                <select id="playerA" class="form-control" v-model="match.teamA" required>
                  <option v-for="player in players" v-bind:value="player"
                      v-if="player.id != match.teamB.id">{{ player.name }}</option>
                </select>
              </div>

              <match-player v-bind:player="match.teamA" @update:player="match.teamA = []" v-else></match-player>
            </div>

            <div class="col-sm-2 versus"><span>VS</span></div>

            <div class="col-sm-5 right">
              <!-- Player B selection -->
              <div class="form-group" v-if="match.teamB.length == 0">
                <label for="playerB" class="control-label">Player B</label>
                <select id="playerB" class="form-control" v-model="match.teamB" required>
                  <option v-for="player in players" v-bind:value="player"
                      v-if="player.id != match.teamA.id">{{ player.name }}</option>
                </select>
              </div>

                <match-player v-bind:player="match.teamB" @update:player="match.teamB = []" v-else></match-player>
            </div>
        </div>

        <!-- 4 players -->
        <div v-else-if="match.numPlayers == 4" class="players-selection col-xs-12">
          <!-- match with 4 players -->
            <div class="col-sm-5">

            </div>
            <div class="col-sm-2">
VS
            </div>
            <div class="col-sm-5">

            </div>
        </div>
    </form>
  </div>
</template>

<script>

import matchPlayer from './matchplayer.vue';
export default {
  components: {
    'match-player': matchPlayer
  },
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
<style>
.new-match {
  padding: 80px 10px;
  height: 100vh;
}

.players-selection {
  height: 60vh;
  margin: 40px 0;
}

.players-selection label {
  font-size: 1.3em;
}

.versus {
  font-size: 3em;
  position: relative;
  height: 100%;
  padding: 0;
}
.versus span {
  position: absolute;
  display: block;
  top: 40%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}

/* Players */

.left figcaption{
  left: 0;
  text-align: left;
}

.right figcaption{
  right: 0;
  text-align: right;
}

</style>
