1. PerferMance
   重写了 虚拟DOM 的实现 （跳过静态节点， 只处理动态节点）
   update 性能提高了
   ssr 速度提高了

2. tree shaking
   shaking 不需要的模块和方法直接忽略

3. fragment
    div 模块中不在是一个根节点

4. <Teleport />
    Teleport 传动门组件

5. <suspense />
    suspense 等待操作的异步操作项

6. typeScript
    typeScript 更好的支持ts的写法 预编译的js 最后编译成js

7. composition API
    composition 组合式APi

8. Custom Render API
    自定义渲染容器API

9. proxy
    proxy 响应式核心代理不同  vue2 Object.defineProerty  vue3 proxy
    Object.keys(obj).concat(Object.getOwnPropertySymbols(obj))    Object.getOwnPropertySymbols 获取 Symbols 属性
    es6 Reflect.ownKeys(obj)
 
 vue 面试

# 对MVVM的理解
    model(数据) -> view(视图) -> viewModel(controller) 
    ref(可以手动操作)  v-model
    vue MVVM
    react MVC
    vue（渐进式的概念是可以自由组合功能）

# 请说一下vue2 vue3 的响应式数据的理解
  响应式数据的核心是数据变化了能监控到，对象在vue2中采用defineProperty (vue.util.defineReactive)将数据定义为了响应式数据（拦截所有的属性增加了getter和setter）,缺陷就是需要递归，不存在的属性无法被监控到。 vue3采用了proxy直接就可以对对象拦截，不用重写Getter和Setter方法，性能高，不需要递归，对数组并没有采用defineProperty因为数组中可能数组很长但是用户不会操作索引更改数据
  - Vue2中减少层级数据嵌套不要过深
  - 如果不需要响应式的数据就不要放在data中， 合理使用Object.freeze
  - 我们尽量缓存使用过的变量

# vue2 中如何检测数组的变化
- vue2中并没有使用defineProperty来检测数据（性能差），vue2中是重写了数据的方法（7个可以改变原数组的方法）， 通过原型链函数劫持的方法来实现的（缺陷是不能检测到数组索引的更改和数据长度的更改）数组中的元素也会被再次观测

# vue2中如何进行依赖收集 （观察者模式）
- 依赖收集的目的是，等数据变化了可以更新数据，如何收集 每个属性都有一个Dep属性，每个对象都有一个dep属性，每个组件在渲染的过程中都会创建一个渲染watcher（watcher有三种，渲染watcher，计算属性watcher，用户watcher），一个属性可能会有多个watcher，反过来，一个watcher有多个dep
- 当调用取值方法的时候如果有watcher就会将watcher收集起来，等会数据变化了会通知自己对应的dep出发更新调用watcher.update方法

# 如何理解vue中模板编译原理 （ 模板编译原理的核心方法是 ast -> 生成代码 ）
- 会将模板变成ast语法树
- 对ast语法树经行优化，标记静态节点 （vue3中模板编译做了哪些优化，patchFlag， blockTree, 事件缓存， 节点缓存...）
- 代码生成 拼接render函数字符串 + new Function + with函数

# vue的生命周期是怎么实现的
- 生命周期钩子在内容会被vue维护成一个数组 （vue内部有一个方法 mergeOptions）和全局的生命周期合并最终转换成数组，当执行到具体流程时会执行钩子 （发布订阅者模式） callHook来实现

# Vue生命周期方法有哪些，一般哪一步发请求及原因？
- created和mounted中 如果同步操作created中取法获取dom
- ajax肯定会等你同步代码执行完后，才能拿到结果

# vue组件data为什么都是一个函数
- 因为内部会调用vue.extend 会将组件的定义传入，此时会将用户的参数经行合并检测data属性，如果data不是函数会报警告
- 会将当前定义的data合并到组件的内部，如果data是一个对象，就会存在数据被共享

