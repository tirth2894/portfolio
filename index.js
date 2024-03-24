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
        let elemBottom = rect.bottom-50;

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


let theme = document.getElementById("theme");
let theamtemp = true;
let menuItemid = document.getElementById("menu");
theme.onclick = function(){
    const root = document.documentElement;
    if(theamtemp)
    {
        root.style.setProperty('--tcolor', 'white');
        root.style.setProperty('--bcolor', 'rgb(214, 214, 214)');
        theme.style.backgroundColor = "var(--tcolor)";
        menuItemid.style.backgroundColor = "var(--color)";
        theamtemp = false;
    }
    else{
        root.style.setProperty('--tcolor', 'black');
        root.style.setProperty('--bcolor', 'rgb(22, 22, 22)');
        theme.style.backgroundColor = "rgb(184, 42, 97)";
        menuItemid.style.backgroundColor = "var(--tcolor)";
        theamtemp = true;
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
