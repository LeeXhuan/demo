// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receiveData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url = 'https://raw.githubusercontent.com/LeeXhuan/demo/master/images';
    const dataOptions = {
      title:"领取详情",
      listData: [
        {
          name:"珠海长途站赠送车票",
          time:"5-18 20:14",
          road:""
        },
        {
          name:"领取车票",
          time:"5-18 20:14",
          road:""
        },
        {
          name:"我使用车票",
          time:"5-18 20:14",
          road:"318路"
        },
        {
          name:"领取车票",
          time:"5-18 20:14",
          road:""
        },
        {
          name:"领取车票",
          time:"5-18 20:14",
          road:""
        },
        {
          name:"领取车票",
          time:"5-18 20:14",
          road:""
        }
      ]
    }
    console.log(dataOptions.listData);
    this.setData({
      receiveData: dataOptions,
    })
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
  onShareAppMessage: function () {

  },
  return:function(){
    wx.navigateBack();
  }
})