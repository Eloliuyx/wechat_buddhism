Page({
  data: {
    name: '',
    contact: '',
    message: ''
  },

  handleNameInput: function(e) {
    this.setData({
      name: e.detail.value
    });
  },

  handleContactInput: function(e) {
    this.setData({
      contact: e.detail.value
    });
  },

  handleMessageInput: function(e) {
    this.setData({
      message: e.detail.value
    });
  },

  submitMessage: function() {
    const { name, contact, message } = this.data;
    if (!name || !contact || !message) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }
    
    wx.request({
      url: 'https://387f-73-15-208-129.ngrok-free.app/submit', // 确保这个URL是正确的
      method: 'POST',
      data: {
        name: name,
        contact: contact,
        message: message
      },
      success: function(res) {
        wx.showToast({
          title: '留言提交成功',
          icon: 'success'
        });
      },
      fail: function(err) {
        wx.showToast({
          title: '提交失败，请稍后重试',
          icon: 'none'
        });
      }
    });
    
    // 清空输入框
    this.setData({
      name: '',
      contact: '',
      message: ''
    });
  }
});
