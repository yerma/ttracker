<template>
  <div class="container new-player">
    <h3>New Player</h3>
    <form class="form-horizontal">
      <div class="col-xs-12 col-md-6">
        <div class="form-group">
          <label for="player-name" class="control-label col-xs-2">Name</label>
          <div class="col-xs-10">
            <input type="text" v-model="player.name" id="player-name" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="player-nickname" class="control-label col-xs-2">Nickname</label>
          <div class="col-xs-10">
            <input type="text" v-model="player.nickname" id="player-nickname" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-xs-2">Dominant Hand</label>
          <div class="col-xs-10">
            <label class="checkbox-inline pull-left"><input type="checkbox" v-model="player.dominantHand" value="left-handed">Left</label>
            <label class="checkbox-inline pull-left"><input type="checkbox" v-model="player.dominantHand" value="right-handed">Right</label>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
          //upload avatar
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player: {
        name: "",
        nickname: "",
        dominantHand: [],
        avatar: ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-player {
  padding: 80px 10px;
}
h1, h2, h3 {
  margin-bottom: 30px;
}
</style>
