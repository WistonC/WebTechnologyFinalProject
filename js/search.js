$(function () {
    let availableTags = ["Built-In Mounting", "Folding Fingers", "Mods", "3.5mm Audio Mic Input", "RAW Audio Capture", "Wi-Fi", "Bluetooth®", "GPS Enabled", "GoPro App"];
    $("#search").autocomplete({
        source: availableTags
    });
})