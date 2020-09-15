// $('.message').hide();
function start_form(form) {
    var name = form.name.value;
    var password = form.password.value;
    var gender = form.gender.value;

        if (name == "" || name == " " || name == "  ") {
            // alert("name is not available");
            $('.message').show().attr('class', "message_error").html('Error: name is not available');
        }
        else if (password == "" || password == " " || password == "  ") {
            // alert("you mast write password");
            $('.message').show().attr('class', "message_ettention").html('Error: you mast write password');
        }
        else if (!gender) {
            // alert("you mast choise gender");
            $('.message').show().attr('class', "message_ettention").html('Error: you mast choise gender');
        }
        else
            window.location.replace("http://www.google.com");
    
}