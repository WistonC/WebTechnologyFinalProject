var topp = "p3";

function toTop(newTop) {
    domTop = document.getElementById(topp).style;
    domNew = document.getElementById(newTop).style;
    domTop.zIndex = "0";
    domNew.zIndex = "10";
    topp = newTop;
}