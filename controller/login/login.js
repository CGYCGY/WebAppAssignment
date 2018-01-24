$(function() {
    removeCookies();
    $('#login_warning').hide();

    $('#login').click(function(){
        if(validation()) {
            registration_choice();
        }
    });
});

var username_regex = new RegExp('^[a-z0-9_\-]{5,50}');
var password_regex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])\\w{8,}$');
var role;
var username;
var password;


function removeCookies() {
    Cookies.remove('name');
    Cookies.remove('password');
}

function validation() {
    var vld_user = validate_username();
    var vld_password = validate_password();

    var list = [vld_user, vld_password];

    for (i = 0; i < list.length; i++){
        if (!list[i]){
            return false;
        }
    }

    return true;
}

function validate_username() {
    username = document.getElementById('username').value;

    if(!username_regex.test(username)){
        $('#login_warning').text('Invalid username and password combination.').show();
        return false;
    }
    else {
        $('#login_warning').hide();
        return true;
    }
}

function validate_password() {
    password = document.getElementById('password').value;
    var bln_pw = password_regex.test(password);

    if(!bln_pw){
        $('#login_warning').text('Invalid username and password combination.').show();
        return false;
    }
    else {
        $('#login_warning').hide();
        return true;
    }
}

function registration_choice() {
    role = document.getElementById('role').value;
    document.getElementById("loginForm").action = (role === 'organizer') ? "../../model/login/LoginOrganizer.php" : "../../model/login/LoginUser.php";
    document.getElementById("loginForm").submit();

}

function setCookie() {
    if (validation()){
        Cookies.set('name', username);
        Cookies.set('password', password);
    }
    else {
        Cookies.remove('name');
        Cookies.remove('password');
    }
}