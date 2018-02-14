$(function() {
    $('.warning_message').hide();


    $('#register').click(function(){
        if(validation()) {
            validity = true;
            registration_choice();
        }
    });
});

var username_regex = new RegExp('^[a-z0-9_\-]{5,50}');
var password_regex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])\\w{8,}$');
var name_regex = new RegExp('^[a-zA-Z ]*$');
var email_regex = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
var telephone_regex = new RegExp('\\d{3}-\\d{7,8}');

var username;
var password;
var first_name;
var last_name;
var email_address;
var telephone;
var role;
var validity = false;

function validation() {
    var vld_user = validate_username();
    var vld_password = validate_password();
    var vld_name = validate_name();
    var vld_email = validate_email();
    var vld_telephone = validate_telephone();
    var list = [vld_user, vld_password, vld_name, vld_email, vld_telephone];

    console.log(validity.valueOf());

    for (i = 0; i < list.length; i++){
        if (!list[i]){
            return false;
        }
    }

    return true;
}

function validate_username() {
    username = document.getElementById('username').value;
    var checkname = true;

    $.ajax({
        url: '../../model/get_username_list.php',
        data: "",
        dataType: 'json',
        async: false,
        success: function(nameList) {
            // nameList[i]['username']
            for(var i = 0; i <nameList.length; i++) {
                if(nameList[i]['username'] === username) {
                    checkname = false;
                    break;
                }
            }
        }
    });

    console.log(checkname);

    if(!username_regex.test(username)){
        $('#register_warning').text('The username shall contain at least 5 characters long with lowercase letter and maximum 50 characters.').show();
        window.alert('The username shall contain at least 5 characters long with lowercase letter and maximum 50 characters.');
        return false;
    }
    else if(!checkname) {
        window.alert('The username already exist, please choose another username.');
        return false;
    }
    else {
        $('#register_warning').hide();
        return true;
    }
}

function validate_password() {
    password = document.getElementById('password').value;
    var retype_pw = document.getElementById('retypePassword').value;
    var bln_pw = password_regex.test(password);

    if(!bln_pw){
        window.alert('The password shall contain at least eight characters long with uppercase, lowercase and numbers. ');
        return false;
    }
    else if (password !== retype_pw) {
        window.alert('The retype password does not match with previous password value');
        return false;
    }
    else if (bln_pw && password === retype_pw){
        return true;
    }
}


function validate_name() {
    first_name = document.getElementById('firstname').value;
    last_name = document.getElementById('lastname').value;

    var bln_fname = name_regex.test(first_name);
    var bln_lname = name_regex.test(last_name);

    if(!bln_fname){
        window.alert('The first name should only have alphabets.');
        return false;
    }
    else if (!bln_lname){
        window.alert('The last name should only have alphabets.');
        return false;
    }
    else if (bln_fname && bln_lname){
        return true;
    }
}

function validate_email() {
    email_address = document.getElementById('email').value;
    var bln_email = email_regex.test(email_address);

    if(!bln_email){
        window.alert('The email should be correct format.');
        return false;
    }
    else {
        return true;
    }
}

function validate_telephone() {
    telephone = document.getElementById('telephone').value;
    var bln_telephone = telephone_regex.test(telephone);

    if(!bln_telephone){
        window.alert('The telephone should be correct format.');
        return false;
    }
    else {
        return true;
    }
}

function registration_choice() {
    role = document.getElementById('role').value;
    document.getElementById("registerForm").action = (role === 'organizer') ? "../../model/register/RegisterOrganizer.php" : "../../model/register/RegisterUser.php";
    document.getElementById("registerForm").submit();

}

