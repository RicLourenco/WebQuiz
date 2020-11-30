<template>
    <div>
        <nav id="testHeader">

            <div id="testDescription">
                <label for="testsType" id="typesOfTest">Tipo de teste</label>
            </div>
            <div id="clock">
                <label id="time">Tempo Disponivel: <span id="chronTime"></span></label>
            </div>

        </nav>

        <div id="testContainer">
            <div id="questionsContainer">
                <div v-for="(question, index) in test.questions" :key="question.question">
                    <div v-if="question.type === 'multipleChoice'" class="multipleChoice">
                        <p class="numberQuestions"><span id="questionNumber">{{index+1}}. </span>{{question.question}}
                        </p>
                        <div id="ul">

                            <div v-for="(option, optionIndex) in question.options" :key="option" class="answer"
                                :id="index + ':' + optionIndex" @click="selectOption(index, optionIndex)">{{option}}
                            </div>

                        </div>
                    </div>
                    <div v-else class="openAnswer">
                        <p class="numberQuestions"><span id="openAnswerNumber">{{index+1}}. </span>{{question.question}}
                        </p>
                        <div class="inputAnswer">
                            <span>R: </span><input :id="index" type="text" class="answer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <a id="stopTest" class="footerButtons">Interromper</a>
            <a id="finishTest" class="footerButtons" @click="finishTest(test)">Terminar</a>
        </footer>
    </div>
</template>

<script>
    import QuizDatabase from "../plugins/QuizDatabase";

    export default {
        name: "Quiz",
        components: QuizDatabase,
        data() {
            return {
                test: QuizDatabase.GetTestById(this.$route.params.id)
            }
        },
        created() {
            let decodedCookie = decodeURIComponent(document.cookie);

            if (!decodedCookie) {
                this.$router.push('/');
            }
        },
        mounted() {
            let fiveMinutes = 60 * 60,
                display = document.querySelector('#chronTime');

            this.startTimer(fiveMinutes, display);
        },
        methods: {
            startTimer(duration, display) {
                let timer = duration,
                    minutes;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;

                    display.textContent = minutes + "m";

                    if (--timer < 0) {
                        timer = duration;
                    }
                }, 1000);
            },

            selectOption: function (idx, optionIdx) {
                let selectedOption = document.getElementById(idx + ':' + optionIdx);

                selectedOption.classList.contains("pickedAnswer") ? selectedOption.classList.remove("pickedAnswer") : selectedOption.classList.add("pickedAnswer");
            },

            finishTest: function (testObj) {

                let users = JSON.parse(localStorage.getItem("users"));

                let loggedUser = getCookie("user");

                let mark = "";

                Array.prototype.pushIfNotExists = function (takenTests) {

                    let checkExists = false;

                    for (let i = 0; i < takenTests.length; i++) {
                        if (testObj.id === takenTests[i].id) {
                            checkExists = true;
                        }
                    }

                    if (!checkExists) {
                        let currentDate = new Date();

                        testObj.finished = true;
                        mark = calculateResult();
                        testObj.result = mark;
                        testObj.date = currentDate.toDateString();
                        takenTests.push(testObj);
                    }
                }

                for (let i = 0; i < users.length; i++) {
                    if (users[i].email === loggedUser) {

                        users.pushIfNotExists(users[i].tests);

                        localStorage.setItem("users", JSON.stringify(users));
                    }
                }

                function getCookie(name) {
                    const value = `; ${document.cookie}`;
                    const parts = value.split(`; ${name}=`);
                    if (parts.length === 2) {
                        return parts.pop();
                    }
                }


                function calculateResult() {

                    let finalMark = 0;

                    for (let i = 0; i < testObj.questions.length; i++) {
                        if (testObj.questions[i].type === "openAnswer") {

                            if (document.getElementById(i).value === testObj.questions[i].answer) {
                                finalMark += testObj.questions[i].quotation;
                            }

                        } else {
                            let allCorrect = true;

                            for (let j = 0; j < testObj.questions[i].options.length; j++) {

                                let correctOptions = testObj.questions[i].answer;

                                if (correctOptions.includes(j)) {
                                    if (!document.getElementById(i + ":" + j).classList.contains("pickedAnswer")) {
                                        allCorrect = false;
                                    }
                                } else {
                                    if (document.getElementById(i + ":" + j).classList.contains("pickedAnswer")) {
                                        allCorrect = false;
                                    }
                                }
                            }

                            if (allCorrect) {
                                finalMark += testObj.questions[i].quotation;
                            }
                        }
                    }

                    return finalMark;
                }


                alert(`Concluiu o teste com ${mark} valores`);
                this.$router.push('/ongoingQuizzes');
            }
        }
    }
</script>

<style scoped>
    a {
        color: black;
    }

    #testContainer {
        background-color: #F6F3F3;
        width: 100%;
    }


    #testHeader {
        width: 100%;
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
    }


    #testDescription {
        padding: 25px;
        text-align: center;
        width: 70%;
    }


    #clock {
        width: 30%;
        padding: 25px;
        text-align: right;
        min-width: 270px;
    }



    #time {
        padding: 15px;
        border: 2px solid #4a4a4a;
    }


    #chronTime {
        color: red;
    }


    #questionsContainer {
        display: grid;
        grid-template-columns: 1fr;
    }


    .multipleChoice {
        width: 60%;
        margin: 25px auto;
        background-color: #c4c2c2;
        padding: 5px;
        border: 2px solid black;
    }


    #ul {
        width: 90%;
        margin: 25px auto;
    }


    .answer {
        padding: 25px;
        color: black;
        margin-top: 10px;
        background-color: white;
        border: 1px solid black;
    }

    .answer:hover {
        background-color: rgb(194, 154, 194);
        cursor: pointer;
    }

    .pickedAnswer {
        background-color: rgb(194, 154, 194);
        border-color: cornflowerblue;

    }

    .openAnswer {
        width: 60%;
        margin: 25px auto;
        background-color: #c4c2c2;
        padding: 5px;
        border: 2px solid black;
    }


    .inputAnswer {
        width: 90%;
        margin: 25px auto;
    }


    input[type=text] {
        border: none;
        border-bottom: 2px solid black;
        width: 90%;
        margin: 0 auto;
        padding: 5px;
    }


    .numberQuestions {
        padding: 15px;
    }


    footer {
        border-top: 3px double gray;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        grid-row: 11;
        background-color: black;
    }


    .footerButtons {
        padding: 15px;
        margin: 0 10px;
        width: 125px;
        text-align: center;
    }


    #stopTest {
        background-color: yellow;
        color: black;
        border-radius: 15px;
    }


    #finishTest {
        background-color: greenyellow;
        color: green;
        border-radius: 15px;
        cursor: pointer;
    }
</style>