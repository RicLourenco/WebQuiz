<template>
<div id="mainDiv">

    <div id="ongoingQuizzes" class="listTests">
        <div  class="manyTests" v-for="test in tests" :key="test.id">
            <a name="testName">{{test.testName}}</a>
            <input id="joinButtons" type="submit" value="Entrar" @click="$router.push(`/quiz/${test.id}`)" />
        </div>
    </div>

    <div id="previousQuizzes" class="listTests">
        <div class="manyTests1" v-for="completedTest in completedTests" :key="completedTest.id">
            <a name="testName">{{completedTest.testName}}</a>
            <div class="testDate">Data: {{completedTest.date}}</div>
            <div class="result">Resultado: {{completedTest.result}}&#47;20</div>
        </div>
    </div>

    <div id="nextQuizzes" class="listTests">

    </div>

</div>
</template>

<script>
    import QuizDatabase from "../plugins/QuizDatabase";

    export default {
        name: "Quiz",
        components: QuizDatabase,
        data() {
            return {
                tests: QuizDatabase.GetTests() /* this.getAvailableTests() */ ,
                completedTests: this.getUsersTests(),
                currentView: null
            }
        },
        mounted() {
            document.getElementsByClassName("listTests")[0].style.gridTemplateRows = `repeat(${this.tests.length}, 1fr)`;
            document.getElementsByClassName("listTests")[1].style.gridTemplateRows = `repeat(${this.completedTests.length}, 1fr)`;
        },
        changeQuizView: function (viewName) {
            if (viewName === "ongoingQuizzes") {
                document.getElementById("ongoingQuizzes").style.display = "grid";

            } else if (viewName === "previousQuizzes") {
                document.getElementById("previousQuizzes").style.display = "grid";
            } else {
                document.getElementById("nextQuizzes").style.display = "grid";
            }
        },
        methods: {
            /* getAvailableTests: function () {
                let users = JSON.parse(localStorage.getItem("users"));

                let loggedUser = getCookie("user");

                let allTests = QuizDatabase.GetTests();

                var availableTests = allTests;

                for (let i = 0; i < users.length; i++) {

                    if (users[i].email === loggedUser) {

                        let usersTests2 = users[i].tests;

                        for (let j = 0; j < allTests.length; j++) {

                            for (let k = 0; k < usersTests2.length; k++) {

                                if(allTests[j].id === usersTests2[k].id) {
                                    availableTests.splice(j, 1);
                                }
                            }
                        }
                    }
                }


                function getCookie(name) {
                    const value = `; ${document.cookie}`;
                    const parts = value.split(`; ${name}=`);
                    if (parts.length === 2) {
                        return parts.pop();
                    }
                }

                return availableTests;
            }, */

            getUsersTests: function () {

                let users = JSON.parse(localStorage.getItem("users"));

                let loggedUser = getCookie("user");

                let usersTests;

                for (let i = 0; i < users.length; i++) {
                    if (users[i].email === loggedUser) {

                        usersTests = users[i].tests;
                    }
                }

                function getCookie(name) {
                    const value = `; ${document.cookie}`;
                    const parts = value.split(`; ${name}=`);
                    if (parts.length === 2) {
                        return parts.pop();
                    }
                }

                return usersTests;
            }
        }
    }
</script>

<style scoped>
    a {
        color: black;
    }

    /* #mainDiv {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
    } */

    #ongoingQuizzes,
    #previousQuizzes,
    #nextQuizzes {
        display: none;
    }

    .listTests {
        grid-column: 2/3;
        margin: 0 auto;
        text-align: left;
        /* display: grid; */
        margin: 50px;
        /* grid-template-columns: 1fr; */
        background-color: #a4c2fa;
    }

    .manyTests {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 25px;
        transition: transform 0.3s;
        align-content: center;
    }


    .manyTests:hover {
        background-color: #6495ed;
        color: white;
        -ms-transform: scale(1.02);
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
    }

    .manyTests:hover a {
        color: white;
    }

    .manyTests:nth-child(odd) {
        background-color: white;
    }

    .manyTests:nth-child(odd):hover {
        background-color: #6495ed;
    }

    .manyTests1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 25px;
        transition: transform 0.3s;
        align-content: center;
    }

    .manyTests1:hover {
        background-color: #6495ed;
        color: white;
        -ms-transform: scale(1.02);
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
    }

    .manyTests1:hover a {
        color: white;
    }

    .manyTests1:nth-child(odd) {
        background-color: white;
    }

    .manyTests1:nth-child(odd):hover {
        background-color: #6495ed;
    }

    .testDate {
        grid-column: 2;
        text-align: right;
    }

    .result {
        grid-column: 3;
        text-align: right;
    }

    #joinButtons {
        grid-column: 4;
        margin: 0 auto;
        padding: 10px;
        margin-left: 150px;
        box-shadow: 4px 4px 0px 0px rgb(0, 0, 0, 0.8);
        width: 100px;
        background-color: white;
        outline: none;
        pointer-events: visible;
    }

    #joinButtons:hover {
        cursor: pointer;
    }

    @media (max-width: 750px) {
        .listTests {
            margin: 50px auto;
        }
    }

    @media (max-width: 600px) {}
</style>