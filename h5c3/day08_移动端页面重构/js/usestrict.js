// 'use strict'

// age = 19;//必须使用var声明变量
// 
// 一个对象中不能存在同名属性
var obj = {
	name : '1607',
	age:18,
	age : 'gz'
}

function test(a,a){
	'use strict'
	console.log(a)
}

console.log(obj.age);

delete obj;