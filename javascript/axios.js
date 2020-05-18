// Axios ja entende que a resposta é um JSON, já retornando um objeto Javascript. Sem a necessidade de JSON.parse()
axios.get('https://api.github.com/users/barcellos-pedro')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
