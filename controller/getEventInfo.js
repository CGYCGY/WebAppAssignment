$(function () {

    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: '../model/show_event.php',
        //can insert url arguments here to pass to show_event.php
        //example: "id=5%name=111"
        data: "",
        //data format get from show_event.php
        dataType: 'json',

        //if show_event.php success
        success: function(eventList)
        {
            var tempString = '';
            var tempC = 1;
            //update html code
            // $('#output').html("<b>name: </b>"+ename+"<b> desc: </b>"+edesc);

            for(var n = 0; n < eventList.length; n++) {
                if(tempC === 1) {
                    tempString += '<div id="'+eventList[n]['event_id']+'" class="browse_box">' +
                        '<div class="cover_p"><img src="../drawable/testpic1.jpg"/></div>';
                    tempC++;
                }
                else if(tempC === 2) {
                    tempString += '<div id="'+eventList[n]['event_id']+'" class="browse_box">' +
                        '<div class="cover_p"><img src="../drawable/testpic2.jpg"/></div>';
                    tempC++;
                }
                else if(tempC === 3) {
                    tempString += '<div id="'+eventList[n]['event_id']+'" class="browse_box">' +
                        '<div class="cover_p"><img src="../drawable/testpic3.jpg"/></div>';
                    tempC=1;
                }

                tempString += '<div class="flex_2"><b>Event Name: </b>'+eventList[n]['event_name']+'</div>' +
                    '<div class="flex_2"><b>Event Description: </b><nav class="block-with-text">'+eventList[n]['event_description']+'</nav></div>' +
                    '<div class="flex_1"><b>Date & Time Start: </b>'+eventList[n]['event_dt_start']+'</div>' +
                    '<div class="flex_1"><b>Date & Time End: </b>'+eventList[n]['event_dt_end']+'</div>' +
                    '<form action="view_event.html">' +
                    '<input class="apply_tix" type="submit" value="View Event Details" onclick="saveID(this)">' +
                    '</form>' +
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