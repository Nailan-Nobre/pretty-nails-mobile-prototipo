// Obter elementos do DOM
const calendarioTabela = document.getElementById('calendario-tabela');
const calendarioCorpo = document.getElementById('calendario-corpo');
const mesAnterior = document.getElementById('mes-anterior');

// Função para criar linha do calendário
function criarLinhaCalendario(dia) {
    const linha = document.createElement('tr');
    const celula = document.createElement('td');
    celula.textContent = dia;
    linha.appendChild(celula);
    return linha;
}

// Função para criar calendário
function criarCalendario() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
    const diasDoMes = new Array(7 * 6); // 7 dias por semana, 6 semanas
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    // Limpar calendário anterior
    calendarioCorpo.innerHTML = '';

    // Atualizar mês anterior
    mesAnterior.textContent = meses[mesAtual] + ' ' + anoAtual;

    // Preencher dias do mês
    for (let i = 0; i < diasDoMes.length; i++) {
        const dia = i + 1;
        const data = new Date(anoAtual, mesAtual, dia);
        if (data.getMonth() === mesAtual) {
            diasDoMes[i] = dia;
        } else {
            diasDoMes[i] = '';
        }
    }

    // Criar linhas
    for (let i = 0; i < diasDoMes.length; i += 7) {
        const linha = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const celula = document.createElement('td');
            celula.textContent = diasDoMes[i + j];
            linha.appendChild(celula);
        }
        calendarioCorpo.appendChild(linha);
    }
}

// Inicializar calendário
criarCalendario();