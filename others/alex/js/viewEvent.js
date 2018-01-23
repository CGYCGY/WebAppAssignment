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
                if(eventList[n]['event_name'] === 'New Age Flow') {
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
                        '\t\t\t\t<button class="link">View Map</button>\n' +
                        '\t\t\t</p>\n' +
                        '\t\t\t<button id="dlt" class="link"> DELETE</button>\n' +
                        '\t\t\t</div>\n' +
                        '\n' +
                        '\t\t\t<div id="myModal" class="modal">\n' +
                        '\n' +
                        '\t\t\t  <!-- Modal content -->\n' +
                        '\t\t\t  <div class="modal-content">\n' +
                        '\t\t\t\t<span class="close">&times;</span>\n' +
                        '\t\t\t\t<p>Are you sure you wan to delete this event?</p>\n' +
                        '\t\t\t\t<button>Yes</button>\n' +
                        '\t\t\t\t<button>No</button>\n' +
                        '\t\t\t  </div>\n' +
                        '\n' +
                        '\t\t\t</div>\n' +
                        '\n' +
                        '\t\t\t<script language="javascript" type="text/javascript" src="js/modalBox.js"></script>\n' +
                        '\n' +
                        '\t\t\t<!--Left Side of div-->\n' +
                        '\t\t\t<div class="evt_box_left">\n' +
                        '\t\t\t<br><div class="opacity"><img alt="Event Pic" src="https://vignette.wikia.nocookie.net/camphalfbloodroleplay/images/0/05/Doge.png"></div><br>\n' +
                        '\n' +
                        '\t\t\t<!--Event Description-->\n' +
                        '\t\t\t<h2 class="arial">EVENT DESCRIPTION</h2><br>\n' +
                        '\t\t\t<p class="margin"><strong> \t'+eventList[n]['event_name']+':</strong><br> '+eventList[n]['event_description']+'</p>\n' +
                        '\n' +
                        '\t\t\t<!--Schedule-->\n' +
                        '\t\t\t<h2 class="arial">CONTACT</h2><br>\n' +
                        '\t\t\t<p><strong>Contact Organizer: '+eventList[n]['event_org_name']+':</strong>\n' +
                        '\t\t\t<br>Contact Number : '+eventList[n]['event_cont_num']+'<br>\n' +
                        '\t\t\t</p>\n' +
                        '\n' +
                        '\t\t\t<!--How to join-->\n' +
                        '\t\t\t<h2 class="arial">HOW TO JOIN</h2><br>\n' +
                        '\t\t\t<p>\n' +
                        '\t\t\t\tApply Ticket here: <button> Apply </button>\n' +
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