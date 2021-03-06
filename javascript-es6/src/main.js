//ES6+ | Conceitos
//Classes

/*

class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{ // extends herda uma classe
    constructor(){
        super(); // Herdar classe pai

        this.usuario = 'Diego';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.querySelector("button#novotodo").onclick = function(){
    MinhaLista.add("Novo todo");
}

MinhaLista.mostraUsuario();

*/

//Método estático
//Método estático não depende de nenhum outra informação da Classe, e não enxerga o restante da classe
//Com métodos estáticos não é necessário instanciar um novo objeto com a Classe Matematica -variavel = new Matematica(), linha 41- para utilizar seus métodos
//Métodos estáticos geralmente não possuem constructor e são bons para utilizar para retornar dados com suas funções
/*

class Matematica{
    static soma(a,b){
        return a+b;
    }
}
console.log(Matematica.soma(1,2)); //Podemos chamá-la direto

*/

//Const & Let e variável de escopo(let)
//Constantes não podem sem mudadas. Somente mutadas.
//Mutação é quando se trabalha como mesmo formato do objeto, porém, nós alteramos os valor dentro do objeto ou vetor;

/*

function teste(x){
    let y = 2;
    if(x>5){
        // Aqui poderiamos alterar a variavel y dentro deste escopo ou o escopo anterior, fora do IF mas dentro da função
        console.log(x,y);
    }
}

teste(10);
console.log(y); // y não irá aparecer aqui por ser uma variavel de escopo, seu escopo é dentro da função teste

*/

//Operações em vetores

/*

const arr = [1,3,4,5,8,9];

//Map
//serve para percorrer o vetor e retornar algo de dentro ou uma nova informação
//o map tbm recebe um função dentro dele
const newArr = arr.map(function(item,index){ // item recebe cada item do vetor | Map tbm pode receber o index, que é a posição do item no vetor
    return item * 2;
})
console.log(newArr);

//Reduce 
//consome todo o vetor e transforma em uma única informação ou variável
const sum = arr.reduce(function(total,next){ // total recebe o resultado total a cada iteração, e o next recebe o próximo item do array
    return total+next; // retornará a soma total de todos o números
})
console.log(sum);

//Filter
//precisa retornar True ou False para realizar o filtro desejado
const filter = arr.filter(function(item){ // Este novo array receberá cada item para filtrar
    return item % 2 === 0; // E iremos filtrar retorando somente os divisíveis por 2, o restante será descartado
})
console.log(filter);

//Find
//é utilizado para verificar se existe uma informação dentro do array
//assim como o filter, é necessário retornar True ou False
const find = arr.find(function(item){
    return item === 4; // irá retornar 4, caso não encontre irá retorna undefined
});
console.log(find);

*/

//Arrow functions

/*

const arr = [1,3,4,5,6];

const newArr3 = arr.map((item)=>{
    return item*2;
})

//Quando a função recebe apenas 1 parâmetro, podemos remover os ()
const newArr2 = arr.map(item=>{
    return item*2;
});

//Se a função for retornar somente um linha simples, podemos reduzir a verbosidade dessa forma.
const newArr = arr.map(item => item*2);
console.log(newArr);

const teste4 = ()=>{
    return "Hello teste 4";
}
const teste3 = () => [1,2,3];
const teste2 = () => "Pedro";
const teste = () => ({nome:"Diego"}); // Para retornar um objeto diretamente se o return, é necessário envolver o objeto no ()
console.log(teste());

*/

//Valores padrão

/*

//Podemos setar valores padrão para os parâmetros dentro de uma função
function soma(a=3,b=6){
    return a+b;
}

console.log(soma(1)); //Retona 7
console.log(soma()); //Retorna 9

const soma2 = (a = 3, b = 6)=> a + b;
console.log(soma2());

*/

//Desestruturação | de objetos no JS ES6+ pra frente

/*

const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
        cidade: "Rio do Sul",
        estado: "SC",
    },
};

// Pegando as propiedades do objeto da forma comum
const nome_padrao = usuario.nome;
const idade_padrao = usuario.idade;

//Desestruturamos dessa forma | É necessário passar o nome exato das propiedades, e chamá-las com o mesmo nome do attr
const {nome, idade, endereco: {cidade,estado}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

//Função comum para mostrar o nome
function mostraNomePadrao(usuario){
    console.log(usuario.nome);
}

mostraNomePadrao(usuario);

//Função com parâmetro desestruturado para pegar as propiedades do objeto
function mostraNome({ nome, idade, endereco:{cidade} }){ //Passamos um objeto como parâmetro
    console.log(nome,idade,cidade);
}
mostraNome(usuario);

*/

//Operadores rest/spread

/*
//Esses operadores ainda não foram acoplados a versão principal do babel
//Então é necessário instalá-los em forma de plug-ins
//No terminal = yarn add @babel/plugin-proposal-object-rest-spread
//No babel.rc, criar um novo array de plugins = "plugins": ["@babel/plugin-proposal-object-rest-spread"]
//Parar o yarn dev e executar novamente

*/

/*

//REST
//Server para pegar o resto das propiedades de um objeto ou vetor

const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat"
};

const {nome, ...resto} = usuario; //idade e empresa ficaram na variável ...resto
console.log(nome);
console.log(resto);

//Podemos utilizar em um vetor também
const arr = [1,2,3,4];
const [ a,b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

//Podemos utilizar para parâmetros de funções
//Função normal
function soma2(a,b,c){
    return a+b+c;
}
console.log(soma2(1,3,4));

//Função com rest operator
function soma(...params){
    return params.reduce((total,next) => total + next);
    //Sem o reduce, iria retornar um array com os números passados como parâmetros
}
console.log(soma(1,2,3));

//Ou assim
function soma3(a,b, ...params){
    console.log(a,b);
    console.log(params);
}
console.log(soma3(1,2,3,4));

//SPREAD
//Propaga/Repassa as informações de um objeto ou array para outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr, ...arr2]; //Irá copiar cada uma das informações dos arrays e juntar em um array novo
console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: "Rocketseat",
};

const usuario2 = {...usuario1, nome:"Gabriel"}; //Pegamos todas as propiedades do objeto usuario1, porém alteramos o valor do nome
console.log(usuario2);

*/

