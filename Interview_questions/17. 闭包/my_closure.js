/*
 company: shangguigu
 author: yanzhiyong
 content: 闭包
*/

/*
* 理解：什么是闭包?
*   1. 密闭的容器，类似于set，map容器，存储数据的
*   2. 闭包是一个对象，存放数据的格式： key: value
* 形成的条件：
*   1. 函数嵌套
*   2. 内部函数引用外部函数的局部变量
* 闭包的优点：
*   延长外部函数局部变量的生命周期
* 闭包的缺点：
*   容易造成内存泄漏
* 注意点：
*   1. 合理的使用闭包
*   2. 用完闭包要及时清除(销毁)
* */

// function fun() {
//   var count = 1;
//   function fun2() {
//     console.log(count);
//   }
//
//   fun2();
// }
//
// fun();

// 闭包的应用场景（一个简单的面试题）
// function fun() {
//   var count = 1;
//   return function () {
//     count++;
//     console.log(count);
//   }
// }
//
// var fun2 = fun();
// fun2(); // 2
// fun2(); // 3
//


/*
   说说它们的输出情况（一道综合的闭包面试题）
   */

function fun(n, o) {
  // var n = 0, o;
  console.log(o)
  return {
    fun: function (m) {
      // var m = 1;
      return fun(m, n)
    }
  }
}
var a = fun(0) //undefined
a.fun(1) // fun(0,n).fun(1)-->fun(1,n) n=0  0
a.fun(2) // fun(0,n).fun(2)-->fun(2,n) n=0  0
a.fun(3) // fun(0,n).fun(3)-->fun(3,n) n=0  0

var b = fun(0).fun(1).fun(2).fun(3).fun(50).fun(22) // 
    //fun(0,n) undined
    //fun(0,n).fun(1)-->fun(1,n) n=0 0
    //fun(1,n).fun(2)-->fun(2,n) n=1 1
    //fun(2,n).fun(3)-->fun(3,n) n=2 2
    //fun(3,n).fun(50)-->fun(50,n) n=3 3
    //fun(50,n).fun(22)-->fun(22,n) n=50 50

var c = fun(0).fun(1) // undined ，0
c.fun(2) // fun(1,n).fun(2) 1
c.fun(3) // fun(1,n).fun(3) 1

