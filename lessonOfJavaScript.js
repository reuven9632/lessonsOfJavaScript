while (!start_form) {
    function start_form(form) {
        var name = form.name.value,
            password = form.password.value,
            gender = form.gender.value;

        if (takeValToLook(name, "name") && takeValToLook(password, "password") && takeValToLook(gender, "gender")) {
            window.location.replace("https://reuven9632.github.io/AlonaNails/");
            return true;
        }
    }
}

function takeValToLook(name, val) {
    if (name.trim() == "") {
        $('<div class="message_error">Error: ' + val + ' is not available</div>').insertAfter('.message');
        removeMe();
    }
    else
        return true;
}
function removeMe() {
    var remove = setInterval("$('.message_error').remove()", 7000);
}



$(document).ready(function () {
   $.ajax({
       type: "post",
       url: "funcForm.php",
       data: ({name: "Jekh", number: 5}),
       dataType: "html",
       beforeSend: function () {
            $('.message_error').html("<p>wait please...</p>");
        },
       success: function (data) {
        $('.message_error').html("<p>sending was success!!!</p>");
        // $(".data").text(data);
        if (data == "success")
            $(".data").text("success");
            else 
            $(".data").text("fail");
       }
   }); 
});