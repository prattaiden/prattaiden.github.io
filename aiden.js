
document.addEventListener("DOMContentLoaded", function() {
    let myExtension = document.getElementById("myExtension");
    let myPort = document.getElementById("myPort");
    let myStrava = document.getElementById("myStrava");

    function newTab(event) {
        event.preventDefault();
        let url = this.getAttribute('href');
        window.open(url, '_blank');
    }

    myExtension.addEventListener("click", newTab);

    myPort.addEventListener("click", newTab);
    myStrava.addEventListener("click", newTab);

});