# vue.mixin的使用场景和原理
- mixin 的价值在哪里，主要解决的问题是公共逻辑，抽离可采用mixin （比较常见的是react的hooks compositionApi）
- 缺陷是数据来源不明确，命名冲突问题   vue3 采用的组合式api更加方便
- 内部实现原理，主要是采用了mergeOptions，把数据合并到全局的options中，每个组件初始化的时候会将选项合并

# nextTick 在哪里使用，使用的原理
- nextTick的功能是批处理，多次调用默认会是将逻辑展缓到队列中，等同步代码执行完毕后才采用，同步的方法依次刷新队列（nexttick本身采用的是异步方法，但是执行的逻辑是采用的同步的方法）
- 内部实现原理（异步的实现原理 先采用promise.then 不行就采用mutationObserve 然后就是setimmediate 最后是setTimeout）优雅降级处理

# watch 和 computed的原理
- watch和computed内部都是基于watcher的，区别是如果computed数据可以用于页面渲染，watch不行，computed只有在读取数据时候才会执行对应回调（lazy为true所以不会立即执行），watch会默认执行一次（拿到他的老值），computed采用了一个dirty的属性，实现是缓存的机制，多次改变如果依赖的值不发生改变dirty不会比变化，拿到的都是老值

# vue.set方法是如何实现的
为了给以前不存在的对象添加属性可以实现页面更新，对象采用的是defineProperty不存在的属性检测不到，数组没有检测索引所以也监控不到
- Vue.set({}, 'name', 1) 对象本身是响应式的，如果对象是响应式的那么对象本身就会有一个dep属性，我新增属性后会触发dep对应的watcher
- 针对数组内部会调用 splice 方法，针对对象会调用 defineReactive 方法并且手动notify

# vue为什么需要虚拟DOM
- 最核心的是跨端，不同的平台实现的方案不同，内部实现可以不局限于针对浏览器平台
- 如果开发者频繁的操作dom可能会浪费性能，虚拟dom你可以认为是一个缓存，我们会先更新虚拟dom，在更新到页面上
- 因为DOM diff比较的是前后的虚拟DOM 比较差异更新页面

# vue中diff算法的原理
- diff算法是O(n)级别的，采用的是同级比较，内部是采用深度优先遍历的方式遍历节点
- 节点判断是否是同一个元素，如果是同一个元素，则比对属性，和比对子节点，如果不是则直接删除老节点，换成新节点
- vue2 采用的是双指针对一些场景做了优化策略（如果是静态节点，可以跳过diff算法）
- 头头，尾尾，头尾，尾头经行了优化，
- 最后就是乱序比较，是根据老节点创见一个引射表，用新的去里面找能复用的就是复用节点（乱序的时候可能中间的顺序是固定的，但是做了一次移动）

- vue3 里面还有一个blockTree概念，如果是通过模板编译的，会把dymanicChildren组成数组，直接数组对比，性能更好，如果不能采用这种方式则采用的全量对比
- vue3 优化移动节点的时候采用了最长递增子序列来实现的， 贪心+二分查找+前驱节点实现的O(nlogn)

# vue 中的key的作用和原理
- key的作用是为了表示唯一性，在diff算法的时候可以经行复用，判断时候节点相同（tag, key），key在动态列表中不要使用索引，如果是索引相当于没有写，会导致更新出错误

# 对vue组件化的理解
 组件化最早出现在webComponent浏览器可以实现自定义标签，兼容性差。 组件化的好处（为了能够实现组件级的更新，合理规范代码，复用性强，单向流数据）
 组件化常用到的技术是 属性，事件，插槽

# vue 的组件渲染流程
  编写的组件（用的时候都是标签的形式来使用的）-> ast语法树，识别的时候会根据组件创建一个虚拟节点 -> 组件变成真实的节点 -> 插到页面中

  - 注册组件，在当前的实例中可以获取到组件
  - vue.extend 根据组件对象创造一个组件类 sub
  - 创建一个组件的虚拟节点，虚拟节点组件会增加生命周期钩子，init方法
  - 组件的虚拟节点上会包含一个componentOptions(sub, children...)
  - 组件的初始化，就会调用组件的init钩子， new Sub （$mount）
  - 根据组件内容生成一个虚拟节点，创建节点， 插入到页面中

