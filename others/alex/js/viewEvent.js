$(function () {
    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: 'php/show_event.php',
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
                if(eventList[n]['event_name'] === 'ppp') {

                }
                if(tempC === 1) {
                    tempString += '<div class="browse_box">' +
                        '<div class="cover_p"><img src="resource/testpic1.jpg"/></div>';
                    tempC++;
                }
                else if(tempC === 2) {
                    tempString += '<div class="browse_box">' +
                        '<div class="cover_p"><img src="resource/testpic2.jpg"/></div>';
                    tempC++;
                }
                else if(tempC === 3) {
                    tempString += '<div class="browse_box">' +
                        '<div class="cover_p"><img src="resource/testpic3.jpg"/></div>';
                    tempC=1;
                }

                tempString += '<div class="flex_2"><b>Event Name: </b>'+eventList[n]['event_name']+'</div>' +
                    '<div class="flex_2"><b>Event Description: </b>'+eventList[n]['event_description']+'</div>' +
                    '<div class="flex_2"><b>Date & Time: </b>'+eventList[n]['event_datetime']+'</div>' +
                    '<form action="apply.html">' +
                    '<input class="apply_tix" type="submit" value="Apply Ticket">' +
                    '</form>' +
                    '</div>';
            }

            $('.browse_container').html(
                tempString
            );
        }
    });
});