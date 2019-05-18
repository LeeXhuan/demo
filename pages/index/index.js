//index.js
const app = getApp()

Page({
  data: {
    navText: [],
    listData: []
  },
  onLoad: function () {
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
    let listData = [
      {
        id: 1,
        bgUrl: "/images/ticket-mine.png",
        iconUrl: "/images/to_be_used.png",
        name: "珠海公交专用",
        money: "1.00",
        source: "好友赠送"
      }
    ];
    this.setData({
      navText: navText,
      listData: listData
    });
  },
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
