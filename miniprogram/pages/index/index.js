// miniprogram/pages/index/index.js
//定义了一个selectScripture函数，当用户点击某个经文按钮时，获取按钮上的data-scripture属性的值，并导航到经文详情页，同时将经文的名称作为参数传递过去。
Page({
  data: {},
  navigateToSyllabus: function(e) {
    const syllabus = e.currentTarget.dataset.syllabus;
    wx.navigateTo({
      url: `/pages/syllabus/syllabus?name=${syllabus}`
    });
  },

  navigateToHowto: function(e) {
    const howto = e.currentTarget.dataset.howto;
    wx.navigateTo({
      url: `/pages/howto/${howto}`
    });
  },
  navigateToMessage: function(e) {
    wx.navigateTo({
      url: `/pages/leaveMessage/leaveMessage`
    });
  }

});
