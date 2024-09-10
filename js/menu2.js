function toggleMenu(index) {
    var dropdown = document.getElementById('dropdown-' + index);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Close dropdowns when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.ellipsis')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
};