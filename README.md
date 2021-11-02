# Catálogo Veículos React native expo

Projeto de um aplicativo mobile para exibir um catálogo de veículos à venda. Consumindo dados da api <a href="https://github.com/cesar99144/Api-CatalogosVeiculos-NodeJS" target="_blank">Api catálogo veículos-nodejs</a>. 

<p float="left">
    <img src="ImagensProjeto/1.Home.png" alt="drawing" width="180" >
    <img src="ImagensProjeto/2.Home.png" alt="drawing" width="180" >
    <img src="ImagensProjeto/3.Carros.png" alt="drawing" width="180">
    <img src="ImagensProjeto/4.Motos.png" alt="drawing" width="180">
</p>

<p float="left">
    <img src="ImagensProjeto/5.Veículo.png" alt="drawing" width="180" >
    <img src="ImagensProjeto/6.Filtro.png" alt="drawing" width="180" >
    <img src="ImagensProjeto/7.Drawer.png" alt="drawing" width="180">
    
</p>

<h3>Foi utilizado:</h3>
<ul>
    <li>React native expo</li>
    <li>Axios para as requisições HTTP</li> <br>
</ul>

<h3>Requisitos instalação:</h3>
    <blockquote>
       <ul>
        <li>Expo instalado</li>
        <li>Npm do node para caso precise rodar algum pacote</li>
        <li>Node.js para executar a api</li>
       </ul>
       <br>
       É fundamental que a <a href="https://github.com/cesar99144/Api-CatalogosVeiculos-NodeJS" target="_blank">api</a> do projeto esteja instalada em seu computador rodando no localhost:4000. Caso queira rodar a api em outra porta, altere a url do localhost na pasta <code>src\services\api.js</code>
    </blockquote>
    <blockquote>
       No projeto acessei a api no emulador utilizando o endereço ip local e a porta da api, por exemplo: <code>http://192.168.1.6:4000</code> Para conseguir executar seria necessário ajustar esses valores de acordo com seu ambiente de desenvolvimento
    </blockquote>