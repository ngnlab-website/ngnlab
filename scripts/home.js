const readMoreBtn = document.querySelector(".read-more")
readMoreBtn.addEventListener("click", ()=> {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more &#8594;"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less &#8594;"; 
        moreText.style.display = "inline";
    }
})