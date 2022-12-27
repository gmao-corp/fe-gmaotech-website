// Cria a variável que armazena o local onde os dados serão inseridos no HTML
var content = document.getElementById("content");
// Indica a URL do arquivo JSON com as informações
var requestURL = "./assets/json/data.json";
// Inicia uma instância da classe XMLHttpReques chamado request
var request = new XMLHttpRequest();

// Abre uma conexão utilizando o método GET para a URL indicada
request.open("GET", requestURL);
// Indica para aplicação que a resposta será do tipo JSON
request.responseType = "json";
// Realiza a requisição
request.send();

// Quando a requisição for carrega executa a função
request.onload = function () {
  // Armazena a resposta da requisição na variável resp
  var resp = request.response;
  // Executa a função showMembers utilizando a resposta da requisição
  showMembers(resp);
};

// Função para carregar cada membro encontrado
function showMembers(list) {
  // Condição para verificar qual o tamanho da lista
  for (var i = 0; i < list.length; i++) {

    // Cria a tag div que será a principal
    var div = document.createElement("div");
    //Define o nome da classe da div
    div.className = "name";

    // Cria a tag h3 que receberá o nome
    var nome = document.createElement("h3");
    // Define o nome da classe h3
    nome.className = "nomeCidadao";

    var primeiroNome = document.createElement("span");
    primeiroNome.className = "primeiroNome"
    var segundoNome = document.createElement("span");
    segundoNome.className = "segundoNome"
    primeiroNome.textContent = list[i].name.split(" ")[0] + " ";
    segundoNome.textContent = list[i].name.split(" ")[1];
    nome.appendChild(primeiroNome)
    nome.appendChild(segundoNome)
    

    
    // Carrega o valor do atributo nome da lista JSON no h3
    //nome.textContent = list[i].name;

    var fotoPerfil = document.createElement("a");
    fotoPerfil.setAttribute("href", list[i].socialMedia[0].github)
    fotoPerfil.setAttribute("target", "_blank");
    var img = document.createElement("img");
    img.className = "foto-perfil";
    img.setAttribute("src",list[i].photo)
    fotoPerfil.appendChild(img);

    var linkedin = document.createElement("a");
    linkedin.setAttribute("href", list[i].socialMedia[0].linkedin);
    linkedin.setAttribute("target", "_blank");
    var icoLinkedin = document.createElement("i");
    icoLinkedin.className = "fa fa-linkedin fa-lg";
    linkedin.appendChild(icoLinkedin);

    var instagram = document.createElement("a");
    instagram.setAttribute("href", list[i].socialMedia[0].instagram);
    instagram.setAttribute("target", "_blank");
    var icoInstagram = document.createElement("i");
    icoInstagram.className = "fa fa-instagram fa-lg";
    instagram.appendChild(icoInstagram);

    var github = document.createElement("a");
    github.setAttribute("href", list[i].socialMedia[0].github);
    github.setAttribute("target", "_blank");
    var icoGithub = document.createElement("i");
    icoGithub.className = "fa fa-github fa-lg";
    github.appendChild(icoGithub);

    div.appendChild(nome);
    div.appendChild(fotoPerfil);
    div.appendChild(linkedin);
    div.appendChild(instagram);
    div.appendChild(github);
    content.appendChild(div);
  }
}
