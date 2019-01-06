$(document).ready(function () {
    var ckbox = $('#checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
           $("td").hide();
            $("#BS").show();
            $("#BP").show();
            $("#inputBS").show();
            $("#inputBP").show();
            $(".cb").show();
        } else {
            $("td").show();

        }
    });
});

$(document).ready(function() {
    $(".btnCalculate").click(function(){
        alert("button");
    });
});

