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
            //update html code

            for(var n = 0; n < eventList.length; n++) {
                if(eventList[n]['event_id'] === Number(sessionStorage.getItem("tempEID"))) {
                    tempString += '<!--<h3 class="descrp">DESCRIPTION</h3>-->\n' +
                        '\n' +
                        '\t\t\t<!--Right Side of div-->\n' +
                        '\t\t\t<div class="evt_box_right">\n' +
                        '\t\t\t<h3 class="arial">DATE AND TIME</h3>\n' +
                        '\t\t\t<p>Start:<br>'+eventList[n]['event_dt_start']+'<br>\n' +
                        '\t\t\t\tEnd:<br>'+eventList[n]['event_dt_end']+'<br>\n' +
                        '\t\t\t</p>\n' +
                        '\t\t\t<h3 class="arial">LOCATION</h3>\n' +
                        '\t\t\t<p>'+eventList[n]['event_location']+'<br>\n' +
                        '\t\t\t<a class="link" href="https://maps.google.com/?q='+eventList[n]['event_location']+'" target="_blank">View Map</a>\n' +
                        '\t\t\t</p>\n' +
                        '\t\t\t</div>\n';

                    tempString += '\t\t\t<!--Left Side of div-->\n' +
                        '\t\t\t<div class="evt_box_left">\n' +
                        '\t\t\t<br><div class="opacity"><img alt="Event Pic" src="https://vignette.wikia.nocookie.net/camphalfbloodroleplay/images/0/05/Doge.png"></div><br>\n' +
                        '\n' +
                        '\t\t\t<!--Event Description-->\n' +
                        '\t\t\t<h2 class="arial">EVENT DESCRIPTION</h2><br>\n' +
                        '\t\t\t<p class="margin"><strong> \t'+eventList[n]['event_name']+':</strong><br> '+eventList[n]['event_description']+'</p>\n' +
                        '\n' +
                        '\t\t\t<!--Schedule-->\n' +
                        '\t\t\t<h2 class="arial">CONTACT</h2><br>\n' +
                        '\t\t\t<p><strong>Contact Organizer: </strong>'+eventList[n]['event_org_name']+'\n' +
                        '\t\t\t<br>Contact Number : '+eventList[n]['event_contact']+'<br>\n' +
                        '\t\t\t</p>\n' +
                        '\n';

                    tempString += '\t\t\t<!--How to join-->\n' +
                        '\t\t\t<h2 class="arial">HOW TO JOIN</h2><br>\n' +
                        '\t\t\t<p>\n' +
                        '\t\t\t\tApply Ticket here: <a class="link_button" href="../../view/ticket/apply.html">Apply</a>\n' +
                        '\t\t\t</p>\n' +
                        '\t\t\t</div>';
                }
            }

            $('#page-wrap').html(
                tempString
            );
        }
    });
});