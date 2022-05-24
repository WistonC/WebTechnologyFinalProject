$(function () {
    $("#addCart").on("click", addToCart);
})

function addToCart() {
    let v = $("#sizeSelect").val();
    if (v == 1) {
        document.getElementById("inCart").innerHTML = "<li class=\"list-group-item\"><img src=\"img/gopro%20hero9a.jpg\"><br>Gopro Hero 9 Black</li>";
    } else if (v == 2) {
        window.alert("This item is out of stock!")
    } else if (v == 3) {
        document.getElementById("inCart").innerHTML = "<li class=\"list-group-item\"><img src=\"img/gopro%20hero9a.jpg\"><br>Gopro Hero 9 Black</li>";
        document.getElementById("inCart").insertAdjacentHTML("beforeend", "<li class=\"list-group-item\"><img src=\"img/dualBattery.jpg\"><br>Dual Battery Charger</li>");
    } else if (v == 4) {
        document.getElementById("inCart").innerHTML = "<li class=\"list-group-item\"><img src=\"img/gopro%20hero9a.jpg\"><br>Gopro Hero 9 Black</li>";
        document.getElementById("inCart").insertAdjacentHTML("beforeend", "<li class=\"list-group-item\"><img src=\"img/pole.jpg\"><br>Pole</li>");
    }
}