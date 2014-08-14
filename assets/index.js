
// In case you are into jQuery.
(function ($) {
    "use strict";
    $(document).ready(function(){

        // Hide welcome text after some time.
        setTimeout(function(){
            $("#ghost").fadeOut();
        }, 5000);

    });
}(jQuery));
