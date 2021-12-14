/*
 * @Author: jiaqi.guo
 * @Date: 2021-12-01 15:15:36
 * @LastEditTime: 2021-12-02 16:58:04
 * @LastEditors: jiaqi.guo
 * @FilePath: \theFish\pages\index\index.js
 * 
 */
// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    bar_value: 5,
    cateArr: [
      {
        icon: 'https://i.loli.net/2021/12/02/TUzo1yJIAmusvki.png',
        text: '工作'
      }, {
        icon: 'https://i.loli.net/2021/12/02/zACFViTxcmQ9HBh.png',
        text: '思考'
      },
      {
        icon: 'https://i.loli.net/2021/12/02/ObmBfc7DVoXH16y.png',
        text: '学习'
      },
      {
        icon: 'https://i.loli.net/2021/12/02/xsf7TuCHQnvR4yF.png',
        text: '阅读'
      },
      {
        icon: 'https://i.loli.net/2021/12/02/DhwvZsnjcom4a8C.png',
        text: '游戏'
      },
      {
        icon: 'https://i.loli.net/2021/12/02/4MaovQehEx6iBgW.png',
        text: '看书'
      }
    ],
  },
})
