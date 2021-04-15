/** 
 * 单例模式实现案例 实现一个storage
 * */
class Storage {
    constructor() {
        this.localStorage = {}
    }
    static getInstance() {
        //判断是否有了这个Storage实例了
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        //如果有了直接返回
        return Storage.instance
    }

    getItem(key) {
        return this.localStorage[key]
    }

    setItem(key,value) {
        return this.localStorage[key] = value
    }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem('name','lz')

//对比两个是不是相等的
let val1 = storage1.getItem('name')
let val2 = storage2.getItem('name')
console.log(val1,val2)

/**
 * 这个是闭包的版本
 */

//这里是一个空的构造函数
function StorageBase(){
    
}
let localStorage = {}
StorageBase.prototype.getItem = function (key) {
    return localStorage[key]
}

StorageBase.prototype.setItem = function (key,value) {
    localStorage[key] = value
}

const Storage1 = (function(){
    let instance = null
    return function() {
        if(!instance) {
            instance = new StorageBase()
        }

        return instance
    }
})()

const s1 = new Storage1()
const s2 = new Storage1()
s1.setItem('name','lzz')
let vals2 = s2.getItem('name')
console.log(vals2)