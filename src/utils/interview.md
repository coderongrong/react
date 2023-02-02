
// set map 

Set 和 Map 主要的应用场景在于 数据重组 和 数据储存。
Set 是一种叫做 集合 的数据结构，Map 是一种叫做 字典 的数据结构。

集合（Set）：
ES6 新增的一种新的数据结构，类似于数组，成员唯一（内部元素没有重复的值）。且使用键对数据排序即顺序存储。

Set 本身是一种构造函数，用来生成 Set 数据结构。

Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。

四、Set和Map区别
1. Map是键值对，Set是值的集合，当然键和值可以是任何的值；

2. Map可以通过get方法获取值，而set不能因为它只有值；

3. 都能通过迭代器进行for...of遍历；

4. Set的值是唯一的可以做数组去重，Map由于没有格式限制，可以做数据存储

5. map和set都是stl中的关联容器，map以键值对的形式存储，key=value组成pair，是一组映射关

系。set只有值，可以认为只有一个数据，并且set中元素不可以重复且自动排序。
MAP
Map方法	说明
set(key, val):  向Map中添加新元素
get(key):	    通过键值查找特定的数值并返回

has(key):	    判断Map对象中是否有Key所对应的值，有返回true,否则返回false
delete(key):	通过键值从Map中移除对应的数据
clear():	    将这个Map中的所有元素删除

set
add(value)：    添加某个值，返回 Set 结构本身(可以链式调用)。

delete(value)：	删除某个值，删除成功返回true，否则返回false。
has(value)：	返回一个布尔值，表示该值是否为Set的成员。
clear()：	    清除所有成员，没有返回值。
<!-- const set = new Set([1,2,3,4,5])
console.log(set[0])
for(const key of set) {
  console.log(key)
}

const smap = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])
console.log(smap)
for(const key of smap) {
  console.log(key)
} -->