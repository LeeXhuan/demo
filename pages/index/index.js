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
      {name:"待使用"+2,isActive: true},
      {name:"已赠送"+3,isActive: false},
      {name:"已使用"+4,isActive: false},
      {name:"已过期"+5,isActive: false}
    ];
    // 数据更改
    this.setData({
      navText: navText,
    });
    this.switch();
  },
  // 导航切换
  switch: function (e = {currentTarget: {dataset: {id: 0}}}) {
    const url = "https://raw.githubusercontent.com/LeeXhuan/demo/master/images/"
    let index = e.currentTarget.dataset.id;
    console.log(index);
    let listData = [];
    let navText = this.data.navText;
    navText.forEach(element => {
      element.isActive = false;
    });
    navText[index].isActive = true;
    if(index == 0){
      listData = [
        {
          id: 1,
          bgUrl: `${url}ticket-mine@3x.png`,
          iconUrl: `${url}to_be_used@3x.png`,
          name: "新疆土耳其公交专用",
          money: "1.00",
          source: "好友赠送"
        }
      ]
    }else if(index == 1){
      listData = [
        {
          id: 2,
          bgUrl: `${url}ticket-mine@3x.png`,
          iconUrl: `${url}be_gifted@3x.png`,
          name: "珠海公交专用",
          money: "1.00",
          source: "长途站赠票"
        }
      ]
    }else if(index == 2){
      listData = [
        {
          id: 3,
          bgUrl: `${url}ticket-mine2@3x.png`,
          iconUrl: `${url}used@3x.png`,
          name: "珠海公交专用",
          money: "1.00",
          source: "好友赠送"
        }
      ]
    }else if(index == 3){
      listData = [];
    }
    this.setData({
      navText:navText,
      listData:listData
    });
  }
})
