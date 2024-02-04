document.addEventListener("DOMContentLoaded", function() {
    let content = document.getElementsByClassName('content');
    let isVisible = [];

    for (let i = 0; i < content.length; i++) {
        isVisible[i] = false;        
        
    }


    window.addEventListener('scroll', function() {
        for(let i = 0; i < content.length; i++) {
            
            if (!isVisible[i] && isScrolledIntoView(content[i])) {
                content[i].style.opacity = 1;
                content[i].style.transform = "translateY(0px)";
                isVisible[i] = true;
            } else if (isVisible[i] && !isScrolledIntoView(content[i])) {
                content[i].style.opacity = 0;
                content[i].style.transform = "translateY(50px)";
                isVisible[i] = false;
            }
            
        }

    });

    function isScrolledIntoView(element) {
        let rect = element.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom - 250;

        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
});





let menu = document.getElementById("menu");
let temp = true;

window.onload = function(){
    let loader = document.getElementById("loader");
    let page = document.getElementById("page");
    loader.style.display = "none";
    page.style.display = "block";
    console.log("sdf");
}

menu.onclick = function () {
    let menuItem = document.getElementById("menuItem");

    if (temp) {
        menuItem.style.display = "flex";
        temp = false;
    }
    else {
        menuItem.style.display = "none";
        temp = true;
    }

}

const scriptURL = "https://script.google.com/macros/s/AKfycbwzh_c5CW6TFVzaYlKKGyeAmNjPtoMTfiaHnpNcs3R-KY5lCxzNtyCP2esbwJ6XoPAEKw/exec"
const form = document.forms['contact-form']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {

    let msg = document.getElementById("msg");

    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {

            msg.classList.remove("error");
            msg.classList.add("success");
            msg.innerHTML = "Data send Successfully..";
            form.reset();

            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);

        })

        .catch(error => console.log('Success!', response))

})
