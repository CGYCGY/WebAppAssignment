$(function () {

    //use .ajax send http request
    $.ajax({
        //get table array in json format
        url: '../../model/event/show_event.php',
        //can insert url arguments here to pass to show_event.php
        //example: "id=5%name=111"
        data: "",
        //data format get from show_event.php
        dataType: 'json',

        //if show_event.php success
        success: function(eventList)
        {
            var tempString = '';

            $.ajax({
                url: '../../model/ticket/view_ticket.php',
                data: "",
                dataType: 'json',
                success: function(ticketList) {
                    var ticNum = 0;

                    for(var n = 0; n < eventList.length; n++) {
                        for(var m = 0; m < ticketList.length; m++) {
                            // if(ticketList[m]['user_id'] === Cookies.get('user_id')) {
                            if(Number(ticketList[m]['event_id']) === eventList[n]['event_id']) {
                                ticNum++;
                            }
                        }

                        if(ticNum !== 0) {
                            tempString += '<div id="'+eventList[n]['event_id']+'" class="view_box">' +
                                '<div class="flex_1"><b>Event Name: </b><nav class="hide_extra_text">'+eventList[n]['event_name']+'</nav></div>' +
                                '<div class="flex_2"><b>Event Description: </b><nav class="hide_extra_text">'+eventList[n]['event_description']+'</nav></div>' +
                                '<div class="flex_1"><b>Date & Time Start: </b>'+eventList[n]['event_dt_start']+'</div>' +
                                '<div class="flex_1"><b>Date & Time End: </b>'+eventList[n]['event_dt_end']+'</div>';

                            tempString += '<div class="flex_1"><b>Ticket Owned: </b>'+ticNum+'</div>' +
                                '<form action="../event/view_event.html">' +
                                '<input class="tix_info" type="submit" value="View Event Details" onclick="saveID(this)">' +
                                '</form>' +
                                '</div>';
                        }
                        ticNum = 0;
                    }

                    if(tempString === '') {
                        tempString += '<p>\n' +
                            '<br><b>You didn\'t apply for ticket for any event yet.<br>\n' +
                            'Press home button to return to homepage.</b>\n' +
                            '</p>';
                    }

                    $('.view_container').html(
                        tempString
                    );
                }
            });
        }
    });
});