<template>
<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Menu-item key="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">block number查询</span>
                    </Menu-item>
                    <Menu-item key="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">account name查询</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                  <h1>欢迎使用区块链浏览器！</h1>  
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
   


    <p>请输入block number：<i-input type="text"
           v-model="id"
           style="width: 300px"
           @keyup="change" placeholder="请输入block number..."
           @keyup.enter.native="submit()"></i-input>
</p>
<Button @click="go">点我跳转</Button>  
<List item-layout="vertical">
  <ListItem v-for="(item , key) in data" :key="item">
   <li> {{key}}</li>
    {{item}}
  </ListItem>
</List> 




                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios'
import router from '@/router'
//import iView from 'iview' 
export default {
  name:'first',
  data () {
    return {
      id: 10,
      data: {}
    };
  },
  created () {
    this.submit()
  },
  methods: {
    change () {
      this.submit()
    },
    go(){
  		this.$router.push('/second')
  	},
    submit () {
      axios.post('https://node1.gxb.io/rpc/get_block', {
        "jsonrpc": "2.0",
        "method": "call",
        "params": [0, "get_block", [this.id]],
        "id": 1
      }).then(res => {
        console.log(res);
        this.data = res.data.result
        console.log(res.data);

      })
    }
  },
};
</script>
<style scoped>
table {
  width: 20%;
}
td,
th {
  border: 1px solid #000;
}
p{font-size:20px;font-weight: bold}
     .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .header {
    padding: 80px;
    text-align: center;
    background: #1abc9c;
    color: white;
}
 
/* 标题字体加大 */
.header h1 {
    font-size: 60px;
}
</style>





