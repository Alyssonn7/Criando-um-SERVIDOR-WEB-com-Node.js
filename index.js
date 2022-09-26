
//Criando um servidor WEB com Node.js

//INSTRUÇÕES 👇

// 1° - CARREGAMOS NOSSO MODULO NA LINHA 1° 👇
const http = require('http');
//---------------------------------------

// 2° - DEPOIS CRIAMOS NOSSO "SERVIDOR" COM ESSE METODO 👇

/*E o "REQ" e "RES" são exatamente isso, o req é o request, o objeto de requisição, que contém todos os dados relacionados a requisição.
O res é o response, que é a resposta que será enviada para quem fez a solicitação.*/


let server = http.createServer((req, res)=>{

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);


// AQUI PODEMOS DETECTAR "URL" DIFERENTES 👇💻
    switch (req.url) {

        case '/':

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('<h1>olá</h1>');

        break;

        case '/users':

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(JSON.stringify({
            users:[{
                name:'Alysson',
                email:'contato@alysson.com.br',
                id:1
            }] 
        }));
            
        break;

    }

});

//-----------------------------------------------------------------------------------------------------------------------------------------

// 3° - AQUI FAZEMOS O ENDEREÇO IP DO SERVIDOR
server.listen(3000, '127.0.0.1', ()=>{


    console.log('servidor rodando!');

});



//==========================================================================================================================================
// PARA TESTAR SE O SERVIDOR ESTÁ RODANDO; (VÁ ATÉ O TERMINAL DE COMANDO E DIGITE "node index")
// DEPOIS VÁ ATÉ O NAVEGADOR WEB (GOOGLE CHROME) E DIGITE; "localhost:3000"


// INSTALANDO O "PACKAGE.JSON"

// NA PASTA ONDE ESTÁ O SEU ARQUIVO "INDEX.JS" NO "CMD": DIGITE; "NPM INIT", DEPOIS CONFIGURE AS PERGUNTAS ETC!

/* Para que serce o package.json?

O package. json é um arquivo de configuração utilizado para estipular e configurar dependências
do seu projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados.
Através dele conseguimos deixar claro uma "receita" para executar um projeto. O package. json é
um arquivo de configuração utilizado para estipular e configurar dependências do seu projeto
(quais outros pacotes ele vai precisar para ser executado) e scripts automatizados.
Através dele conseguimos deixar claro uma "receita" para executar um projeto.*/


//INSTALANDO O "EXPRESS" NO PACKAGE.JSON: VÁ ATÉ O CMD E DIGITE "NPM INSTALL EXPRESS --SAVE"

/* Para que serve o Express no node JS?

Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks
do Node. O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes
URLs. Integrar "view engines" para inserir dados nos templates. */


