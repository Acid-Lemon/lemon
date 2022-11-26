# javascripts

创建变量：let 变量名

创建常量：const 变量名

检查数据类型：typeof 变量名

弹出一个对话框：
let name = prompt('你叫什么名字?')

弹出一个提示框：
alert('这是一个提示框')

将文本转换为数字：
let myNum = Number(myString)

将数字转换为文本：
let myString = myNum.toString()

获取字符串长度：
变量名.length

在字符串中检索内容：
变量名.indexOf('内容')
若未检索到内容，返回-1

提取字符串：
变量名.slice(开始索引,结束索引)
第二个参数可省略，返回开始索引后的全部内容

将字符串转换为大写：
变量名.toUpperCase()

将字符串转换为小写：
变量名.toLowerCase()

替换字符串：
变量名 = 变量名.replace('被替换内容','所替换内容');

将字符串打印到浏览器控制台：
console.log('变量名')

字符串转换为数组：
let myArray = 变量名.split(',')

数组转换为字符串：
let 变量名 = myArray.join(',')
或使用 toString()，join()的优点在于可以指定分隔符

在数组末尾添加元素：
myArray.push('元素 1', '元素 2')
返回数组的新长度
unshift()作用于数组开始

在数组末尾删除元素：
myArray.pop()
返回已删除的项目
shift()作用于数组开始

if...else 语句：
if (判断条件) {
真执行内容
} else {
假执行内容
}

else if 语句：
if (判断条件 1) {
真执行内容
} else if (判断条件 2) {
真执行内容
}

逻辑与：
&&

逻辑或：
||

逻辑非：
!—

switch 语句:
switch (表达式或值) {
case 关键字 1:
执行内容
break;

case 关键字 2:
执行内容
break;

default:
执行内容
}

三元运算符：
(判断条件) ? 真执行内容 : 假执行内容

for 循环：
for (计数变量; 退出条件; 最终条件) {
循环内容
}

退出循环：
break;

跳过当前循环：
continue;

while 循环：
while (退出条件) {
循环内容
}

do...while 循环：
do {
循环内容
} while (判断条件);

自定义函数：
function 函数名(参数) {
函数内容
}

调用函数：
函数名(参数)
