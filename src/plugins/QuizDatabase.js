const tests = [{
        id: 1,
        testName: "HTML Quiz",
        date: null,
        result: null,
        finished: false,
        questions: [{
                question: "O que significa html?",
                type: "openAnswer",
                answer: "Hyper text Markup Language",
                quotation: 4
            },
            {
                question: "Quem cria os padrões da web?",
                type: "multipleChoice",
                options: [
                    "Microsoft",
                    "Google",
                    "The World Wide Web Consortium",
                    "Mozilla",
                    "Linux"
                ],
                answer: [2],
                quotation: 4
            },
            {
                question: "Qual o / os elemento/s de HTML para o titulo?",
                type: "multipleChoice",
                options: [
                    "<heading>",
                    "<h1>",
                    "<h2>",
                    "<head>",
                    "<body>"
                ],
                answer: [1, 2],
                quotation: 4
            },
            {
                question: "Qual o elemento para inserir uma quebra de linha?",
                type: "multipleChoice",
                options: [
                    "<breaking>",
                    "</br>",
                    "<body>",
                    "<linux>",
                    "<br>"
                ],
                answer: [1, 4],
                quotation: 4
            },
            {
                question: "Qual o atributo de HTML para alterar a cor de fundo?",
                type: "openAnswer",
                answer: "background-color",
                quotation: 4
            }
        ]
    },
    {
        id: 2,
        testName: "CSS Quiz",
        date: null,
        result: null,
        finished: false,
        questions: [{
                question: "O que significa CSS",
                type: "openAnswer",
                answer: "Cascading Style Sheets",
                quotation: 4
            },
            {
                question: "Atravez de HTML,  qual a forma correta de aceder a uma folha de estilos externa?",
                type: "openAnswer",
                answer: "<link rel='stylesheet type='text/css' href='mystyles.css'>",
                quotation: 4
            },
            {
                question: "Que atributo de HTML é usado para defenir estilos no proprio HTML?",
                type: "multipleChoice",
                options: [
                    "class",
                    "font",
                    "style",
                    "styles",
                    "linuxstyle"
                ],
                answer: [2],
                quotation: 4
            },
            {
                question: "Como se faz um comentario em CSS?",
                type: "openAnswer",
                answer: "/**/",
                quotation: 4
            },
            {
                question: "Qual a sintax correta de CSS?",
                type: "multipleChoice",
                options: [
                    "body {color:black;}",
                    "body:{color:black}",
                    "body(color:black)",
                    "body => color:black",
                    "body/color:black}"
                ],
                answer: [0],
                quotation: 4
            }
        ]
    },
    {
        id: 3,
        testName: "JavaScript Quiz",
        date: null,
        result: null,
        finished: false,
        questions: [{
                question: "Que elemento é utilizado dentro do HTML que nos permite utilizar JavaScript?",
                type: "multipleChoice",
                options: [
                    "<javascript>",
                    "<j.script>",
                    "<script>",
                    "<js>",
                    "<scripting>"
                ],
                answer: [2],
                quotation: 4
            },
            {
                question: "Qual a sintax correta para referenciar um ficheiro chamado xxx.js?",
                type: "openAnswer",
                answer: "<script href='xxx.js'>",
                quotation: 4
            },
            {
                question: "Como se escreve 'Hello World num comando alet?'",
                type: "multipleChoice",
                options: [
                    "msgBox('Hello World')",
                    "msg('Hello World')",
                    "alert('Hello World')",
                    "alertBox('Hello World')",
                    "MessageBoxAlert('Hello World')"
                ],
                answer: [2],
                quotation: 4
            },
            {
                question: "Como é que chamamos uma função chamada 'myFunction'",
                type: "openAnswer",
                answer: "myFunction()",
                quotation: 4
            },
            {
                question: "Como escrever um if em JavaScript",
                type: "multipleChoice",
                options: [
                    "if i = 5",
                    "if i = 5 then",
                    "if i() == 5 then",
                    "if(i == 5)",
                    "if(i > 4)"
                ],
                answer: [3, 4],
                quotation: 4
            }
        ]
    },
    {
        id: 4,
        testName: "C# Quiz",
        date: null,
        result: null,
        finished: false,
        questions: [{
                question: "Qual a síntaxe correta?",
                type: "multipleChoice",
                options: [
                    "cout >> 'Hello World'",
                    "Console.WriteLine('Hello World')",
                    "print('Hello World')",
                    "system.print('Hello World')",
                    "print.system('Hello world')"
                ],
                answer: [1],
                quotation: 4
            },
            {
                question: "Como se insere um comentario em C#?",
                type: "openAnswer",
                answer: "//",
                quotation: 4
            },
            {
                question: "Que tipo de dados é utilizado para criar uma variavel de texto?",
                type: "multipleChoice",
                options: [
                    "string",
                    "str",
                    "int",
                    "stringDouble",
                    "string.Pasrse"
                ],
                answer: [0],
                quotation: 4
            },
            {
                question: "Que operador é utilizado para concatenar?",
                type: "openAnswer",
                answer: "+",
                quotation: 4
            },
            {
                question: "Que operador é utilizado para comparar 2 valores",
                type: "multipleChoice",
                options: [
                    "><",
                    "=",
                    "!=",
                    "<<",
                    "=="
                ],
                answer: [2, 4],
                quotation: 4
            }
        ]
    }
]



export default {
    GetTests: function () {
        return tests;
    },
    GetTestById: function (id) {
        id--;
        return tests[id];
    }
}