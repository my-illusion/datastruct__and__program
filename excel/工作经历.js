玩家智能触达核心服务
基于离线和实时玩家画像和行为数据，打造玩家精细化触达服务闭环，为不同玩家人群提供差异化的流失召回、好友召回等服务，并实时跟踪数据效果。

独立负责短信、彩信新增流程功能开发，负责实时数据效果分析功能开发

技术栈: umijs及其周围生态

技术难点：
    1、基于rollup抽离公共下拉复选等控件、解决@babel/runtime代码内联、组件内图片加载、less文件提取失败等问题
    https://github.com/my-illusion/MultiSelect.git(main branch)
    2、基于axios拦截器封装连续请求拦截工具，过滤无效的数据请求，优化界面展示
    https://github.com/my-illusion/smart_axios.git
    3、实现echarts markLine自定义toolTip功能
    https://github.com/my-illusion/article/blob/master/echarts%20markLine%E8%87%AA%E5%AE%9A%E4%B9%89hover%E5%8A%9F%E8%83%BD.js
    

权限中心服务管理系统

作为数据中台api服务的可视化操作平台，提供对各个系统资源权限的精细化控制服务

由于系统涉及的资源和用户数量较多，页面长列表操作会有卡顿现象，因此有如下优化

1、精细化UI组件颗粒度

