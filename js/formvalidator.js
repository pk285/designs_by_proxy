// from https://getbootstrap.com/docs/4.0/components/forms/ validation section
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('contact-form');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$("#sendMessageBtn").click(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    $.ajax({
        url: "./php/sendmail.php",
        type: "post",
        data: {
            name: name,
            email: email,
            message: message
        },
        success: function() {
            $("#contact-form").trigger("reset");
            alert("Email sent successully!");            
        },
        error: function() {
            alert("Email did not send!");
        }
    });
});