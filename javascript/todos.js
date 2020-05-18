var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
// Tentamos trazer uma lista que foi salva no localStorage para iterar.
// Se o JSON.parse() não trouxer um valor aceitável para o que é esperado,
// no caso um array para iterar na função renderTodos().
// A variável todos irá receber um array vazio || []
// Para checar o que está salvo no localStorage. DevTools > Application > LocalStorage > file://


function renderTodos(){
    listElement.innerHTML = "";
    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");

        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick","deleteTodo("+ pos +")");

        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem("list_todos",JSON.stringify(todos));
    // localStorage e JSON são variáveis globais.
    // A função localStorage.setItem() recebe chave e valor.
    // A função localStorage.setItem() não aceita um array, então é necessaŕio converter para uma String única
}