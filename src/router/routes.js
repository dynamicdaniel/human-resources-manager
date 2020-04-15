import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: ['admin', 'hr', 'manager', 'employee']
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'employeeInfo',
        name: 'employeeInfo',
        meta: {
          title: '员工信息',
          auth: ['admin', 'hr']
        },
        component: _import('businessEmployeeManage/employeeInfo')
      },
      {
        path: 'departmentInfo',
        name: 'departmentInfo',
        meta: {
          title: '部门信息',
          auth: ['admin']
        },
        component: _import('demo/page2')
      },
      {
        path: 'hrInfo',
        name: 'hrInfo',
        meta: {
          title: 'HR信息',
          auth: ['admin']
        },
        component: _import('demo/page3')
      },
      // 员工请假/出差记录查询
      {
        path: 'employeeEvent',
        name: 'employeeEvent',
        meta: {
          title: '员工考勤',
          auth: ['hr']
        },
        component: _import('system/log')
      },
      // 员工所属项目查询
      {
        path: 'employeeProject',
        name: 'employeeProject',
        meta: {
          title: '员工项目信息',
          auth: ['hr']
        },
        component: _import('system/log')
      },
      // 招聘信息管理
      {
        path: 'recruitmentManage',
        name: 'recruitmentManage',
        meta: {
          title: '招聘管理',
          auth: ['hr']
        },
        component: _import('system/log')
      },
      // 会议室管理
      {
        path: 'meetingManage',
        name: 'meetingManage',
        meta: {
          title: '会议室管理',
          auth: ['hr']
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
