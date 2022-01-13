$(document).ready(function() {

    setTimeout(function() {
        $('.loader-wrapper').addClass('hidden');
    }, 3000);
    var selector = 0;
    $('.forAll').click(function() {
        selector = 0;
        $(".forSelected").css({ "color": "unset", "background": "unset" });
        $(".forAll").css({ "color": "#fff", "background": "#7CD1B8" });
        $(".forSingle").css({ "color": "unset", "background": "unset" });
        $(".title3").addClass('d-none')
        $(".title2").addClass('d-none')
        $(".title1").removeClass('d-none')
        console.log(selector);
    });
    $('.forSelected').click(function() {
        selector = 1;
        $(".forSelected").css({ "color": "#fff", "background": "#7CD1B8" });
        $(".forAll").css({ "color": "unset", "background": "unset" });
        $(".forSingle").css({ "color": "unset", "background": "unset" });
        $(".title1").addClass('d-none')
        $(".title3").addClass('d-none')
        $(".title2").removeClass('d-none')
        console.log(selector);
    });
    $('.forSingle').click(function() {
        selector = 2;
        $(".forSelected").css({ "color": "unset", "background": "unset" });
        $(".forAll").css({ "color": "unset", "background": "unset" });
        $(".forSingle").css({ "color": "#fff", "background": "#7CD1B8" });
        $(".title1").addClass('d-none')
        $(".title2").addClass('d-none')
        $(".title3").removeClass('d-none')
        $(".macAdd").removeClass('d-none')
        console.log(selector);
    });
    console.log(selector)
});