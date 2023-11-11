import httpInstance from "@/utils/http";


/**
 * @description: 获取轮播图
 * @param {*}
 * @return {*}
 */
export const getBannerAPI = () => {
    return httpInstance({
        url: '/home/banner'
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