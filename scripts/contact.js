// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var submit =document.getElementById("submit-button")
var main =document.getElementById("contact-page")
function display(){
    if(submit.classList.contains("submit")){
        main.classList.add('nodisplay');
        main.innerHTML ="Thank you for your Message!"
    }
}
submit.addEventListener("click",display)