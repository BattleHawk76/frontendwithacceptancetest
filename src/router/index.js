import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from 'components/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
    {path: '/login', component: _import('login/index'), hidden: true},
    {path: '/404', component: _import('errorPage/404'), hidden: true},

    {
        path: '/',
        component: Layout,
        name: 'dashboard',
        redirect: '/dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: _import('dashboard/index')
        }]
    },


    // {
    //   path: '/md',
    //   component: Layout,
    //   redirect: '/md/test',
    //   name: 'Md',
    //   meta: {title: '门店管理', icon: 'example'},
    //   children: [
    //     {
    //       path: 'test',
    //       name: 'storeAdminTest',
    //       component: _import('storeAdmin/index'),
    //       meta: {title: '门店管理', icon: '店铺'}
    //     },
    //     {
    //       path: 'store',
    //       name: 'store',
    //       component: _import('storeAdmin/store'),
    //       meta: {title: '门店操作', icon: 'table'},
    //       hidden: true,
    //     },
    //   ]
    // },
    // {
    //   path: '/HF',
    //   component: Layout,
    //   redirect: '/HF/insurance',
    //   name: 'HF',
    //   meta: {title: '回访信息管理', icon: '客服'},
    //   children: [
    //     {
    //       path: 'index',
    //       component: _import('messageBack/insurancelist'),
    //       meta: {title: '保险回访列表', icon: '回访'}
    //     },
    //     {
    //       path: 'communication',
    //       component: _import('messageBack/insurancecommunication'),
    //       meta: {title: '保险回访', icon: '回访'},
    //       hidden: true,
    //     },
    //     {
    //       path: 'record',
    //       component: _import('messageBack/communicaterecord'),
    //       meta: {title: '回访记录', icon: '回访'},
    //       hidden: true,
    //     },
    //
    //     {
    //       path: 'buycarcommunicatelist',
    //       component: _import('messageBack/buycarcommunicatelist'),
    //       meta: {title: '买车接待表', icon: '回访'}
    //
    //     },
    //     {
    //       path: 'buycarcommunicate',
    //       component: _import('messageBack/buycarcommunicate'),
    //       meta: {title: '新增/修改/查看', icon: 'table'},
    //       hidden: true,
    //     },
    //   ]
    // },
    // // {
    // //   path: '/sale',
    // //   component: Layout,
    // //   redirect: '/sale/index',
    // //   name: 'Sale',
    // //   meta: {title: '营销管理', icon: 'example'},
    // //   children: [
    // //     {
    // //       path: 'saleAdmin',
    // //       name: 'saleAdmins',
    // //       component: _import('saleAdmin/index'),
    // //       meta: {title: '砍价表', icon: 'table'}
    // //     },
    // //     {
    // //       path: 'saleAdminsTwo',
    // //       name: 'SaleAdminsTwo',
    // //       component: _import('saleAdmin/index'),
    // //       meta: {title: '例子', icon: 'table'},
    // //     }
    // //   ]
    // // },
    // {
    //   path: '/car',
    //   redirect: '/car/index',
    //   component: Layout,
    //   name: 'Car',
    //   meta: {title: '车源管理', icon: '4S'},
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'carStart',
    //       component: _import('car/index'),
    //       meta: {title: '车源管理', icon: '4S'}
    //     },
    //     {
    //       path: 'car',
    //       name: 'caredit',
    //       component: _import('car/car'),
    //       meta: { title: '车源维护', icon: 'table' },
    //       hidden: true,
    //     }
    //   ]
    // },
    //
    // {
    //   path: '/customer',
    //   redirect: '/customer/index',
    //   component: Layout,
    //   name: 'customer',
    //   meta: {title: '客户信息管理', icon: '客户中心'},
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'customerMessage',
    //       component: _import('customer/index'),
    //       meta: {title: '客户信息管理', icon: '客户中心'}
    //     },
    //     {
    //       hidden: true,
    //       path: 'check',
    //       name: 'check',
    //       component: _import('customer/details'),
    //       meta: {title: '查看详情', icon: 'table'}
    //     },
    //     {
    //       hidden: true,
    //       path: 'edit',
    //       name: 'edit',
    //       component: _import('customer/details'),
    //       meta: {title: '修改详情', icon: 'table'}
    //     }
    //   ]
    // },
    // {
    //   path: '/vehicle',
    //   redirect: '/vehicle/index',
    //   component: Layout,
    //   name: 'vehicle',
    //   meta: {title: '车辆管理', icon: '车辆'},
    //   children: [
    //     {
    //       path: 'index',
    //       component: _import('vehicle/index'),
    //       meta: {title: '车辆管理', icon: '车辆'}
    //     },
    //     {
    //       path: 'informationLook',
    //       name: 'information',
    //       component: _import('vehicle/information'),
    //       meta: {title: '查看车辆详情', icon: 'table'},
    //       hidden: true,
    //     },
    //     {
    //       path: 'informationUp',
    //       name: 'information',
    //       component: _import('vehicle/information'),
    //       meta: {title: '修改车辆详情', icon: 'table'},
    //       hidden: true,
    //     }
    //
    //   ]
    // },
    // {
    //   path: '/order',
    //   redirect: '/order/index',
    //   component: Layout,
    //   name: 'order',
    //   meta: {title: '订单管理', icon: '订单'},
    //   children: [
    //     {
    //       path: 'index',
    //       component: _import('order/index'),
    //       meta: {title: '订单管理', icon: '订单'},
    //     },
    //     {
    //       path: 'order',
    //       name: 'order',
    //       component: _import('order/order'),
    //       meta: {title: '处理订单', icon: 'table'},
    //       hidden: true,
    //     },
    //   ]
    // },
    //
    // {
    //   path: '/administrator',
    //   redirect: '/administrator/index',
    //   component: Layout,
    //   name: 'administrator',
    //   meta: {title: '管理员信息管理', icon: 'administrator'},
    //   children: [
    //     {
    //       path: 'administrator',
    //       name: 'administrators',
    //       component: _import('administrator/index'),
    //       meta: {title: '管理员信息管理', icon: '管理客户'}
    //     }
    //   ]
    // },
    // {
    //   path: '/salesman',
    //   redirect: '/salesman/index',
    //   component: Layout,
    //   name: 'salesman',
    //   meta: {title: '业务员信息管理', icon: '人像'},
    //   children: [
    //     {
    //       path: 'salesman',
    //       name: 'salesmen',
    //       component: _import('salesman/index'),
    //       meta: {title: '业务员信息管理', icon: '人像'}
    //     }
    //   ]
    // },
    //
    // {
    //   path: '/basicNews',
    //   redirect: '',
    //   component: Layout,
    //   name: 'basicNews',
    //   meta: {title: '基础资料管理', icon: '设置'},
    //   children: [
    //     {
    //       path: 'advert',
    //       name: 'Advert',
    //       component: _import('basicNews/advert'),
    //       meta: {title: '广告设置', icon: '设置'}
    //     },
    //     {
    //       path: 'cutPrice',
    //       name: 'CutPrice',
    //       component: _import('basicNews/cutPrice'),
    //       meta: {title: '砍价设置', icon: '设置'},
    //     },
    //     {
    //       path: 'carOptimal',
    //       name: 'carOptimal',
    //       component: _import('basicNews/carOptimal'),
    //       meta: {title: '车辆优选', icon: '设置'},
    //     },
    //     {
    //       path: 'feedback',
    //       name: 'feedback',
    //       component: _import('basicNews/feedback'),
    //       meta: {title: '意见反馈', icon: '设置'},
    //     },
    //     {
    //       path: 'fbLook',
    //       name: 'fbLook',
    //       component: _import('basicNews/fbLook'),
    //       meta: {title: '意见反馈', icon: 'table'},
    //       hidden: true,
    //     },
    //
    //     {
    //       path: 'helpCenter',
    //       name: 'helpCenter',
    //       component: _import('basicNews/helpCenter'),
    //       meta: {title: '帮助中心', icon: '设置'},
    //     },
    //   ]
    // },
    //
    // {
    //   path: '/insurance',
    //   redirect: '/insurance/index',
    //   component: Layout,
    //   name: 'insurance',
    //   meta: {title: '保险列表', icon: '保险销售'},
    //   children: [
    //     {
    //       path: 'index',
    //       name: 'index',
    //       component: _import('insurance/index'),
    //       meta: {title: '保险列表', icon: '保险销售'}
    //     },
    //     {
    //       path: 'insurance',
    //       name: 'insurance',
    //       component: _import('insurance/insurance'),
    //       meta: {title: '保险信息', icon: 'table'},
    //       hidden: true,
    //     }
    //   ]
    // },
    //
    // // {
    // //   path: '/financial',
    // //   redirect: '/financial/index',
    // //   component: Layout,
    // //   name: 'financial',
    // //   meta: {title: '财务管理', icon: 'table'},
    // //   children: [
    // //     {
    // //       path: 'index',
    // //       component: _import('financial/index'),
    // //       meta: {title: '财务管理', icon: 'table'}
    // //     },
    // //     {
    // //       path: 'look',
    // //       name: 'look',
    // //       component: _import('financial/look'),
    // //       meta: {title: '收支记录', icon: 'table'},
    // //       hidden: true,
    // //     }
    // //   ]
    // // },
    //
    // {
    //   path: '/carPrice',
    //   redirect: '/carPrice/index',
    //   component: Layout,
    //   name: 'carPrice',
    //   meta: {title: '车辆价格表', icon: '价格'},
    //   children: [
    //     {
    //       path: 'index',
    //       component: _import('carPrice/index'),
    //       meta: {title: '车辆价格表', icon: '价格'}
    //     },
    //     {
    //       path: 'carPrice',
    //       name: 'carPrice',
    //       component: _import('carPrice/carPrice'),
    //       meta: {title: '添加价格', icon: 'table'},
    //       hidden: true,
    //     }
    //   ]
    // },

];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

