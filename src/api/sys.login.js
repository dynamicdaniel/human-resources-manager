import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  }).then(res => {
    console.log('api sys.login.js 用户登录信息返回', res)
    return res
  })
}
