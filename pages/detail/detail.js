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
    console.log(options);
    const url = 'https://raw.githubusercontent.com/LeeXhuan/demo/master/images';
    const dataOptions = {
      bgImg: `${url}/ticket_detail%403x.png`,
      title: '珠海公交专用',
      titleIcon: `${url}/ticket_portrait%403x.png`,
      priceText: '1.00元公交车票',
      sentIcon: `${url}/Combined%20Shape%403x.png`,
      userIcon: `${url}/ticket_portrait%403x.png`,
      userText: '远行的帆…送你一张车票',
      contentText: '恭喜您，领取成功！',
      contentIcon: `${url}/needtoknow%403x.png`,
      buttonText: '', // 立即领取
      toUseText: '', // 立即使用
      usedText: '使用详情', // 使用详情
      receiveText: '', // 领取详情
      sentFriend: '赠给好友',
    }
    switch (options.id) {
      case '1': 
        dataOptions.sentIcon = `${url}/Combined%20Shape%403x.png`;
        dataOptions.userIcon = `${url}/ticket_portrait%403x.png`;
        dataOptions.userText = '远行的帆…送你一张车票';
        dataOptions.contentText = '请于6月30日前使用！';
        dataOptions.buttonText = '';
        dataOptions.toUseText = '立即使用';
        dataOptions.usedText = '领取详情';
        dataOptions.sentFriend = '赠给好友';
        break;
      case '2':
        dataOptions.sentIcon = `${url}/Combined%20Shape%403x.png`;
        dataOptions.userIcon = `${url}/ticket_portrait%403x.png`;
        dataOptions.userText = '远行的帆…送你一张车票';
        dataOptions.contentText = '请于6月30日前使用！';
        dataOptions.buttonText = '';
        dataOptions.toUseText = '立即使用';
        dataOptions.usedText = '领取详情';
        dataOptions.sentFriend = '赠给好友';
        break;
      case '3':
        break;
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

  }
})