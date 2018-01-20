$(function() {
    $('.warning_message').hide();
});

var username_regex = new RegExp('^[a-z0-9_\-]{5,50}');
var password_regex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])\\w{8,}$');



function test() {
    validate_password();
}

/**
 * The username should only allow lower case with numbers and at least 5 characters, maximum 50 characters
 */
function validate_username() {
    var username = document.getElementById('username').value;
    if(!username_regex.test(username)){
        $('#user_warning').show();
    }
    else {
        $('#user_warning').hide();

    }
}

function validate_password() {
    var pw = document.getElementById('password').value;
    var retype_pw = document.getElementById('retypePassword').value;
    var bln_pw = password_regex.test(pw);

    if(!bln_pw){
        $('#password_warning').text('The password shall contain at least eight characters long with uppercase, lowercase and numbers. ');
        $('#password_warning').show();
    }
    else if (pw !== retype_pw) {
        $('#password_warning').text('The retype password does not match with previous password value');
        $('#password_warning').show();
    }
    else if (bln_pw && pw === retype_pw){
        console.log('correct')
        $('#password_warning').hide();
    }
}