<template>
    <div>
        <div class="your_scores_container">
            <header class="your_scores">
                <span class="score_num">{{score}}</span>
                <span class="fenshu">分！</span>
            </header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover"></div>
        <div class="share_code">
            <header class="share_header">关注葡萄之家，获取答案。</header>
            <img src="../../images/4-4.png" class="code_img">
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'score',
  data() {
    return {
      showHide: false, //是否显示提示
      score: 0, //分数
      scoreTips: '', //分数提示
      rightAnswer: [2, 7, 12, 13, 18], //正确答案
      scoreTipsArr: [
        '你说，是不是把知识都还给小学老师了？',
        '还不错，但还需要继续加油哦！',
        '不要嘚瑟还有进步的空间！',
        '智商离爆表只差一步了！',
        '你也太聪明啦，葡萄之家欢迎你！'
      ]
    }
  },
  computed: mapState(['answerid']),
  created() {
    this.computedScore()
    this.getScoreTip()
    document.body.style.background = 'url(./static/images/4-1.jpg) 0 no-repeat'
    document.body.style.paddingTop = '.28rem'
  },
  methods: {
    //计算分数
    computedScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20
        }
      })
    },
    //是否显示分享提示
    showCover: function() {
      this.showHide = !this.showHide
    },
    //根据分数显示提示
    getScoreTip: function() {
      if (this.score <= 20) {
        this.scoreTips = this.scoreTipsArr[0]
        console.log(this.scoreTips)

        return
      }
      if (this.score <= 40) {
        this.scoreTips = this.scoreTipsArr[1]
        console.log(this.scoreTips)

        return
      }
      if (this.score <= 60) {
        this.scoreTips = this.scoreTipsArr[2]
        console.log(this.scoreTips)

        return
      }
      if (this.score <= 80) {
        this.scoreTips = this.scoreTipsArr[3]
        console.log(this.scoreTips)

        return
      }
      if (this.score <= 100) {
        this.scoreTips = this.scoreTipsArr[4]
        console.log(this.scoreTips)
      }
    }
  }
}
</script>

<style lang="less">
.your_scores_container {
  width: 1.94rem;
  height: 1.82rem;
  background: url(../../images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    top: 50%;
    font-size: 0.3rem;
    font-weight: 900;
    font-family: 'Microsoft YaHei';
    text-align: center;
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    bottom: 7%;
    width: 84%;
    left: 8%;
    color: #3e2415;
    font-size: 0.14rem;
    text-align: center;
  }
}
.share_button {
  width: 1.17rem;
  height: 0.48rem;
  margin: 0.8rem auto 0;
  background: url(../../images/4-3.png) no-repeat 0;
  background-size: 1.17rem 100%;
}
.share_code {
  width: 100%;
  margin: 0.2rem auto 0;
  text-align: center;
  .share_header {
    color: #664718;
    font-size: 0.14rem;
    font-family: 'Microsoft YaHei';
    width: 100%;
    font-weight: 500;
    white-space: nowrap;
  }
  .code_img {
    height: 1.06rem;
    width: 1.06rem;
    margin-top: 0.2rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  width: 2.39rem;
  height: 2.2rem;
  position: fixed;
  top: 10%;
  right: 10%;
}
</style>
