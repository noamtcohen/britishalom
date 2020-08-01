$(function () {
    $("#title").load("fragments/title.html");
    $("#Donations").load("fragments/donations.html");

    $("#Donations").click(function (e) {
        e.stopPropagation();
    })
    $("body").click(function () {
        $("#Donations").hide();
    });
});