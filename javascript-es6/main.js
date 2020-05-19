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
