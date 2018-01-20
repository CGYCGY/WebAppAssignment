$(function() {
    $('.warning_message').hide();
});

function test() {
    var username = document.getElementById('username').value;
    if(!validate_username(username)){
        $('.warning_message').show();
    }
    else {
        $('.warning_message').hide();

    }

}

/**
 * The username should only allow lower case with numbers and at least 5 characters, maximum 50 characters
 */
function validate_username (input_value) {
    var username_regex = new RegExp('^[a-z0-9_-]{5,50}');
    return username_regex.test(input_value);
}