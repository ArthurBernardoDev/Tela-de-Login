document.getElementById("btn-submit").addEventListener("click", e => {
    
    console.log("o botao foi clicado")
} )

document.getElementById("form-login").addEventListener("mouseenter", e => {
    console.log("O mouse está sobre o formulário.")
})

document.querySelector("#form-login").addEventListener("mouseleave", e => {
    
    console.log("o mouse está fora do formulário")
})

document.querySelector("#form-login").addEventListener("submit", e => {

    e.preventDefault();
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    let json = {   
        email,
        password
    };
    
    if (!json.email)   {

        console.error("O Campo deve ser preenchido!")

    } else if(!json.password) {
        
        console.error("O campo password deve ser preenchido!")
    
    } else {
        console.info("dados validados com sucesso!")
    }
})
