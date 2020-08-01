$(function () {
    $("#title").load("fragments/title.html");
    $("#Donations").load("fragments/donations.html");

    $("body").click(function () {
        $("#Donations").hide();
    });
});