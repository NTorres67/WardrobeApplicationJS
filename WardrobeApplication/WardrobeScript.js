// Verification when attempting to close a webpage
function function2() {
    return "Are you sure you want to leave this page?"
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
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


function overBtn(x) {
    x.style.backgroundColor = "white";
    x.style.color = "00ccff";
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