export const asyncRouterMap = [
    {
        path: '/overview',
        component: Layout,
        name: 'overview',
        children: [
            {
                path: 'index',
                name: 'overview/index',
                component: _import('overview/index'),
                meta: {title: '工作概览', icon: '工作概览'},
            }
        ]
    },


    {
        path: '/equipment',
        component: Layout,
        redirect: '/equipment/warehouse',
        name: 'equipment',
        meta: {title: '装备管理', icon: '账号'},
        children: [
            {
                path: 'storage',
                name: 'equipment/storage',
                component: _import('equipment/storage'),
                meta: {title: '库房装备', icon: '装备信息'},
            }
        ]
    },
    {
        path: '/warehouse',
        component: Layout,
        name: 'warehouse',
        meta: {title: '仓库信息', icon: '仓库信息'},
        children: [
            {
                path: 'info',
                name: 'warehouse/info',
                component: _import('warehouse/info'),
                meta: {title: '仓库信息'},
            },
            {
                path: 'supplier',
                name: 'warehouse/supplier',
                component: _import('warehouse/supplier'),
                meta: {title: '供应商'},
            },
            {
                path: 'safety',
                name: 'warehouse/safety',
                component: _import('warehouse/safety'),
                meta: {title: '安全库存'},
            },

        ]
    },
    {
        path: '/equipmentOperation',
        component: Layout,
        name: 'equipmentOperation',
        meta: {title: '装备维保', icon: '装备维保'},
        children: [
            {
                path: 'charging',
                name: 'charging',
                component: _import('equipmentOperation/charging'),
                meta: {title: '充电'},
            },
            {
                path: 'service',
                name: 'service',
                component: _import('equipmentOperation/service'),
                meta: {title: '维修'},
            },
            {
                path: 'maintenance',
                name: 'maintenance',
                component: _import('equipmentOperation/maintenance'),
                meta: {title: '保养'},
            },
        ]
    },

    {
        path: '/process',
        component: Layout,
        name: 'process',
        meta: {title: '流程管理', icon: '流程管理'},
        children: [
            {
                path: 'scrapped',
                name: 'scrapped',
                component: _import('process/scrapped'),
                meta: {title: '报废流程'},
            },
            {
                path: 'transfer',
                name: 'transfer',
                component: _import('process/transfer'),
                meta: {title: '调拨流程'},
            },
            {
                path: 'secondment',
                name: 'secondment',
                component: _import('process/secondment'),
                meta: {title: '借调流程'},
            },
            {
                path: 'bill',
                name: 'bill',
                component: _import('process/bill'),
                meta: {title: '报废申请单'},
                hidden: true,
            },
        ]
    },
    {
        path: '/workLog',
        component: Layout,
        name: 'workLog',
        meta: {title: '工作日志', icon: '工作日志'},
        children: [
            {
                path: 'borrow',
                name: 'borrow',
                component: _import('workLog/borrow'),
                meta: {title: '借还日志'},
            },
            {
                path: 'inventory',
                name: 'inventory',
                component: _import('workLog/inventory'),
                meta: {title: '盘点日志'},
            },
        ]
    },
    {
        path: '/report',
        component: Layout,
        name: 'report',
        children: [
            {
                path: 'index',
                name: 'report/index',
                component: _import('report/index'),
                meta: {title: '统计报表', icon: '统计报表'},
            },
        ]
    },
    {
        path: '/personnel',
        component: Layout,
        name: 'personnel',
        meta: {title: '人员管理', icon: '人员管理'},
        children: [
            {
                path: 'info',
                name: 'info',
                component: _import('personnelManagement/personnelManagement'),
                meta: {title: '人员信息'},
            },
            {
                path: 'permission',
                name: 'permission',
                component: _import('personnel/permission'),
                meta: {title: '权限'},
            },
        ]
    },
    {
        path: '/surroundings',
        component: Layout,
        name: 'surroundings',
        children: [
            {
                path: 'index',
                name: 'surroundings/index',
                component: _import('surroundings/index'),
                meta: {title: '环境管理', icon: '环境控制'},
            },
        ]
    },
    {
        path: '/training',
        component: Layout,
        name: 'training',
        children: [
            {
                path: 'index',
                name: 'training/index',
                component: _import('training/index'),
                meta: {title: '教学培训', icon: '教学培训'},
            },
        ]
    },
    {
        path: '/category',
        component: Layout,
        name: 'category',
        children: [
            {
                path: 'index',
                name: 'category/index',
                component: _import('category/index'),
                meta: {title: '装备类别', icon: '装备类别'},
            },
        ]
    },
    {
        path: '/message',
        component: Layout,
        name: 'message',
        hidden: true,
        children: [
            {
                path: 'index',
                name: 'message/index',
                component: _import('message/index'),
                meta: {title: '消息中心', icon: '消息中心'},
            }
        ]
    },

    // {
    //     path: '/qx',
    //     component: Layout,
    //     name: 'qx',
    //     meta: {title: '分局管理', icon: '权限'},
    //     children: [
    //         {
    //             path: 'branchManagement',
    //             name: 'branchManagement',
    //             component: _import('policeStation/branchManagement'),
    //             meta: {title: '分局管理', icon: '账号'},
    //         }
    //     ]
    // },
    // {
    //     path: '/equipment',
    //     component: Layout,
    //     name: 'equipment',
    //     meta: {title: '装备管理', icon: '账号'},
    //     children: [
    //         // {
    //         //     path: 'warehouse',
    //         //     name: 'warehouse',
    //         //     component: _import('equipmentManagement/warehouse'),
    //         //     meta: {title: '仓库管理'}
    //         // },
    //         {
    //             path: 'equipmentList',
    //             name: 'equipmentList',
    //             component: _import('equipmentManagement/equipmentList'),
    //             meta: {title: '装备列表'}
    //         },
    //         {
    //             path: 'equipmentRecord',
    //             name: 'equipmentRecord',
    //             component: _import('equipmentManagement/equipmentRecord'),
    //             meta: {title: '装备记录'}
    //         }
    //     ]
    // },

    // {
    //     path: '/workOrder',
    //     component: Layout,
    //     name: 'workOrder',
    //     meta: {title: '工单管理', icon: '订单'},
    //     children: [
    //         {
    //             path: 'index',
    //             name: 'workOrder/index',
    //             component: _import('workOrder/index'),
    //             meta: {title: '工单列表', icon: '订单'}
    //         },
    //     ]
    // },


    {path: '*', redirect: '/404', hidden: true}
]
