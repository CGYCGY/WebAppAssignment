function saveID(elt) {
    // Traverse up until root hit or DIV with ID found
    while (elt && (elt.tagName !== "DIV" || !elt.id))
        elt = elt.parentNode;
    // Check we found a DIV with an ID
    if (elt) {
        sessionStorage.setItem("tempEID", elt.id);
        // alert(elt.id);
    }
}