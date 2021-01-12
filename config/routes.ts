export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/report',
    name: 'Report',
    icon: 'BarChartOutlined',
    component: './Welcome'
  },
  {
    path: '/order',
    name: 'Order',
    icon: 'DollarOutlined',
    component: './Welcome'
  },
  {
    path: '/complaint',
    name: 'Complaint',
    icon: 'ExclamationCircleOutlined',
    component: './Welcome'
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'setting',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/product',
        name: 'Product',
        component: './Welcome',
      },
      {
        path: '/admin/manual-order',
        name: 'Manual Order',
        component: './Welcome',
      },
      {
        path: '/admin/user',
        name: 'User',
        component: './Welcome',
      },
      {
        path: '/admin/menu',
        name: 'Authorization',
        component: './Welcome',
      },
      {
        path: '/admin/authenticator',
        name: 'Authenticator',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/',
    redirect: '/report',
  },
  {
    component: './404',
  },
];
