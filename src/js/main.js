var arraySelect = document.getElementsByTagName('select');
var element = document.getElementById('updatePlaceHolder');

var CB = document.getElementsByClassName("CleanBox");
var SB = document.getElementsByClassName("SlimBox");
var BB = document.getElementsByClassName("BulkBox");
var GB = document.getElementsByClassName("GlutenBox");

var op1 = $("#op1");
var op2 = $("#op2");
var op3 = $("#op3");



function dropValue() {
    var style = this.id; // id of html tag select
    var value = this.value; //value of the dropdown

    if (value == 'france') {
        $("#updatePlaceholder").attr("placeholder", "votreadresseelectronique@mail.com");
        $("#subscribe").text("S'inscrire")
    } else {
        $("#updatePlaceholder").attr("placeholder", "yourmail@mail.com");
        $("#subscribe").text("subscribe");
    }
}

for (var i = 0; i < arraySelect.length; i++) {
    arraySelect[i].addEventListener('change', dropValue)
}

for (var i = 0; i < 2; i++) {
    CB[i].addEventListener('click', toggleDisplay);
    SB[i].addEventListener('click', toggleDisplay);
    BB[i].addEventListener('click', toggleDisplay);
    GB[i].addEventListener('click', toggleDisplay);
}



$("#glutenBox").hide();
$("#bulkBox").hide();
$("#slimBox").hide();
$(op1).attr("href", ".option1CB");
$(op2).attr("href", ".option2CB");
$(op3).attr("href", ".option3CB");

function toggleDisplay() {
    var toDisplayBox = this.className;
    console.log(this.className);
    if (toDisplayBox == "CleanBox") {
        $("#cleanBox").show();
        $("#glutenBox").hide();
        $("#bulkBox").hide();
        $("#slimBox").hide();
        $(op1).attr("href", ".option1CB");
        $(op2).attr("href", ".option2CB");
        $(op3).attr("href", ".option3CB");

    } else if (toDisplayBox == "SlimBox") {
        $("#slimBox").show();
        $("#glutenBox").hide();
        $("#bulkBox").hide();
        $("#cleanBox").hide();
        $(op1).attr("href", ".option1SB");
        $(op2).attr("href", ".option2SB");
        $(op3).attr("href", ".option3SB");

    } else if (toDisplayBox == "BulkBox") {
        $("#bulkBox").show();
        $("#glutenBox").hide();
        $("#cleanBox").hide();
        $("#slimBox").hide();
        $(op1).attr("href", ".option1BB");
        $(op2).attr("href", ".option2BB");
        $(op3).attr("href", ".option3BB");

    } else if (toDisplayBox == "GlutenBox") {
        $("#glutenBox").show();
        $("#cleanBox").hide();
        $("#bulkBox").hide();
        $("#slimBox").hide();
        $(op1).attr("href", ".option1GB");
        $(op2).attr("href", ".option2GB");
        $(op3).attr("href", ".option3GB");

    }
    // console.log(toDisplayBox);
}