module.exports = {
    entry: './main.js', // entry recebe o arquivo principal
    output: { // pra qual arquivo/local mandamos o arquivo convertido pra antes do ES6+
        path: __dirname, // variavel global que se refere ao diretorio do config do webpack
        filename: 'bundle.js', // nome do arquivo transpilado
    },
    module: {
        rules: [
            { // como o webpack deve se comportar ao receber novos arquivos js | qual loader ele irá utilizar (babel,etc) | irá executar o loader sozinho
                test: '/\.js$/', // buscar qualquer arquivo que terminar com a extensão .js
                exclude: /node_modules/, // excluir a pasta node_modules,
                use: {
                    loader: 'babel-loader', // no terminal - yarn add babel-loader -D
                }
            },
        ],
    },
};