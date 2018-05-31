<template>
  <div class="home-container">
    <div class="cloud">
      <p class="clout-txt">第一周</p>
    </div>
    <div class="img"></div>
    <router-link to="/list" class="start button"></router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  computed: mapState(['level', 'show', 'itemNum', 'answerid']),
  created() {
    this.init()
    console.log('inti')
  },
  methods: {
    ...mapActions(['init']),
    handleClick() {
      this.$store.commit('swith')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.cloud {
  position: absolute;
  right: 0;
  width: 0.74rem;
  height: 1.48rem;
  background: url(../images/WechatIMG2.png) 0 no-repeat;
  background-size: cover;
}
.clout-txt {
  position: absolute;
  width: 100%;
  text-align: center;
  color: red;
  bottom: 14%;
}

.img {
  width: 2.63rem;
  height: 2.33rem;
  background: url(../images/1-2.png) 0 no-repeat;
  background-size: cover;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
}
.start {
  background: url(../images/1-4.png) 0 no-repeat;
  background-size: cover;
}
</style>
