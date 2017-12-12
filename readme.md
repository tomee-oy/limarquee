### Limarquee
A jquery plugin for infinite scroll

### Install
npm install --save-dev limarquee

### Structure
``` bash
├── Readme.md                   # help
├── webpack.config.js           # webpack.config.js配置
├── test                        # 测试案例
│   ├── index.css               # 测试案例样式表
│   ├── index.html              # 测试案例静态页面
│   └── index.js                # 测试案例入口
├── lib                         # 插件核心代码
│   ├── style.css               # 插件内置样式表
│   └── index.js                # 测试案例入口
├── package.json
├── .babelrc
└── index.js                    # 外部引用插件时的入口
```

### Usage
Infinite scroll work on a container element with its child of ul, and then ul contain children of li
```html
 <div class="container">
   <ul>
     <li>信息内容一</li>
     <li>信息内容二</li>
   </ul>
 </div>
```

### Options
``` javascript
import Limarquee from 'limarquee'
const limarquee = new Limarquee('.container')
limarquee.render({
  direction: left	// 滚动方向，可选 left / right / up / down
  loop:	-1	      // 循环次数，-1 为无限循环
  scrolldelay:	0	// 每次重复之前的延迟
  scrollamount:	50	// 滚动速度，越大越快
  circular:	true	// 无缝滚动，如果为 false， 则和 marquee 效果一样
  drag: true	    // 鼠标可拖动
  runshort:	true	// 内容不足是否滚动
  hoverstop: true	// 鼠标悬停暂停
  xml: false	    // 加载 xml 文件
  inverthover: false	// 反向，即默认不滚动，鼠 标悬停滚动
})
```
### Demo Usage
``` javascript
npm install
npm run server
```
And then, open with [localhost:3333/index.html](localhost:3333/index.html)

### Constribution to Limarquee
More knowledge from [here](http://www.dowebok.com/188.html)
