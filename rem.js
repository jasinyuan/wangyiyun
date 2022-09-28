// function remSize(){
//     //获取设备宽度
//     var deviceWideth = document.documentElenent.clientWidth || window.innerWidth
//     if (deviceWideth>=750) {
//         deviceWideth = 750
//     }
//     if (deviceWideth<=320) {
//         deviceWideth = 320
//     }
//     //750px-->1rem=100px
//     document.documentElement.style.fontSize = (deviceWideth/7.5)+'px'
//     //font-size
//     document.querySelector('body').style.fontSize = 0.3+'rem'
// }
// remSize()
// //当窗口发生变化就调用
// window,onresize = function(){
//     remSize()
// }