﻿// Verification when attempting to close a webpage
function leavepage() {
    return "Are you sure you want to leave this page?"
}

//navbar Clothing/Accessories dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clothingOptions() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Let's Shop Btn on navbar
function overBtn(x) {
    x.style.backgroundColor = "white";
    x.style.color = "#00ccff";
}

function outBtn(x) {
    x.style.backgroundColor = "#474e5d";
    x.style.color = "white";
}

function letsShop(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        var win = window.open("https://www.hilohattie.com/", '_blank');
        win.focus();
    }
}

// footer
function mOver(y) {
    y.innerHTML = "created by Nicole M Torres"
    y.style.color = "#ff9900";
    y.style.fontSize = "150%";
}

function mOut(y) {
    y.innerHTML = "&copy; 2018 - Dress Hawai`i"
    y.style.color = "#00ccff";
    y.style.fontSize = "100%";
}

//Allows user to dynamically add content
function dressOver(t) {
    var userName = prompt('Welcome to Getting Dressed Hawaiian Style. May I please have your name?');
    t.innerHTML = userName + ' Getting Dressed';
}

function dressOut(t) {
    t.innerHTML = userName + ' Getting Dressed';
    t.style.color = "#ffffff";
    t.style.fontSize = "100%";
}


// Allows user to dynamically remove content with a "swap"
function overCreateOutfit(s) {
    s.style.backgroundColor = "#9933ff";
    s.style.color = "#ffffff";
    s.style.fontSize = "100%";
}

function outCreateOutfit(s) {
    s.style.backgroundColor = "#ffffff";
    s.style.color = "#000000";
    s.style.fontSize = "100%";
}

function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex"
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}


// Array/filter
function GetTopsFilter {
    var topsFilterArray = new Array(0);
    var userResponse = confirm('Would you like to view items by season?');
    while (userResponse) {
        var villa = prompt('Please select name of season');
        villaArray.push(tops);
    }

    var x = document.getElementById("SeasonID");
    if (m === Fall) {
        x.getElementsByTagName('p')[1].innerText = topsFilterArray[0];
    } else if (m === Summer) {
        x.getElementsByTagName('p')[1].innerText = topsFilterArray[1];
    } else if (m === Spring) {
        x.getElementsByTagName('p')[1].innerText = topsFilterArray[2];
    } else if (m === Winter) {
        x.getElementsByTagName('p')[1].innerText = topsFilterArray[3];
    } else {
        x.getElementsByTagName('p')[1].innerText = 'Item may be worn during all seasons.';
    }
}

function SortTops() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}