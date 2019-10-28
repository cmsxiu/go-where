// const 声明不能修改
// let 声明可以修改
/* let a = 1
a = 2
console.log(a) */

// 数组的结构赋值
// var [a, b, c] = [1, 2, 3];  // 1, 2, 3
// let [a, b, c] = [, 123,] // undefined, 123, undefined
// let [a = 123, b, c] = [, 123,] // 123, 123, undefined
// console.log(a, b, c)

// 对象结构赋值
// let { foo, bar } = { foo: "I", bar: "live" }
// console.log(foo, bar)

// 对象属性别名（如果有了别名，那么原来的名字就无效了）
// let { foo: abc, bar } = { foo: "I", bar: "live" }
// console.log(abc, bar)

// let { cos, sin, random } = Math;
// console.log(cos.PI, sin, random, Math.PI)

// 字符串的解构赋值
// let [a, b, c, d] = "love"
// console.log(a, b, c, d)

// let { length } = "I love you"
// console.log(length) // 10

// var m = require('./node-mk')
// console.log(m.sum(5, 6))

/*
	字符串相关拓展

	includes() 判断字符串中是否包含有指定的字符（有ture，无false），第一个参数为匹配的字符，第二个参数为从第几个开始
	startsWith() 判断字符串是否以待定的字符串开始
	endsWith()  判断字符串是否以待定的字符串结束

	模块字符串
*/

// let str = "我喜欢你很久了。你保护世界，我保护你"
// console.log(str.includes('我', 5))
// console.log(str.startsWith('我'))
// console.log(str.endsWith('你'))

// let obj = {
// 	un: 'lisi',
// 	age: '18',
// 	sex: 'male'
// }

// let tag = '<div><span>' + obj.un + '</span><div>' + '<div><span>' + obj.age + '</span><div>' + '<div><span>' + obj.sex + '</span><div>'
// let taga = `
// 	<div>
// 		<span>${obj.un}</span>
// 		<span>${obj.age}</span>
// 		<span>${obj.sex}</span>
// 	<div>
// 	`
// console.log(taga)

/*
	函数拓展

	1. 参数默认值
	2. 参数结构赋值
	3. rest参数
	4. ...扩展运算符
*/

// function foo (param) {
// 	let p = param || "I love you"
// 	console.log(p)
// }
// foo()

// function foo ({ n = "shen", age = 18 }) {
// 	console.log({ n, age })
// }
// foo({ n: "秋天" })

// function foo (a, ...rest) {
// 	console.log(a, rest)
// }

// function foo (...rest) {
// 	console.log(rest)
// }
// foo(1, 2, 3)

// 扩展运算符
// function foo (a, b, c, d) {
// 	console.log(a + b + c + d)
// }
// foo(1, 2, 3, 4)

// var arr = [1, 2, 3, 4, 5]
// foo.apply(null, arr)
// foo(...arr)

// 合并数组
// let arr = [1, 2]
// let arr2 = [3, 4]
// let arr3 = [...arr, ...arr2]
// console.log(arr3)

// 箭头函数
// let foo = v => console.log(123)
// foo('v')

// let foo = (a, b) => {
// 	console.log(a + b)
// }
// foo(1, 2)

// let arr = [123, 456, 789]
// arr.forEach(function (d, i) {
// 	console.log(d, i)
// })
// arr.forEach((d, i) => {
// 	console.log(d, i)
// })

/*
	箭头函数
	1. 箭头函数中的this取决于函数的定义，而不是调用
	2. 箭头函数不可以new
	3. 箭头函数没有arguments，可以使用rest参数代替
*/
/* function foo () {
	console.log(this)
	setTimeout(() => {
		console.log(this.num)
	}, 1000)
}
foo.call({ num: 1 }) */

/* let foo = () => { this.num = 123 }
new foo() */
let foo = (...rest) => {
	// console.log(a, b)
	// console.log(arguments)
	console.log(rest)
}
foo(1, 2, 3, 4)