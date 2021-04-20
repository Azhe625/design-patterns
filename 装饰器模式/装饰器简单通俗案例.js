// 想象这里有一坨屎山，它虽然实现了业务功能，但代码乱七八糟
var falsebbb = "rld",
 aaatrue = "hel",
 shit = "lo wo",
 dsadq2 = aaatrue + shit + falsebbb;
// 我们把屎山的逻辑抽离出来，包装成函数
function oldShit() {
 // 屎山，也就是上面的代码
}
// 老板让我们加一个新功能，我们把新功能写在新函数里
function newShit() {
 // 自己写的新屎山
}
// 把新旧功能合并包装一下
function moreShit() {
 oldShit();
 newShit();
}
// 这种“只添加，不修改”的模式就是装shi器模式，newShit即装shi器