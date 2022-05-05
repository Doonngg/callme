//菜单展开折叠
var foldBtn = document.querySelector(".fold-btn");
var closeBtn = document.querySelector(".close-btn");

foldBtn.addEventListener("click", function() {
	myAnimate(".menu-list", "100%", "height", "height .3s");
})
closeBtn.addEventListener("click", function() {
	myAnimate(".menu-list", "0", "height", "height .3s");
})



//css3动画封装
function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
	document.querySelector(animateNode).style.transition = animateTransition;
	document.querySelector(animateNode).style[animateStyle] = animateEnd;
}