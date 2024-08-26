const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de adquirir um novo computador com hardware avançado. Qual é o primeiro passo que você dá para aproveitar ao máximo o dispositivo?",
        alternativas: [
            {
                texto: "Configura o sistema operacional e instala os aplicativos essenciais para suas atividades diárias.",
                afirmacao: "Você se preocupa em otimizar o uso do computador desde o início, garantindo que esteja pronto para suas tarefas."
            },
            {
                texto: "Explora as capacidades de hardware e faz testes de desempenho para entender melhor suas especificações.",
                afirmacao: "Você está interessado em compreender as capacidades do computador para maximizar sua performance."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre segurança digital, sua professora pede para você pesquisar sobre práticas recomendadas para proteger um computador contra vírus. Como você aborda a tarefa?",
        alternativas: [
            {
                texto: "Procura artigos e tutoriais sobre software antivírus e configurações de segurança recomendadas.",
                afirmacao: "Você busca informações técnicas e práticas para assegurar que seu computador esteja protegido."
            },
            {
                texto: "Consulta fóruns e opiniões de usuários sobre diferentes métodos de proteção e suas experiências práticas.",
                afirmacao: "Você prefere aprender com as experiências de outros e obter recomendações baseadas em vivências reais."
            }
        ]
    },
    {
        enunciado: "Em uma discussão sobre a evolução dos computadores, qual aspecto você acha mais interessante e por quê?",
        alternativas: [
            {
                texto: "O aumento da capacidade de processamento e a miniaturização dos componentes, que permitem dispositivos cada vez mais poderosos e compactos.",
                afirmacao: "Você está fascinado pela forma como os computadores se tornam mais rápidos e pequenos com o tempo."
            },
            {
                texto: "O avanço nas interfaces de usuário e a forma como as novas tecnologias melhoram a interação entre humanos e máquinas.",
                afirmacao: "Você valoriza a evolução das interfaces que tornam o uso dos computadores mais intuitivo e acessível."
            }
        ]
    },
    {
        enunciado: "Você precisa atualizar o sistema operacional do seu computador para a versão mais recente. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Realiza uma atualização completa, incluindo backups dos arquivos importantes e verificando a compatibilidade dos aplicativos.",
                afirmacao: "Você adota uma abordagem cuidadosa para garantir que todos os dados e aplicativos estejam seguros durante a atualização."
            },
            {
                texto: "Opta por uma instalação limpa do sistema operacional para garantir um desempenho ótimo e livre de possíveis problemas antigos.",
                afirmacao: "Você prefere começar do zero para evitar qualquer influência de problemas passados e obter o melhor desempenho possível."
            }
        ]
    },
    {
        enunciado: "Seu computador começou a apresentar lentidão e erros frequentes. Qual é o seu próximo passo para resolver o problema?",
        alternativas: [
            {
                texto: "Verifica e remove arquivos desnecessários e executa uma verificação completa com o software antivírus.",
                afirmacao: "Você tenta resolver o problema com soluções comuns e manutenção básica para melhorar o desempenho."
            },
            {
                texto: "Leva o computador a um técnico para uma análise mais profunda e possíveis reparos no hardware ou no sistema.",
                afirmacao: "Você opta por buscar ajuda profissional para garantir que o problema seja solucionado de forma adequada e eficiente."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
