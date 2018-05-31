<template>
    <div class="home-container">
        <div class="cloud">
            <p class="clout-txt">题目{{itemNum}}</p>
        </div>
        <div class="buddle">
            <div class="content" v-if="itemDetail.length > 0">
                <h4 class="title">题目{{itemNum}}</h4>
                <ul>
                    <li class="topic-item" @click="choosed(index,item.topic_answer_id)" v-for="(item,index) in itemDetail[itemNum-1].topic_answer">
                        <span class="number"  v-bind:class="{'selected':choosedNum==index}">{{chooseType(index)}}</span>
                        <span class="text">{{item.answer_name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <span class="button nextItem" v-if="itemNum<itemDetail.length" @click="nextItem"></span>
        <span class="button submit " v-else @click="submit"></span>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'list',
  data() {
    return {
        itemId: null, //题目ID
		choosedNum: null, //选中答案索引
		choosedId:null //选中答案id
    }
  },
  computed: mapState(['itemDetail', 'itemNum', 'level']),
  methods: {
    ...mapActions(['addNum']),
    nextItem(){
        if(this.choosedNum==null){
            alert('您还没有选中答案')
        }else{
            this.addNum(this.choosedId)
            this.choosedNum=null;
        }
    },
    submit(){
        if(this.choosedNum!==null){
            this.addNum(this.choosedId);
            this.$router.push('score');
        }else{
            alert('您还没有选择答案哦')
        }
    },
    choosed(type,id){
        this.choosedNum = type;
        this.choosedId = id;
    },
    chooseType:type=>{
        switch(type){
            	case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
        }
    }
  }
}
</script>
<style lang="less" scoped>
.cloud {
  position: absolute;
  right: 0;
  width: 0.74rem;
  height: 1.48rem;
  background: url(../../images/WechatIMG2.png) 0 no-repeat;
  background-size: cover;
}
.clout-txt {
  position: absolute;
  width: 100%;
  text-align: center;
  color: red;
  bottom: 14%;
}
.nextItem {
  background: url(../../images/2-2.png) 0 no-repeat;
  background-size: cover;
}
.content {
  padding-left: 20%;
}
.title {
  color: #fff;
}
.number {
  border: 1px solid #fff;
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 50%;
  line-height: 0.16rem;
  margin-right: 0.1rem;
  display: inline-block;
  text-align: center;
  &.selected {
    background: yellow;
    color: #000;
  }
}
.submit {
  background: url(../../images/3-1.png) 0 no-repeat;
  background-size: cover;
}
.topic-item {
  margin-top: 0.1rem;
  line-height: 0.2rem;
  span {
    color: #fff;
    vertical-align: middle;
  }
}
</style>