//Template Literals
//Forma de incluir variáveis dentro de Strings a partir do ES6+
/*

const nome = "Diego";
const idade = 23;
//Concatenando de forma comum
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");
//Concatenando com Template Literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

*/

//Object Short Syntax
//Quando o nome da propiedade do objeto for igual o nome da variável, podemos deixar somente a variavel/propieade 1 vez

/*

const nome = 'Diego';
const idade = 23

const usuario = {
    nome,
    idade,
    empresa: 'Rockeseat',
};

console.log(usuario);

*/

///////////////////////////////////////////////

//Configurar Webpack
//Serviço que disponibiliza uma forma de trabalhar com vários arquivos JS, imagem, JSON, etc na aplicação com js
//E Serão transpilados/convertidos em bundle.js
//yarn add webpack webpack-cli -d | -d para desenvolvimento
//*As dependencias que instalamos neste projeto são apenas para ambiente de desenvolvimento | No ambiente de produção nós só jogamos o bundle.js
//Criar arquivo de configuração no projeto do webpack | webpack.config.js
//Alterar script no package.json para executar o webpack | webpack --mode=development -w

//import {soma as somaFunction, sub} from './funcoes'; //importando arquivos | devemos importar com o mesmo nome -ou com 'as' [nomedesejado]- | não precisamos especificar a extensão
//console.log(somaFunction(1,2));

//import soma, {sub, mult} from '../funcoes'; // importando função default e função export comum
//console.log(soma(1,2));
//console.log(sub(4,2));
//console.log(mult(2,2))

//import somaHaha from '../soma'; //ao importar um arquivo com export default, não precisamos passar dentro do objeto o nome da funlção, nem mesmo o nome exato da função a ser exportada
//console.log(somaHaha(5,3));

//import * as funcoes from '../funcoes'; // importando todas as funoes do arquivo para um objeto
//console.log(funcoes.default(1,2));
//console.log(funcoes.sub(2,1));

//A partir do momento que estamos usando o webpack dev server, ele irá embutir no código o bundle.js, porém ele não será criado de fato no projeto
//Em caso de produção, precisamos gerar o arquivo bundle. É só adicionar um script no package.json = "build": "webpack --mode=production"
//Webpack dev server é bom para trabalhar offline | Ele também possui live reloading

//Desafio webpack
//Exercício 1.1
//import ClasseUsuario from '../functions';
//ClasseUsuario.info(); //Como a classe guarda apensa um método estático, não precisamos instanciar um novo objeto a partir da classe para utulizar a função

//Exercício 1.2
//import {idade} from'../functions';
//console.log(idade);

//Exercício 1.3
//import Usuario, {idade as IdadeUsuario} from '../functions';
//console.log(IdadeUsuario);

//Async/await | ES8
//'Precisa' instalar um novo plugin para utilizar o async/await, assim como fizemos com o rest/spread
//yarn add @babel/plugin-transform-async-to-generator -D e yarn add @babel/polyfill -D
//Após instalar os plugins, add ao babel.rc "plugins" = @babel/plugin-transform-async-to-generator -D
//E o polyfill será add ao entry no webpack.config ['@babel/polyfill', './src/main.js']

/*

const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('OK') },2000)
})

/*

minhaPromise()
    .then(response=>{
        console.log(response)
    })
    .catch(err=>{
       console.log(err);
    });

*/

/*

async function executaPromise(){ //Uma async function também vira uma Promise
    //Podemos fazer assim
    const response = await minhaPromise();
    console.log(response);

    //Ou assim
    console.log(await minhaPromise()); // A partir da segunda linha, só será executada se a primeira chamada for retornada
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    Chamada sem async/await
    minhaPromise().then(response=> console.log(response))
    minhaPromise().then(response=> console.log(response))
    minhaPromise().then(response=> console.log(response))
    
}
executaPromise();
//Podemos esperar o resultado dessa função com .then()
//executaPromise().then(); ou também await executaPromise()
//Não podemos utilizar o await na frente de uma Promise se não estivermos dentro da função com async

//Com arrow function
const executaPromise2 = async ()=> {
    console.log(await minhaPromise());
    console.log(await minhaPromise());   
    console.log(await minhaPromise());
}
executaPromise2();

*/

//Axios
//Instalar => yarn add axios | não é uma dependência de dev
/*
import axios from 'axios';

class Api{
    static async getUserInfo(username){ //Async/await com classe stática | Com async/await ao invés de resolve & reject usamos try/catch
        try{
            const response = await (axios.get(`https://api.github.com/users/${username}`)); //axios retorna uma promise, por isso é possível utilizar como await
            console.log(response);
        }
        catch(err){
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('barcellos-pedro');
*/

//Meus exemplos com Async/await
/*
let minhaPromise = () => new Promise((resolve,reject)=>{
    resolve('Deu bom!');
    reject('Deu ruim');
})

minhaPromise()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

let minhaPromise2 = () => new Promise((resolve,reject)=>{
    resolve('Rodou!');
    reject('Babou');
})

let executaPromise2 = async () => {
    try{
        console.log(await minhaPromise2());
    }
    catch(err){
        console.log(err);
    }
}

executaPromise2();
*/

/* ################################################### */

//Desafio Async/await
//Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel
//e o babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

//Exercícios
