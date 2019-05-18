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
          name:"我使用车票我使用车票我使用车票我使用车票我使用车票我使用车票我使用车票",
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
    console.log(options.id)
    switch(options.id) {
      case '1':
        dataOptions.title = '领取详情';
        dataOptions.listData = [
          {
            name: "珠海长途站赠送车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "我领取1.00元车票",
            time: "5-18 20:14",
            road: ""
          }
        ];
        break;
      case '2':
        dataOptions.title = '赠送详情';
        dataOptions.listData = [
          {
            name: "我赠送车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "好友“花开花谢”领取车票",
            time: "5-18 20:14",
            road: ""
          }
        ];
        break;
      case '3':
        dataOptions.title = '使用详情';
        dataOptions.listData = [
          {
            name: "珠海长途站赠送车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "我领取1.00元车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "我使用车票",
            time: "5-18 20:14",
            road: "128路"
          }
        ];
        break;
      case '4':
        dataOptions.title = '过期详情';
        dataOptions.listData = [
          {
            name: "珠海长途车站赠送车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "我领取车票",
            time: "5-18 20:14",
            road: ""
          },
          {
            name: "超过有效期未使用车票",
            time: "5-18 20:14",
            road: ""
          }
        ];
        break;
    }
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