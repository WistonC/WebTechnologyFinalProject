$(function () {
    $("#sizeSelect").on("change", getImage);
})

function getImage() {
    let v = $("#sizeSelect").val();
    if (v == 1) {
        document.getElementById("img").innerHTML = "<img src=\"img/gopro%20hero9a.jpg\">";
        inventoryCheck(v);
    } else if (v == 2) {
        document.getElementById("img").innerHTML = "<img src=\"img/gopro%20hero9a.jpg\"><img src=\"img/AdventureKit.jpg\">";
        inventoryCheck(v);
    } else if (v == 3) {
        document.getElementById("img").innerHTML = "<img src=\"img/gopro%20hero9a.jpg\"><img src=\"img/dualBattery.jpg\">";
        inventoryCheck(v);
    } else if (v == 4) {
        document.getElementById("img").innerHTML = "<img src=\"img/gopro%20hero9a.jpg\"><img src=\"img/pole.jpg\">";
        inventoryCheck(v);
    } else {
        document.getElementById("img").innerHTML = "";
        document.getElementById("availability").innerText = "";
    }
}

function inventoryCheck(v) {
    let invetory = ["Hero9: in stock!", "Adventure Kit: out of stock!", "Hero9 + Dual Battery: in stock!", "Hero9 + Pole: in stock!"];
    document.getElementById("availability").innerText = invetory[v - 1];
}