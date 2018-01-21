$(function(){
    // handle registration
    $('form').submit(function(event){
        event.preventDefault();
        // gather the form data
        var formName = $(this).attr('name');
        var formData = $(this).serialize();
        var formMethod = $(this).attr('method');
        var processingScript = $(this).attr('action');

        // perform the AJAX request
        var request = $.ajax({
            url: processingScript,
            method: formMethod,
            data: formData,
            dataType: "html"
        });

        // handle the responses
        request.done(function(data) {
            // update the user
            $('#response').html('Event has been created!');
        });
        request.fail(function(jqXHR, textStatus) {
            console.log(textStatus);
        });
        request.always(function(data) {
            // clear the form
            $('form[name="' + formName + '"]').trigger('reset');
        });
    });
});