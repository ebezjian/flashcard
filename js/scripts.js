$(document).ready(function() {
    $(".click-java").click(function() {
		$("#javascript-showing") .fadeToggle();
    });
    
    $(".click-operators").click(function() {
        $("#operators-showing") .slideToggle();
    });

    $(".click-variables").click(function() {
        $("#variables-showing") .fadeToggle();
    });
});
