
//在页面加载时，根据传递过来的次第名称，动态加载相应的课程大纲数据，并将数据设置到页面的data中。
Page({
  data: {
    syllabus: null as any,
    sections: [] as { title: string; content: string[] }[],
  },
  
  onLoad: function (options: any) {
    const syllabusName = options.name;
    let syllabusData;

    // 加载相应的课程大纲数据文件
    try {
      syllabusData = require(`../../data/${syllabusName}.js`);
    } catch (error) {
      console.error(`Error loading syllabus data for ${syllabusName}:`, error);
      wx.showToast({
        title: '加载经文数据失败',
        icon: 'none'
      });
      return;
    }

    if (syllabusData) {
      this.setData({
        syllabus: syllabusData,
        sections: syllabusData.textbooks.sections
      });
    }
  },
/*
  selectScripture: function (e: any) {
    const scripture = e.currentTarget.dataset.scripture;
    wx.navigateTo({
      url: `/pages/scripture/${scripture}`
    });
  }
*/
});
