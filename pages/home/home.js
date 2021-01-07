const app = getApp()

Page({
  data: {
    name: '阿西达卡',
    now: app.globalData.now
  },
  buttonHandler(event) {
    const that = this;
    wx.showModal({
      title: '操作确认',
      content: '你确认要修改吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            name: '阿桑'
          }, function () {
            wx.showToast({
              title: "操作完成",
              duration: 700
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});