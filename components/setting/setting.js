// components/setting/setting.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    setting:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapSetting(e){
      if(this.data.setting.type!=='arrow'){
        return
      }

      // 子组件触发事件，传递载荷
      this.triggerEvent('myevent',{id:e.target.dataset.id})
    }
  }
})
