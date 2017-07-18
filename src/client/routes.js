import home from './components/home.vue'
import newPlayer from './components/newplayer.vue'
import newMatch from './components/newmatch.vue'
import statistics from './components/statistics.vue'

export default [
  { path: '/', component: home },
  { path: '/newplayer', component: newPlayer },
  { path: '/newmatch', component: newMatch },
  { path: '/statistics', component: statistics }
]
