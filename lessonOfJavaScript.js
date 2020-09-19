while (!start_form) {
    function start_form(form) {
        var name = form.name.value,
            password = form.password.value,
            gender = form.gender.value;

        if (tt(name, "name") && tt(password, "password") && tt(gender, "gender")) {
            window.location.replace("http://www.google.com");
            return true;
        }
        /* if (name.trim() == "")
            $('.message').show().attr('class', "message_error").html('Error: name is not available');
        else if (password.trim() == "") {
            alert("you mast write password");
            $('.message').attr('class', "message_exeption").html('Error: you mast write password');
        }
        else if (!gender)
            // alert("you mast choise gender");
            $('.message').attr('class', "message_exeption").html('Error: you mast choise gender');
        else
            window.location.replace("http://www.google.com"); */
    }
}

function tt(name, val) {
    if (name.trim() == "") {
        $('<div class="message_error">Error: ' + val + ' is not available</div>').insertAfter('.message');
        remuveMe();
    }
    else
        return true;
}
function remuveMe() {
    var remuve = setInterval("$('.message_error').remove()", 7000);
}