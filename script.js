const containerPrincipal = document.querySelector(".container-principal");
const areaPerguntas = document.querySelector(".area-perguntas");
const areaOpcoes = document.querySelector(".area-opcoes");
const areaResultado = document.querySelector(".area-resultado");
const textoFinal = document.querySelector(".texto-final");

const questoes = [
  {
    enunciado: "Logo após sair da escola, você encontra uma nova ferramenta: um chat que responde qualquer dúvida e gera imagens e sons realistas. Qual é sua reação inicial?",
    alternativas: [
      {
        texto: "Fico preocupado com os possíveis perigos dessa tecnologia.",
        afirmacao: "No começo, sentiu receio do que essa tecnologia poderia provocar."
      },
      {
        texto: "Achei incrível e quis aprender como usar essa IA no dia a dia.",
        afirmacao: "Demonstrou interesse em explorar a IA para facilitar suas tarefas."
      }
    ]
  },
  {
    enunciado: "Com o avanço da IA, sua professora resolveu fazer uma sequência de aulas sobre o tema. No fim, ela pede um trabalho escrito. Como você procede?",
    alternativas: [
      {
        texto: "Uso ferramentas com IA para ajudar na pesquisa e explico com minhas palavras.",
        afirmacao: "Conseguiu usar a IA para obter informações úteis para o trabalho."
      },
      {
        texto: "Prefiro usar pesquisas próprias e o que aprendi nas aulas.",
        afirmacao: "Sentiu-se mais confiante usando seus próprios conhecimentos."
      }
    ]
  },
  {
    enunciado: "Durante o debate sobre o impacto da IA no futuro do trabalho, qual seu posicionamento?",
    alternativas: [
      {
        texto: "Acredito que a IA criará novas oportunidades e aprimorará habilidades humanas.",
        afirmacao: "Acredita no potencial da IA para inovação e novas carreiras."
      },
      {
        texto: "Me preocupo com a substituição de empregos e defendo proteção aos trabalhadores.",
        afirmacao: "Organizou um grupo para discutir o uso ético da IA no trabalho."
      }
    ]
  },
  {
    enunciado: "Para representar sua visão sobre IA, você precisa criar uma imagem. Como faz?",
    alternativas: [
      {
        texto: "Uso um programa tradicional de desenho, como o Paint.",
        afirmacao: "Percebeu que muitos ainda precisam aprender ferramentas tradicionais."
      },
      {
        texto: "Faço a imagem com um gerador de imagens por IA.",
        afirmacao: "Aproveitou geradores de imagem para acelerar o processo criativo."
      }
    ]
  },
  {
    enunciado: "Num trabalho em grupo, alguém usou IA para copiar um texto inteiro do chat. Como reage?",
    alternativas: [
      {
        texto: "Acredito que usar IA para escrever tudo é válido.",
        afirmacao: "Ficou dependente da IA para todas as tarefas."
      },
      {
        texto: "Sei que IA ajuda, mas é importante revisar e personalizar o conteúdo.",
        afirmacao: "Entendeu que IA deve apoiar, mas o trabalho deve refletir o grupo."
      }
    ]
  },
];

let indiceAtual = 0;
let perguntaAtual;
let narrativaFinal = "";

function exibirPergunta() {
  if (indiceAtual >= questoes.length) {
    exibirResultado();
    return;
  }
  perguntaAtual = questoes[indiceAtual];
  areaPerguntas.textContent = perguntaAtual.enunciado;
  areaOpcoes.textContent = "";
  mostrarOpcoes();
}

function mostrarOpcoes() {
  for (const opcao of perguntaAtual.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.addEventListener("click", () => opcaoSelecionada(opcao));
    areaOpcoes.appendChild(botao);
  }
}

function opcaoSelecionada(opcao) {
  narrativaFinal += opcao.afirmacao + " ";
  indiceAtual++;
  exibirPergunta();
}

function exibirResultado() {
  areaPerguntas.textContent = "O futuro da IA em 2049...";
  textoFinal.textContent = narrativaFinal;
  areaOpcoes.textContent = "";
}

exibirPergunta();
