function hamburger() {
    var x = document.getElementById("bar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
