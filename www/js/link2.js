const pesquisaInput = document.getElementById('pesquisa');
const perfis2Div = document.querySelector('.perfis2');
const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

// Dados de perfis
const perfis2 = [
  { id: 1, nome: 'Fulana', estado: 'PI', cidade: 'Picos', estrelas: 5, foto: 'fulana.jpg' },
  { id: 2, nome: 'Beatriz', estado: 'BA', cidade: 'Salvador', estrelas: 4, foto: 'beatriz.jpg' },
  { id: 3, nome: 'Caroline', estado: 'CE', cidade: 'Fortaleza', estrelas: 3, foto: 'caroline.jpg' },
  { id: 4, nome: 'Daniela', estado: 'MA', cidade: 'São Luís', estrelas: 4, foto: 'daniela.jpg' },
  { id: 5, nome: 'Eliane', estado: 'PB', cidade: 'João Pessoa', estrelas: 5, foto: 'eliane.jpg' },
  { id: 6, nome: 'Fabiana', estado: 'PE', cidade: 'Recife', estrelas: 3, foto: 'fabiana.jpg' },
  { id: 7, nome: 'Gabriela', estado: 'PI', cidade: 'Teresina', estrelas: 4, foto: 'gabriela.jpg' },
  { id: 8, nome: 'Helen', estado: 'RN', cidade: 'Natal', estrelas: 5, foto: 'helen.jpg' },
  { id: 9, nome: 'Isabel', estado: 'SE', cidade: 'Aracaju', estrelas: 3, foto: 'isabel.jpg' },
];

// Função para criar perfil
function criarPerfil2(perfil2) {
  const perfil2Div = document.createElement('a');
  perfil2Div.href = '#';
  perfil2Div.classList.add('perfil2');


  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-div');
  const img = document.createElement('img');
  img.src = perfil2.foto;
  imgDiv.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info-div');

  const nome = document.createElement('span');
  nome.classList.add('nome');
  nome.textContent = perfil2.nome;

  const estrelasDiv = document.createElement('div');
  estrelasDiv.classList.add('estrelas');
  const estrela = document.createElement('i');
  estrela.classList.add('mdi', 'mdi-star');
  const estrelasTexto = document.createElement('span');
  estrelasTexto.textContent = ` ${perfil2.estrelas}`;
  estrelasDiv.appendChild(estrela);
  estrelasDiv.appendChild(estrelasTexto);

  const localizacaoDiv = document.createElement('div');
  localizacaoDiv.classList.add('localizacao');
  const estado = document.createElement('span');
  estado.textContent = `Estado: ${perfil2.estado}`;
  const cidade = document.createElement('span');
  cidade.textContent = `Cidade: ${perfil2.cidade}`;
  localizacaoDiv.appendChild(estado);
  localizacaoDiv.appendChild(cidade);

  infoDiv.appendChild(nome);
  infoDiv.appendChild(localizacaoDiv);
  infoDiv.appendChild(estrelasDiv);

  perfil2Div.appendChild(imgDiv);
  perfil2Div.appendChild(infoDiv);

  return perfil2Div;
}

// Renderizar perfis inicialmente
perfis2.forEach((perfil2) => {
  const perfil2Div = criarPerfil2(perfil2);
  perfis2Div.appendChild(perfil2Div);
});

// Atualizar informações de estado e cidade
pesquisaInput.addEventListener('input', () => {
  const pesquisa = pesquisaInput.value.toLowerCase();
  const perfisFiltrados = perfis2.filter((perfil2) => perfil2.nome.toLowerCase().includes(pesquisa));

  perfis2Div.innerHTML = '';
  perfisFiltrados.forEach((perfil2) => {
    const perfil2Div = criarPerfil2(perfil2);
    perfis2Div.appendChild(perfil2Div);
  });
});

estadoSelect.addEventListener('change', () => {
  const estadoSelecionado = estadoSelect.value;
  const perfisFiltrados = perfis2.filter((perfil2) => perfil2.estado === estadoSelecionado);

  perfis2Div.innerHTML = '';
  perfisFiltrados.forEach((perfil2) => {
    const perfil2Div = criarPerfil2(perfil2);
    perfis2Div.appendChild(perfil2Div);
  });

  if (estadoSelect.value === '') {
    estadoSelect.setAttribute('placeholder', 'Selecione');
  }

});

cidadeSelect.addEventListener('change', () => {
    const cidadeSelecionada = cidadeSelect.value;
    const perfisFiltrados = perfis2.filter((perfil2) => perfil2.cidade === cidadeSelecionada);
  
    perfis2Div.innerHTML = '';
    perfisFiltrados.forEach((perfil2) => {
      const perfil2Div = criarPerfil2(perfil2);
      perfis2Div.appendChild(perfil2Div);
    });

    if (cidadeSelect.value === '') {
        cidadeSelect.setAttribute('placeholder', 'Selecione');
      }

  });
  
  // Resetar filtro quando selecionar opção "Selecione"
  estadoSelect.addEventListener('change', () => {
    if (estadoSelect.value === '') {
      perfis2.forEach((perfil2) => {
        const perfil2Div = criarPerfil2(perfil2);
        perfis2Div.appendChild(perfil2Div);
      });
    }
  });
  
  cidadeSelect.addEventListener('change', () => {
    if (cidadeSelect.value === '') {
      perfis2.forEach((perfil2) => {
        const perfil2Div = criarPerfil2(perfil2);
        perfis2Div.appendChild(perfil2Div);
      });
    }
  });