<template>
  <div class="home">
    <h3>Track your table tennis matches easily</h3>
  </div>
</template>

<script>
import pingpong from '../assets/img/pingpong.jpg';
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.home {
  background: url('/img/pingpong.jpg') center center no-repeat;
  background-size: cover;
  padding: 70px 10px;
  height: 100vh;
  position: relative;
}

h3 {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 50vw;
  font-size: 72px;
}

</style>
