var nav_c = '<!--navigation bar-->\n' +
    '        <div class="nav_bar clear_fix">\n' +
    '            <!--main page link-->\n' +
    '            <a href="../event/event_list.html" class="stick_left"><img src="../../drawable/Home_Page.png" alt="Home Page" /></a>\n' +
    '            <!--navigation bar for menu-->\n' +
    '            <div class="nav_box">\n' +
    '            <div><div class="nav_menu" onclick="menu_expander(this)">\n' +
    '                <div class="m1"></div>\n' +
    '                <div class="m2"></div>\n' +
    '                <div class="m3"></div>\n' +
    '            </div></div>\n' +
    '            <ul class="link">\n' +
    '                <li><a href="../event/create_event.html">Create Event</a></li>\n' +
    '                <li><a href="../event/update_event.html">Update Event</a></li>\n' +
    '                <li><a href="../about/about_.html">About</a></li>\n' +
    '                <li><a onclick="removeCookies()">Log Out</a></li>\n' +
    '                <!--<li><a href="#">dddddd</a></li>-->\n' +
    '                <!--<li><a href="#">eeeeee</a></li>-->\n' +
    '            </ul>\n' +
    '            </div>\n' +
    '        </div>';

nav_c += '<div class="footer">\n' +
    'Admin:\n' + Cookies.get("name") +
    '</div>';

$('.nav_container').html(
    nav_c
);

function removeCookies() {
    Cookies.remove('name');
    Cookies.remove('password');
    window.location.replace("../../view/login/login.html")
}