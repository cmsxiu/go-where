/*
	模块化开发

	传统非模块化开发有如下的缺点
	1.命名冲突
	2.文件依赖

	标准的模块化规划
	1.AMD - requireJs
	2.CMD - seaJs

	服务器端的模块化规范
	1.CommonJs - Node.js
	2.

	模块化想换的规则
	1.如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立
	2.模块成员的导出和引入
*/
var sum = function (a, b) {
	return parseInt(a) + parseInt(b)
}
exports.sum = sum