
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
      'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
      'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo:'/images/images/doubleFeatureIcon.png',
        title:'test',
        desc:'测试详情',
      },
      {
        logo: '/images/images/doubleFeatureIcon.png',
        title: 'test',
        desc: '测试详情',
      },
      {
        logo: '/images/images/doubleFeatureIcon.png',
        title: 'test',
        desc: '测试详情',
      },
    ],
   

  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.route)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if(res.from ==='button'){
      console.log(res.target)
    }
    return{
      title:'转发的标题',
      path:'pages/home/home'
    }
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  onChange:function(){
    console.log('移动')
  }
})