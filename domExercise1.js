function main() {
    const grow = document.getElementById("grow-me");
        grow.classList.add("big");
    const shrink = document.getElementById("shrink-me");
        shrink.classList.remove("big");
    const list = document.querySelectorAll("li");
        for (let item of list) {
            console.log(item);
        }
    var a = document.querySelector('a[href="broken-link"]');
    if (a) {
        a.setAttribute('href', "https://www.example.com");
    }
        a.innerText = "somewhere";
    const hide = document.getElementById("hide-me");
        hide.style.display = "none";
    const show = document.getElementById("show-me");
        show.style.display = "block";
    var input = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = ("Welcome " + input);
}