document.getElementById("show-pass").addEventListener("click", function(){
    var senhaInput = document.getElementById("senha");
    if (senhaInput.type == "password"){
        senhaInput.type = "text";
        this.setAttribute("aria-label", "Ocultar senha")
        this.querySelector("img").setAttribute("src", "../components/images/olho.png")
        this.querySelector("img").setAttribute("alt", "Ocultar senha");
    }else{
        senhaInput.type = "password";
        this.setAttribute("aria-label", "Mostrar senha")
        this.querySelector("img").setAttribute("src", "../components/images/olhosfechados.png")
        this.querySelector("img").setAttribute("alt", "Mostrar senha");
    }
});

document.getElementById("senha").addEventListener("input", validarSenha);
    function validarSenha() {
        var senha = document.getElementById("senha").value;
        var senhaErro = document.getElementById("senhaErro");
        var login = document.getElementById("login");

        var regex = /^(?=.*\d.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>?.,\\|]).{8,}$/;

        if (regex.test(senha)) {
            senhaErro.style.display = "none";
            login.disabled = false;
        } else {
            senhaErro.style.display = "block";
            login.disabled = true;
        }
    }