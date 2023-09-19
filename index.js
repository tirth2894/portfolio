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