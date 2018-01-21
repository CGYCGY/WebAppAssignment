$(function () {
    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: 'php/createEvent.php',
        //can insert url arguments here to pass to show_event.php
        //example: "id=5%name=111"
        data: "",
        //data format get from show_event.php
        dataType: 'json',

        //if show_event.php success
        success: function(eventList)
        {
            var tempString = 'Event '+eventList[eventList.length-1]['event_name']+' has been created!';

            $('#eventLog').html(
                tempString
            );
        }
    });
});

//NO USE DAO