$(document).ready(function () {
    $("#buttonContactUs").click(function () {
        let name = $("#exampleInputName1").val();
        $("#modalBody").text("Thanks for contacting us, " + name + "!");
    });
});