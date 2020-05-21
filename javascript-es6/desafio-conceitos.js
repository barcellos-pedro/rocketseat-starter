/*

//Exercício 1
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        let propAdmin = (this.admin === true) ? true : false;
        return propAdmin;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const user1 = new Usuario("email@teste.com","senha123");
const adm1 = new Admin("email@teste.com","senha123");

//console.log(user1.isAdmin());
//console.log(adm1.isAdmin());

////////////////////////////////////////////////////////////////////////

//Exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Exercício 2.1
let idades = usuarios.map((users)=>{
    return users.idade;
});
//console.log(idades);

//Exercício 2.2
let rocketseatMaiorDeIdade = usuarios.filter((users)=>{
    return (users.empresa === 'Rocketseat' && users.idade >= 18);
});
//console.log(rocketseatMaiorDeIdade);

//Exercício 2.3
let trabalhaNaGoogle = usuarios.find((users)=>{
    return users.empresa === 'Google';
});
//console.log(trabalhaNaGoogle);

//Exercício 2.4
function dobraIdade(usuarios){
    usuarios.map(item => item.idade *= 2);
    return usuarios.filter(item => item.idade <= 50);
}
//console.log(dobraIdade(usuarios));

////////////////////////////////////////////////////////////////////////

//Exercício 3.1
const arr = [1, 2, 3, 4, 5];

arr.map((item) => {
    return item + 10;
});

//3.2
//Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => {
    return usuario.idade;
};

mostraIdade(usuario);

//3.3
//Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
    return { nome, idade }; // Com esse return {} retornamos um objeto com as propiedades nome e idade | Sem as {} retornaria somente as variáveis isoladas = Diego, 18
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => {
    return new Promise((resolve, reject) => {
        return resolve("Resolve");
    })
}

promise()
.then((response) => {
    //console.log(response);
})

////////////////////////////////////////////////////////////////////////

//Exercício 4
//Exercício 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

let { nome, endereco:{cidade, estado} } = empresa;

//console.log(nome);
//console.log(cidade);
//console.log(estado);

//Exercício 4.2
function mostraInfo({nome, idade}) { // Os parâmetros da função espera as propiedades de um objeto individualmente ao invés de passar o objeto completo para então acessar as propiedades.
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23,});

*/

////////////////////////////////////////////////////////////////////////

//Exercício 5
