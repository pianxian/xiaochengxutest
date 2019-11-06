App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('初始化完成')
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success:res =>{

      }
    })  

    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          //已经授权,可以直接调用 getUserInfo获取头像昵称
          wx.getUserInfo({
            success:res =>{
              this.globalData.userInfo = res.userInfo

              if(this.userInfoReadyCallback){
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
globalData:{
  userInfo:null
},
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('启动')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: 'I am global data',
  testString:'testStr'
})
