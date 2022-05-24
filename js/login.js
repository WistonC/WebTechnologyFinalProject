$(document).ready(function () {
    $("#loginform").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'php/a.php',
            data: $(this).serialize(),
            success: function (response) {
                var jsonData = JSON.parse(response);
                if (jsonData.success == "1") window.location.href = "product.html";
                else window.alert('Username or Password error! ');
            }
        });
    });
});