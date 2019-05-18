//index.js
const app = getApp()

Page({
  data: {
    navText: [],// 导航
    listData: []// 数据看列表
  },
  onLoad: function () {
    const url = "https://raw.githubusercontent.com/LeeXhuan/demo/master/images/"
    // 导航数据模拟
    let navText = [
      {
        name:"待使用"+2,
        isActive: true
      },
      {
        name:"已赠送"+3,
        isActive: false
      },
      {
        name:"已使用"+4,
        isActive: false
      },
      {
        name:"已过期"+5,
        isActive: false
      }
    ];
    // 列表数据模拟
    let listData = [
      {
        id: 1,
        bgUrl: `${url}ticket-mine@3x.png`,
        iconUrl: `${url}to_be_used@3x.png`,
        name: "新疆土耳其公交专用",
        money: "1.00",
        source: "好友赠送"
      },
      {
        id: 2,
        bgUrl: `${url}ticket-mine@3x.png`,
        iconUrl: `${url}be_gifted@3x.png`,
        name: "珠海公交专用",
        money: "1.00",
        source: "长途站赠票"
      },
      {
        id: 3,
        bgUrl: `${url}ticket-mine2@3x.png`,
        iconUrl: `${url}used@3x.png`,
        name: "珠海公交专用",
        money: "1.00",
        source: "好友赠送"
      },
      {
        id: 4,
        bgUrl: `${url}ticket-mine2@3x.png`,
        iconUrl: `${url}dated@3x.png`,
        name: "珠海公交专用",
        money: "1.00",
        source: "好友赠送"
      }
    ];
    // 数据更改
    this.setData({
      navText: navText,
      listData: listData
    });
  },
  // 导航切换
  switch: function (e) {
    console.log(e);
    let index = e.currentTarget.dataset.id;
    let navText = this.data.navText;
    navText.forEach(element => {
      element.isActive = false;
    });
    navText[index].isActive = true;
    this.setData({
      navText:navText
    });
  }
})
