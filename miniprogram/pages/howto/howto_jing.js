Page({
  data: {},
  scrollToChapter: function(e) {
    const chapterId = e.currentTarget.dataset.id;
    wx.pageScrollTo({
      selector: `#${chapterId}`,
      duration: 300
    });
  }
  })
