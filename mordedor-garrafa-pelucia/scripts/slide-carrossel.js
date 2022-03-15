var slideIndex = 1;


handleSlide(slideIndex,"slide001")
handleSlide(slideIndex,"slide002")



function pSlide(n,idSlide=""){
    handleSlide(
        slideIndex += n,
        idSlide
        );

}
function handleSlide(n,idSlide) {
    var i;
    console.log(
        document.getElementById(idSlide)
    )

    const slide = document.getElementById(idSlide);

    var slides = slide.getElementsByClassName("fade-anim");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}