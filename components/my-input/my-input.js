// components/my-input/my-input.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mydata:Object
  },

  attached(){
    this.setData({
      title: this.data.mydata.title ? this.data.mydata.title : ''
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    count:10,
    interval:-1,
    isCountDown:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 失去焦点，获取input中输入的值
    getInputValue(e){
      if(this.data.mydata.type==='mobile'){
        app.globalData.mobile = e.detail.value
      }else{
        app.globalData.vcode = e.detail.value
      }
    },
    // 获取验证码的操作
    getVcode(){
      if(this.data.isCountDown){
        return
      }

      //1.判断手机号是否合法
      if(!this.validateMobile()){
        wx.showToast({
          title:'手机号不合法',
          icon:'none'
        })
        return
      }

      //2.倒计时功能
      this.setData({
        title:`（${this.data.count}）`,
        isCountDown:true
      })

      this.data.interval = setInterval(()=>{
        this.data.count--
        if(this.data.count <= 0){
          this.setData({
            title:'获取验证码',
            isCountDown:false,
            count:10
          })
          clearInterval(this.data.interval)
          return
        }

        // 每隔一秒进行改变
        this.setData({
          title:`（${this.data.count}）`
        })
      },1000)

    },
    validateMobile(){
      var reg = /^1[3,4,5,6,7,8][0-9]{9}$/

      return reg.test(app.globalData.mobile)
    }
  }
})
