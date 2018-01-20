$(function() {
    $('.warning_message').hide();
});

var username_regex = new RegExp('^[a-z0-9_\-]{5,50}');
var password_regex = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])\\w{8,}$');
var name_regex = new RegExp('^[a-zA-Z ]*$');
var email_regex = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
var telephone_regex = new RegExp('\\d{3}-\\d{7,8}');

function test() {
    validate_telephone();
}

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
        $('#password_warning').text('The password shall contain at least eight characters long with uppercase, lowercase and numbers. ').show();
    }
    else if (pw !== retype_pw) {
        $('#password_warning').text('The retype password does not match with previous password value').show();
    }
    else if (bln_pw && pw === retype_pw){
        console.log('correct')
        $('#password_warning').hide();
    }
}


function validate_name() {
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var bln_fname = name_regex.test(fname);
    var bln_lname = name_regex.test(lname);

    if(!bln_fname){
        $('#name_warning').text('The first name should only have alphabets.').show();
    }
    else if (!bln_lname){
        $('#name_warning').text('The last name should only have alphabets.').show();
    }
    else if (bln_fname && bln_lname){
        console.log('correct');
        $('#name_warning').hide();
    }
}

function validate_email() {
    var email = document.getElementById('email').value;
    var bln_email = email_regex.test(email);

    if(!bln_email){
        $('#email_warning').text('The email should be correct format.').show();
    }
    else {
        $('#email_warning').hide();
    }
}

function validate_telephone() {
    var telephone = document.getElementById('telephone').value;
    var bln_telephone = telephone_regex.test(telephone);

    if(!bln_telephone){
        $('#telephone_warning').text('The telephone should be correct format.').show();
    }
    else {
        $('#telephone_warning').hide();
    }
}