//index.js
//获取应用实例

const promiseRequest = require('../../utils/promiseRequest.js')

const app = getApp()

Page({
  data: {
    userInfo: {
      userName:'Tom',
      userApart:'Java',
      userNumber:'120130'
    },
    hasUserInfo: false,

  },

  onLoad: function () {
      // wx.request({
      //     url: 'https://jsonplaceholder.typicode.com/posts/1',
      //     success:function(res){
      //        console.log(res);
      //     },
      // })
      // return new Promise(function(resolve,reject){
      //     wx.request({
      //         url: 'https://jsonplaceholder.typicode.com/posts/1',
      //         success:resolve,
      //         fail:reject
      //     })
      // }).then(function(res){
      //
      //     console.log(res);
      // },function(res){
      //
      //     console.log(res);
      // });
      promiseRequest('https://jsonplaceholder.typicode.com/posts/1',function(res){
        "use strict";
        console.log(res);
      },function(){
        "use strict";
       console.log('error');
      })
  },

})
