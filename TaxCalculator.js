

$(document).ready(function () {

    var ckbox = $('#checkbox');
    var sumOfIncome=0;
    /* user checked checkbox before pressing the button */
    $('#checkbox').on('click',function () {
        //$("#result").hide();
        if (ckbox.is(':checked')) {//hide the months boxes
            $("#result").hide();
            $("td").hide();
            $("#BS").show();
            $("#BP").show();
            $(".inputBS").show();
            $(".inputBP").show();
            $(".cb").show();
            $("#inputBS").val("");
            $("#inputBP").val("");
            $("#result").text("");
            $("#result").show();
            clearTextBoxes();
            $(".btnCalculate").click(function(){//calculate tax
                if($("#inputBS").val()=="" )
                {
                    $("#inputBS").val("0");
                }
                else if( $.isNumeric( $("#inputBS").val() )==false|| parseFloat($("#inputBS").val()) < 0)
                {
                    $("#result").text("Please enter a positive number");
                    $("#result").show();
                    return;
                }
                sumOfIncome= ifChecked();
                taxCalc(sumOfIncome);
            });
        }else {//show the months boxes
            $("#result").hide();
            $("td").show();
            $("#inputBS").val("");
            $("#inputBP").val("");
            $("#result").text("");
            $("#result").show();

            $(".btnCalculate").click(function(){//calculate tax
                for(var i =1 ;i<13;i++) {
                    if( $("#input" + i).val()=="" )
                    {
                        $("#input"+i).val("0");
                    }
                    else if($.isNumeric( $("#input" + i).val() )==false|| parseFloat($("#input" + i).val()) < 0)
                    {
                        $("#result").text("Please enter a positive number");
                        $("#result").show();
                        return;
                    }
                }
                sumOfIncome=ifUnchecked();
                taxCalc(sumOfIncome);
            });

        }

    });

    /* user press on button before checking checkbox */
    $(".btnCalculate").click(function(){

        $("#result").text("");
        if (ckbox.is(':checked')) {
            clearTextBoxes();
            if( $("#inputBS").val()=="" )
            {
                $("#inputBS").val("0");
            }
            else if( $.isNumeric( $("#inputBS").val() )==false|| parseFloat($("#inputBS").val()) < 0)
            {
                $("#result").text("Please enter a positive number");
                $("#result").show();
                return;
            }
            sumOfIncome=ifChecked();
            taxCalc(sumOfIncome);

        }else{
            $("#result").hide();
            $("td").show();
            $("#inputBS").val("");

            $("#result").text("");

            for(var i =1 ;i<13;i++) {
                if( $("#input" + i).val()=="" )
                {
                    $("#input" + i).val("0") ;
                }
                else if( $.isNumeric( $("#input"+i).val())==false || parseFloat($("#input" + i).val()) < 0)
                {
                    $("#result").text("Please enter a positive number");
                    $("#result").show();
                    return;
                }
            }
            sumOfIncome=ifUnchecked();
            taxCalc(sumOfIncome);
        }
    });
});


//this function sums up the contents of all the months text boxes
function ifUnchecked() {
    var sum=0;
    for(var i =1 ;i<13;i++) {

        if($("#input"+i).val()=="")
        {
            sum+=0;
           // $("#input"+i).val("0");
        }else{
            sum += parseFloat($("#input"+i).val());
        }

    }
    return sum;
    // $("#result").text("Tax Income : "+sum);
    // $("#result").show();
}
//this function multiplies by 12 the content of the base salary text box
function ifChecked() {
    var sum=0;
    if($("#inputBS").val()=="")
    {
        return 0;
       // $("#result").text("Tax Income : "+sum);
       // $("#inputBS").val("0");
    }
    else {
        sum += parseFloat($("#inputBS").val())*12;
        return sum;
       // $("#result").text("Tax Income : "+sum);
    }

}
//this function clears up the months text boxes
function clearTextBoxes() {
    for(var y=1;y<13;y++)
    {
        $("#input"+y).val("");
    }
}
//this function computes tax
function taxCalc(income){

    var creditPoints=0;
    if($("#inputBP").val()!="")
    {
        creditPoints = parseFloat($("#inputBP").val());
    }
    if($("#inputBP").val()=="" ){
        parseFloat($("#inputBP").val("0"));
    }
    else if ( $.isNumeric( $("#inputBP").val() )==false|| parseFloat($("#inputBP").val()) < 0)
    {
        $("#result").text("Please enter a positive number");
        $("#result").show();
        return;
    }


    if(income<0){
        //some kind of error
    }
    var tax = 0;
    var tempIncome=income;

    if(income <=74880){
        tax= income*(0.1);
    }
    else if(income <=107400){
        tempIncome=income-74880;
        tax+= tempIncome*(0.14);
        tempIncome=74880;
        tax+= tempIncome*(0.1);
    }
    else if(income <=172320){
        tempIncome=income-107400;
        tax+= tempIncome*(0.20);
        tempIncome=107400-74880;
        tax+= tempIncome*(0.14);
        tempIncome=74880;
        tax+= tempIncome*(0.1);
    }
    else if(income <=239520){
        tempIncome=income-172320;
        tax+= tempIncome*(0.31);
        tempIncome=172320-107400;
        tax+= tempIncome*(0.20);
        tempIncome=107400-74880;
        tax+= tempIncome*(0.14);
        tempIncome=74880;
        tax+= tempIncome*(0.1);
    }
    else if(income <=498360){
        tempIncome=income-239520;
        tax+= tempIncome*(0.35);
        tempIncome=239520-172320;
        tax+= tempIncome*(0.31);
        tempIncome=172320-107400;
        tax+= tempIncome*(0.20);
        tempIncome=107400-74880;
        tax+= tempIncome*(0.14);
        tempIncome=74880;
        tax+= tempIncome*(0.1);
    }
    else if(income <=641880){
        tempIncome=income-498360;
        tax+= tempIncome*(0.47);
        tempIncome=498360-239520;
        tax+= tempIncome*(0.35);
        tempIncome=239520-172320;
        tax+= tempIncome*(0.31);
        tempIncome=172320-107400;
        tax+= tempIncome*(0.20);
        tempIncome=107400-74880;
        tax+= tempIncome*(0.14);
        tempIncome=74880;
        tax+= tempIncome*(0.1);
    }
    else {// income is greater then 641880
        tempIncome = income - 641880;
        tax += tempIncome * (0.5);
        tempIncome = 641880 - 498360;
        tax += tempIncome * (0.47);
        tempIncome = 498360 - 239520;
        tax += tempIncome * (0.35);
        tempIncome = 239520 - 172320;
        tax += tempIncome * (0.31);
        tempIncome = 172320 - 107400;
        tax += tempIncome * (0.20);
        tempIncome = 107400 - 74880;
        tax += tempIncome * (0.14);
        tempIncome = 74880;
        tax += tempIncome * (0.1);
    }

    var point=2592;//one credit point , as showed in the ex instructions
    if(tax - point*creditPoints > 0){
        $("#result").show();
        $("#result").text("Tax Income : "+(tax - (point*creditPoints) ));
    }
    else{

        $("#result").show();
        $("#result").text("Tax Income : 0" );
    }


}
