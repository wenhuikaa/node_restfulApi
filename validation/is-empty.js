//value就是register.js传过来的errors或者就是用户填入的信息
//Object.keys 返回一个所有元素为字符串的数组
const isEmpty = value => {
    return value === undefined || value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
  }
  
  module.exports = isEmpty;