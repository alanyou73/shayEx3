var clickListener = function() {
    var txtAge = document.getElementById("txtAge");
    if(txtAge.value == "")
        alert("Enter your age");
    else {
        var age = parseInt(txtAge.value);
        if(age <= 18)
            alert("Young");
        else if(age > 18 && age <= 64)
            alert("Adult");
        else
            alert("Old");
    }
};

var mouseListener = function(e) {
    var div1 = document.getElementById("div1");

    if(e.type == "mouseenter")
        div1.setAttribute("class", "withMouse");
    else if(e.type == "mouseleave")
        div1.setAttribute("class", "noMouse");
}

var oneTwoListener = function(e) {
    var div = document.getElementsByClassName("content");

    if(e.target.id == "cmdOne")
        div[0].innerHTML = "1";
    else if(e.target.id == "cmdTwo")
        div[0].innerHTML = "2";
}

var focusListener = function(e) {
    var div = document.getElementById("status");
    if(e.type == "focusin")
        div.setAttribute("class", "statusVisible");
    else if(e.type == "focusout")
        div.setAttribute("class", "statusInvisible");
}

function addList(elements) {
    var ul = document.createElement("ul");
    elements.forEach(function(e) {
        var li = document.createElement("li");
        li.innerHTML = e;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);

}

var loadPage = function() {
    document.getElementById("cmdOK").addEventListener("click", clickListener, false);

    var div1 = document.getElementById("div1");
    div1.addEventListener("mouseenter", mouseListener, false);
    div1.addEventListener("mouseleave", mouseListener, false);

    document.getElementById("cmdOne").addEventListener("click", oneTwoListener, false);
    document.getElementById("cmdTwo").addEventListener("click", oneTwoListener, false);

    var txt = document.getElementById("txtAge");
    txt.addEventListener("focusin", focusListener, false);
    txt.addEventListener("focusout", focusListener, false);
};

