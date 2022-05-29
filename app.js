const fname     = document.getElementById("fname");
const lname     = document.getElementById("lname");
const Mail      = document.getElementById("Mail");
const lkedin    = document.getElementById("lkedin");

const form    = document.getElementById("form");
const parrafo    = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(fname.value.length < 5){
        warnings += `El Nombre no es valido <br>`
        entrar = true
    }
    
    if(lname.value.length < 5){
        warnings += `El Apellido no es valido <br>`
        entrar = true
    }

    if(lkedin.value.length < 5){
        warnings += `El Linkedin no es valido <br>`
        entrar = true
    }

    if(!regexMail.test(Mail.value)){
        warnings += `El Mail no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})
