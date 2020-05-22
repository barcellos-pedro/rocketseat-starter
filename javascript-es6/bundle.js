/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: default, sub, mult, div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mult\", function() { return mult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"div\", function() { return div; });\nfunction soma(a,b){ // podemos exportar variavel, classe, funcoes\n    return a+b;\n}\n\nfunction sub(a,b){\n    return a-b;\n}\n\nfunction mult(a,b){\n    return a*b;\n}\n\nfunction div(a,b){\n    return a/b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./soma.js\");\n//ES6+ | Conceitos\n//Classes\n/*\nclass List{\n    constructor(){\n        this.data = [];\n    }\n\n    add(data){\n        this.data.push(data);\n        console.log(this.data);\n    }\n}\n\nclass TodoList extends List{ // extends herda uma classe\n    constructor(){\n        super(); // Herdar classe pai\n\n        this.usuario = 'Diego';\n    }\n    mostraUsuario(){\n        console.log(this.usuario);\n    }\n}\n\nvar MinhaLista = new TodoList();\n\ndocument.querySelector(\"button#novotodo\").onclick = function(){\n    MinhaLista.add(\"Novo todo\");\n}\n\nMinhaLista.mostraUsuario();\n*/\n\n//Método estático\n//Método estático não depende de nenhum outra informação da Classe, e não enxerga o restante da classe\n//Com métodos estáticos não é necessário instanciar um novo objeto com a Classe Matematica -variavel = new Matematica(), linha 41- para utilizar seus métodos\n//Métodos estáticos geralmente não possuem constructor e são bons para utilizar para retornar dados com suas funções\n/*\nclass Matematica{\n    static soma(a,b){\n        return a+b;\n    }\n}\nconsole.log(Matematica.soma(1,2)); //Podemos chamá-la direto\n*/\n\n//Const & Let e variável de escopo(let)\n//Constantes não podem sem mudadas. Somente mutadas.\n//Mutação é quando se trabalha como mesmo formato do objeto, porém, nós alteramos os valor dentro do objeto ou vetor;\n/*\nfunction teste(x){\n    let y = 2;\n    if(x>5){\n        // Aqui poderiamos alterar a variavel y dentro deste escopo ou o escopo anterior, fora do IF mas dentro da função\n        console.log(x,y);\n    }\n}\n\nteste(10);\nconsole.log(y); // y não irá aparecer aqui por ser uma variavel de escopo, seu escopo é dentro da função teste\n*/\n\n//Operações em vetores\n/*\nconst arr = [1,3,4,5,8,9];\n\n//Map\n//serve para percorrer o vetor e retornar algo de dentro ou uma nova informação\n//o map tbm recebe um função dentro dele\nconst newArr = arr.map(function(item,index){ // item recebe cada item do vetor | Map tbm pode receber o index, que é a posição do item no vetor\n    return item * 2;\n})\nconsole.log(newArr);\n\n//Reduce \n//consome todo o vetor e transforma em uma única informação ou variável\nconst sum = arr.reduce(function(total,next){ // total recebe o resultado total a cada iteração, e o next recebe o próximo item do array\n    return total+next; // retornará a soma total de todos o números\n})\nconsole.log(sum);\n\n//Filter\n//precisa retornar True ou False para realizar o filtro desejado\nconst filter = arr.filter(function(item){ // Este novo array receberá cada item para filtrar\n    return item % 2 === 0; // E iremos filtrar retorando somente os divisíveis por 2, o restante será descartado\n})\nconsole.log(filter);\n\n//Find\n//é utilizado para verificar se existe uma informação dentro do array\n//assim como o filter, é necessário retornar True ou False\nconst find = arr.find(function(item){\n    return item === 4; // irá retornar 4, caso não encontre irá retorna undefined\n});\nconsole.log(find);\n*/\n\n//Arrow functions\n/*\nconst arr = [1,3,4,5,6];\n\nconst newArr3 = arr.map((item)=>{\n    return item*2;\n})\n\n//Quando a função recebe apenas 1 parâmetro, podemos remover os ()\nconst newArr2 = arr.map(item=>{\n    return item*2;\n});\n\n//Se a função for retornar somente um linha simples, podemos reduzir a verbosidade dessa forma.\nconst newArr = arr.map(item => item*2);\nconsole.log(newArr);\n\nconst teste4 = ()=>{\n    return \"Hello teste 4\";\n}\nconst teste3 = () => [1,2,3];\nconst teste2 = () => \"Pedro\";\nconst teste = () => ({nome:\"Diego\"}); // Para retornar um objeto diretamente se o return, é necessário envolver o objeto no ()\nconsole.log(teste());\n*/\n\n//Valores padrão\n/*\n//Podemos setar valores padrão para os parâmetros dentro de uma função\nfunction soma(a=3,b=6){\n    return a+b;\n}\n\nconsole.log(soma(1)); //Retona 7\nconsole.log(soma()); //Retorna 9\n\nconst soma2 = (a = 3, b = 6)=> a + b;\nconsole.log(soma2());\n*/\n\n//Desestruturação | de objetos no JS ES6+ pra frente\n/*\nconst usuario = {\n    nome: \"Diego\",\n    idade: 23,\n    endereco: {\n        cidade: \"Rio do Sul\",\n        estado: \"SC\",\n    },\n};\n\n// Pegando as propiedades do objeto da forma comum\nconst nome_padrao = usuario.nome;\nconst idade_padrao = usuario.idade;\n\n//Desestruturamos dessa forma | É necessário passar o nome exato das propiedades, e chamá-las com o mesmo nome do attr\nconst {nome, idade, endereco: {cidade,estado}} = usuario;\nconsole.log(nome);\nconsole.log(idade);\nconsole.log(cidade);\nconsole.log(estado);\n\n//Função comum para mostrar o nome\nfunction mostraNomePadrao(usuario){\n    console.log(usuario.nome);\n}\n\nmostraNomePadrao(usuario);\n\n//Função com parâmetro desestruturado para pegar as propiedades do objeto\nfunction mostraNome({ nome, idade, endereco:{cidade} }){ //Passamos um objeto como parâmetro\n    console.log(nome,idade,cidade);\n}\nmostraNome(usuario);\n*/\n\n//Operadores rest/spread\n\n/*Esses operadores ainda não foram acoplados a versão principal do babel\n//Então é necessário instalá-los em forma de plug-ins\n//No terminal = yarn add @babel/plugin-proposal-object-rest-spread\n//No babel.rc, criar um novo array de plugins = \"plugins\": [\"@babel/plugin-proposal-object-rest-spread\"]\n//Parar o yarn dev e executar novamente\n*/\n\n/*\n//REST\n//Server para pegar o resto das propiedades de um objeto ou vetor\n\nconst usuario = {\n    nome: \"Diego\",\n    idade: 23,\n    empresa: \"Rocketseat\"\n};\n\nconst {nome, ...resto} = usuario; //idade e empresa ficaram na variável ...resto\nconsole.log(nome);\nconsole.log(resto);\n\n//Podemos utilizar em um vetor também\nconst arr = [1,2,3,4];\nconst [ a,b, ...c ] = arr;\n\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\n\n//Podemos utilizar para parâmetros de funções\n//Função normal\nfunction soma2(a,b,c){\n    return a+b+c;\n}\nconsole.log(soma2(1,3,4));\n\n//Função com rest operator\nfunction soma(...params){\n    return params.reduce((total,next) => total + next);\n    //Sem o reduce, iria retornar um array com os números passados como parâmetros\n}\nconsole.log(soma(1,2,3));\n\n//Ou assim\nfunction soma3(a,b, ...params){\n    console.log(a,b);\n    console.log(params);\n}\nconsole.log(soma3(1,2,3,4));\n\n//SPREAD\n//Propaga/Repassa as informações de um objeto ou array para outra estrutura de dados\nconst arr1 = [1,2,3];\nconst arr2 = [4,5,6];\n\nconst arr3 = [...arr, ...arr2]; //Irá copiar cada uma das informações dos arrays e juntar em um array novo\nconsole.log(arr3);\n\nconst usuario1 = {\n    nome: 'Diego',\n    idade: 23,\n    empresa: \"Rocketseat\",\n};\n\nconst usuario2 = {...usuario1, nome:\"Gabriel\"}; //Pegamos todas as propiedades do objeto usuario1, porém alteramos o valor do nome\nconsole.log(usuario2);\n*/\n\n//Template Literals\n//Forma de incluir variáveis dentro de Strings a partir do ES6+\n/*\nconst nome = \"Diego\";\nconst idade = 23;\n//Concatenando de forma comum\nconsole.log(\"Meu nome é \" + nome + \" e tenho \" + idade + \" anos\");\n//Concatenando com Template Literals\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos.`);\n*/\n\n//Object Short Syntax\n//Quando o nome da propiedade do objeto for igual o nome da variável, podemos deixar somente a variavel/propieade 1 vez\n/*\nconst nome = 'Diego';\nconst idade = 23\n\nconst usuario = {\n    nome,\n    idade,\n    empresa: 'Rockeseat',\n};\n\nconsole.log(usuario);\n*/\n\n///////////////////////////////////////////////\n\n//Configurar Webpack\n//Serviço que disponibiliza uma forma de trabalhar com vários arquivos JS, imagem, JSON, etc na aplicação com js\n//E Serão transpilados/convertidos em bundle.js\n//yarn add webpack webpack-cli -d | -d para desenvolvimento\n//*As dependencias que instalamos neste projeto são apenas para ambiente de desenvolvimento | No ambiente de produção nós só jogamos o bundle.js\n//Criar arquivo de configuração no projeto do webpack | webpack.config.js\n//Alterar script no package.json para executar o webpack | webpack --mode=development -w\n\n//import {soma as somaFunction, sub} from './funcoes'; //importando arquivos | devemos importar com o mesmo nome -ou com 'as' [nomedesejado]- | não precisamos especificar a extensão\n//console.log(somaFunction(1,2));\n\n // importando função default e função export comum\n//console.log(soma(1,2));\n//console.log(sub(4,2));\n\n //ao importar um arquivo com export default, não precisamos passar dentro do objeto o nome da funlção, nem mesmo o nome exato da função a ser exportada\n//console.log(somaHaha(5,3));\n\n // importando todas as funoes do arquivo para um objeto\n//console.log(funcoes.default(1,2));\n//console.log(funcoes.sub(2,1));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\n//Este arquivo tem uma única funcionalidade\n//Usamos export default 1 unica ver por arquivo\nfunction soma(a,b){\n    return a+b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });