
//this function computes tax
function taxCalc(income,creditPoints){
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

    var point=2592;
    if(tax - point*creditPoints <=0){
        return 0;
    }

    return tax - point*creditPoints;

}

