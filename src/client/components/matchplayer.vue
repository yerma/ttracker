<template>
  <div>
    <figure>
      <img src="http://via.placeholder.com/350x300" alt="">
      <figcaption>{{ player.name }}</figcaption>
    </figure>
    <a @click="chooseAgain">Not the one you want?<br />
      Click here to choose a different player.</a>
  </div>
</template>

<script>
export default {
  props: ['player'],
  data() {
    return {

    }
  },
  methods: {
    chooseAgain(){
        this.$emit('update:player');
    }
  }
}
</script>

<style scoped>

figure {
  position: relative;
  overflow: hidden;
}

figcaption {
    position: absolute;
    background: rgba(0,0,0,0.5);
    bottom: 20px;
    padding: 10px 20px;
    font-size: 1.4em;
    font-weight: 600;
    color: #FFF;
}

a {
 color: #efbd3e
}

</style>
