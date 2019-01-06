$(document).ready(function () {
    var ckbox = $('#checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
           $("td").hide();
            $("#BS").show();
            $("#BP").show();
            $(".inputBS").show();
            $(".inputBP").show();
            $(".cb").show();
        } else {
            $("td").show();

        }
    });
});

$(document).ready(function() {
    $(".btnCalculate").click(function(){
        var sum=0;
        var a;

        for(var i =1 ;i<13;i++) {
            if($("#input"+i).val()=="")
            {
              $("#input"+i).val("0");
            }
            sum += parseInt($("#input"+i).val());
        }
        $("#inputBP").val(sum);

    });
});

