const app = getApp()

Page({
  data: {
    name: '阿西达卡',
    now: app.globalData.now
  },
  buttonHandler(event) {
    this.setData(
      {
        name: '阿桑',
      },
      function () {
        wx.showToast({
          title: '操作完成',
          duration: 700,
        })
      }
    )
  }
});