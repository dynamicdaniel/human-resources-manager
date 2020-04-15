// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '员工管理',
    icon: 'folder-o',
    children: [
      { path: '/employeeInfo', title: '员工信息' }
    ]
  }
]
