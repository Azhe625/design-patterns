class SingleDog {
    show() {
        console.log("单例模式")
    }
}
SingleDog.getInstance = (function(){
    let instance = null
    console.log("调用了")
    return function() {
        console.log("内部调用了")
        if(!instance) {
            instance = new SingleDog()
        }

        return instance
    }
})()


const s1 = SingleDog.getInstance()
const s2= SingleDog.getInstance()
console.log(s1 === s2)

