var tempString = 'Are you sure you want to apply ticket for this event?\n' +
    '<form id = "applyYN" action="../model/create_ticket.php?event_id='+Number(sessionStorage.getItem("tempEID"))+'" method="post">\n' +
    '<input type="submit" name = "backHome" value="no">\n' +
    '<input type="submit" name = "createTic" value="yes">\n' +
    '</form>';

//update html code
$('.applyForm').html(
    tempString
);
