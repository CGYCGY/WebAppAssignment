$(function () {
    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: 'php/show_event_mysqli.php',
        //can insert url arguments here to pass to show_event_mysqli.php
        //example: "id=5%name=111"
        data: "",
        //data format get from show_event_mysqli.php
        dataType: 'json',

        //if show_event_mysqli.php success
        success: function(data)
        {
            var ename = data[1];              //get id
            var edesc = data[2];           //get name
            //--------------------------------------------------------------------
            // 3) Update html content
            //--------------------------------------------------------------------
            $('#output').html("<b>name: </b>"+ename+"<b> desc: </b>"+edesc); //Set output element html
            //recommend reading up on jquery selectors they are awesome
            // http://api.jquery.com/category/selectors/
        }
    });
});