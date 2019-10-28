var timer = setInterval(() => {
  // 包含文件名称的全路径
  console.log(__filename)
  // 文件的路径（不包含文件名称）
  console.log(__dirname)
  clearInterval(timer)
}, 1000)
// global == window
global.console.log(456)
console.log(global)
// argv是一个数组，默认情况下，前两项数据分别是：node.js环境的路径，当前执行的js文件的全路径
// 从第三个参数开始表示命令行参数
console.log(process.argv)
// arch系统操作位数  x64 / x86
console.log(process.arch)
