function menu_expander(x) {
    x.classList.toggle("trans");
}

jQuery(document).ready(function() {
    jQuery(".nav_menu").click(function() {
        jQuery(".link").slideToggle(400, function() {
            jQuery(this).toggleClass("link_show").css('display', '');
        });
    });
});