# vue 的组件更新流程
  什么情况会导致组件更新？ 组件自己的状态发生变化，props变化也会导致更新 父组件更新了，同时导致子组件更新
  - 组件属性变化了会执行patchVnode （对比属性 用新的属性覆盖掉之前的属性） VM.$options.propsData = propsData 如果响应式数据变化了，页面会更新

# vue 中异步组件原理
  对比图片的懒加载，流程是线渲染一个空节点，之后组件加载完毕后，强制重新渲染加载

# vue中函数式组件的优势及原理
  缺点无状态 没有生命周期，没有this 没有自己的数据源，可以接受props，单纯的页面渲染可以采用函数组件（正常组件是一个类，函数组件就是一个函数）

# vue中组件传值方式及区别
 - props emit
 - 兄弟之间传值 eventBus 可以借助共同的父节点来传值
 - 跨组件通信 vuex eventBus 可以实现  vue.observable

 - inject provide 开发组件库可以使用，其他场景不建议使用，导致数据混乱，来源不明确
 - $parent $children 来获取父子组件的实例
 - $refs 父拿到子的实例
 - $attrs $listeners 也可以通信 父组件传递给子组件的所有属性和方法

# props和emit的实现
 - props 在创建虚拟节点的时候 会被抽离到componentsOptions中的propsData中，就是在组件初始化的时候将propsData定义在组件中 _props 上
 - emit 默认给组件绑定的事件 会定义在组件的实例上 核心是发布订阅 $on $emit 解析时会将事件全部放在vm.$options._parentListeners

# $parent $children
  - 在组件初始化的时候可以拿到父组件，构造父子关系

# inject provide 如何实现跨级传递的
 - 父组件将数据定义在vm._provide上
 - 子组件通过vm.$parent向上找，最后将找到的属性定义在自己的身上

# $attrs $listeners
  - 获取所有的事件和属性直接定义在实例即可
  - defineReactive(vm, '$attrs', parentData && parentData.attrs)
  - defineReactive(vm, '$listeners',  options._parentListeners)

# $refs
  - 给组件添加后获取组件实例
  - $refs = vnode.componentInstance || vnode.elm

# v-if 和 v-for 那个优先级更高
  - v-for 优先级更高一些 如果写在同一个标签上，会导致每次循环都要进行判断，如果需要遍遍历遍判断，可以先做成计算属性在页面中使用

# v-if 和 v-for  v-model 的实现原理
  - v-for  原理就是拼接了一个循环函数 内部用了一个方法 _l
  - v-if 自动会转义成三元表达式  （v-for v-if） 并不会编译出directive来 在生成代码的时候就将这两个东西经行转义了
  - v-model 可以用在组件上（可以实现组件数据的同步） 还可以用在元素上 添加指令
  - v-model 在组件上就是 value + input 的语法糖
  - 如果放到表单元素上 v-model 是有一些差异的 会被解析成一个指令（在编译的时候会将 v-model 解析成一个指令） 默认会给 input 事件拼接一个处理中文输入法的问题， 在运行的时候需要调用指令（会对不同的类型做不同的处理） 指令执行的时候还会去处理修饰符 v-model.lazy

# vue 中 slot 是如何实现的， 什么时候使用它？
  - 具名插槽    构建一个映射表
  - 普通插槽     是在父组件中渲染vnode的  （ 只能用父组件的数据， 渲染后传递给子组件）
  - 作用域插槽   在子组件中渲染vnode的（可以使用子组件的数据来继续渲染） 表格组件， 自定义列中的内容 slot-scoped = { raw } （如果更新的话，插槽也会被更新，前后插槽不一致会强制重新渲染）