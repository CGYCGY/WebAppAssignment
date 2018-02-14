$(function () {
    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: '../../model/event/event_list_admin.php',
        //can insert url arguments here to pass to show_event.php
        //example: "id=5%name=111"
        data: "",
        //data format get from show_event.php
        dataType: 'json',

        //if show_event.php success
        success: function(eventList)
        {
            var tempString = '';
            //update html code

            for(var n = 0; n < eventList.length; n++) {
                tempString += '<option value="'+eventList[n]['event_id']+'">'+
                    eventList[n]['event_id']+'. '+eventList[n]['event_name']+'</option>';
            }
            console.log(tempString);
            $('.eNameList').html(
                tempString
            );

        }
    });
});