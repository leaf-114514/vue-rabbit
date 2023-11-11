import httpInstance from "@/utils/http";


/**
 * @description: 获取轮播图
 * @param {*}
 * @return {*}
 */
export const getBannerAPI = (distributionSite: string = '1') => {
    return httpInstance({
        url: '/home/banner',
        params: {
          distributionSite
        }
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
 export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance({
    url: 'home/hot',
    params: {}
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
 export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}