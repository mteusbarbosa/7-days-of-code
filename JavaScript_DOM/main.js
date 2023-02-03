const nome = document.querySelector("#nome")
const dataNascimento = document.querySelector("#dataNascimento")
const submit = document.querySelector("#submit")


console.log(nome)
console.log(dataNascimento)
console.log(submit)

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(`
        Olá ${nome.value}, é um prazer te conhecer!
        Vejo que você nasceu em ${dataNascimento.value}. Já estou pensando na sua festa!!
    `)
})
