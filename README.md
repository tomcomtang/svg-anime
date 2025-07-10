# EdgeOne Content Distribution Network Animation

一个展示 EdgeOne 内容分发网络(CDN)的 SVG 动画项目，模拟内容从源服务器分发到全球各个节点的过程。

## 功能特性

### 🌍 世界地图

- 简化的世界地图轮廓，包含各大洲
- 蓝色渐变背景，营造科技感

### 🎯 网络节点

- **主要节点**：Origin、US East、US West、Europe、Asia、Australia、South America
- **次要节点**：Canada、Mexico、Brazil、UK、Germany、France、Japan、China、India、Singapore、South Africa
- 节点大小区分层级，带有脉冲动画效果

### 🔗 连接动画

- 从源点开始的分发动画
- 主要节点到次要节点的二次分发
- 动态连接线条，带有发光效果
- 数据粒子流动动画

### 📊 实时统计

- 网络状态监控
- 活跃连接数统计
- 总节点数显示
- 平均延迟计算

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **SVG 动画** - 原生 SVG 动画效果

## 项目结构

```
src/
├── app/
│   ├── page.tsx          # 主页面
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
└── components/
    ├── EdgeOneAnimation.tsx  # 主动画组件
    ├── WorldMap.tsx          # 世界地图组件
    ├── DataParticle.tsx      # 数据粒子组件
    └── StatsPanel.tsx        # 统计面板组件
```

## 运行项目

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 动画说明

### 动画流程

1. **初始状态**：显示世界地图和所有网络节点
2. **第一波分发**：从 Origin 节点向主要节点分发内容
3. **第二波分发**：从主要节点向次要节点分发内容
4. **循环播放**：动画每 6 秒自动重复一次

### 交互功能

- 点击"Start Animation"按钮手动触发动画
- 实时查看网络状态和性能指标
- 动画过程中显示活跃连接数和延迟

## 自定义配置

### 添加新节点

在`EdgeOneAnimation.tsx`中修改`primaryNodes`和`secondaryNodes`数组：

```typescript
const primaryNodes: Node[] = [
  { id: "new-node", x: 60, y: 50, name: "New Node", level: "primary" },
  // ...
];
```

### 修改连接关系

在`connections`数组中添加或修改连接：

```typescript
const connections: Connection[] = [
  { from: "origin", to: "new-node", delay: 1200 },
  // ...
];
```

### 调整动画时间

修改动画持续时间和延迟：

```typescript
const startAnimation = () => {
  setIsAnimating(true);
  setTimeout(() => setIsAnimating(false), 5000); // 动画持续时间
};
```

## 部署

项目可以部署到任何支持 Next.js 的平台：

- **Vercel**：`vercel --prod`
- **Netlify**：`npm run build && netlify deploy`
- **自托管**：`npm run build && npm start`

## 许可证

MIT License
