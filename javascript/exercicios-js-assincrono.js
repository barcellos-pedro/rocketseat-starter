//Exercício 1
function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade > 18) {
            setTimeout(() => { resolve("Maior que 18"); }, 2000);
        } else {
            setTimeout(() => { reject("Menor que 18"); }, 2000);
        }
    });

}

checaIdade(20)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warn(error);
    });

//Exercício 2
let body = document.querySelector("body");

let inputElement = document.querySelector("input[name=user]");
let button = document.querySelector("button");
let userName = 'barcellos-pedro';

button.onclick = buscarRepositorios(userName);

function buscarRepositorios(user) {    
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((response) => {
            let repositorios = response.data;
            listaRepositorios(repositorios);
        })
        .catch((error) => {
            console.warn("Usuário não encontrado\n"+error);
        })
}

function listaRepositorios(data){
    let lista = document.createElement("ul");

    for(let repo of data){
        let repositorio = document.createElement("li");

        repositorio.textContent = repo.name;
        lista.appendChild(repositorio);
        body.appendChild(lista);
    }
}