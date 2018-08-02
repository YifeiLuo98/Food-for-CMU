// components/foodList/foodList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    restaurantName: {
      type: String,
      value:''
    },

    entree: {
      type: String,
      value: ''
    },

    side: {
      type: String,
      value: ''
    },

    beverage: {
      type: String,
      value: ''
    },

    foodImage: {
      type: String,
      value: ''
    },

    price: {
      type: Number,
      value: 0
    },

    pickupLocation: {
      type: String,
      value: ''
    },

    pickupTime: {
      type: String,
      value: ''
    },

    howManyLeft:{
      type: Number,
      value:-1
    }

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

  }
})
