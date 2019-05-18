// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url = 'https://raw.githubusercontent.com/LeeXhuan/demo/master/images';
    const dataOptions = {
      bgImg: `${url}/ticket_detail%403x.png`,
      title: '珠海公交专用',
      titleIcon: `${url}/ticket_portrait%403x.png`,
      priceText: '1.00元公交车票',
      sentIcon: '../../images/ticket_detail_bg.png',
      userIcon: '../../images/ticket_detail_bg.png',
      userText: '你送出一张车票，正在等待领取',
      contentText: '有效期至 06-13 23:59!',
      contentIcon: '../../images/ticket_detail_bg.png',
      buttonText: '立即领取',
    }
    this.setData({
      detailData: dataOptions,
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