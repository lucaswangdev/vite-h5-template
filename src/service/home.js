import {post} from './request'

/**
 * 测试接口
 * 获取用户信息
 * @param {*} params 
 * @returns 
 */
export const getUserInfo = (params) => {
  return post("/get/userInfo", params)
}