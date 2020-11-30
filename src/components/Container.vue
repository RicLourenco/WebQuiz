<template>
    <div id="bodyContainer">
        <div id="sideBarContainer">
            <nav id="mySideBar" class="open">
                <span id="closeButton" v-on:click="closeSideBar()">&times;</span>
                <span id="openButton" v-on:click="openSideBar()">&#9776;</span>
                <a class="sideButtons" @click="$router.push('/ongoingquizzes')">Testes a decorrer</a>
                <a class="sideButtons" @click="$router.push('/previousquizzes')">Testes realizados</a>
                <a class="sideButtons" @click="$router.push('/nextquizzes')">Próximos testes</a>
                <a class="sideButtons">Opção 4</a>
                <a class="sideButtons">Opção 5</a>
            </nav>
        </div>

        <div id="navBarContainer">
            <nav id="navBar" class="retracted">
                <a class="navBarButtons">Opção 1</a>
                <a class="navBarButtons">Opção 2</a>
                <a class="navBarButtons">Opção 3</a>
                <a class="navBarButtons">Opção 4</a>
            </nav>
        </div>
        <slot>

        </slot>
    </div>
</template>

<script>
    import QuizDatabase from '../plugins/QuizDatabase';

    export default {
        name: 'Container',
        components: QuizDatabase,
        created() {
            let decodedCookie = decodeURIComponent(document.cookie);

            if (!decodedCookie) {
                this.$router.push('/');
            }
        },
        mounted() {
            window.addEventListener("resize", this.resizeBarFunction);
        },
        ChangeHightlightedButton: function (viewName) {
            if (viewName === 'OngoingQuizzes') {
                this.SetSideBarButtonColor(0);
            } else if (viewName === 'PreviousQuizzes') {
                this.SetSideBarButtonColor(1);
            } else if (viewName === 'NextQuizzes') {
                this.SetSideBarButtonColor(2);
            }
        },
        SetSideBarButtonColor: function (elementIndex) {
            document.getElementsByClassName("sideButtons")[elementIndex].style.backgroundColor = 'cornflowerblue';
            document.getElementsByClassName("sideButtons")[elementIndex].style.color = 'white';
        },
        methods: {
            openSideBar: function () {
                let sideBarClasses = document.getElementById("mySideBar").classList;
                let navbarClasses = document.getElementById("navBar").classList;

                sideBarClasses.remove("closed");
                sideBarClasses.add("open");
                navbarClasses.remove("expanded");
                navbarClasses.add("retracted");
            },

            closeSideBar: function () {
                let sideBarClasses = document.getElementById("mySideBar").classList;
                let navbarClasses = document.getElementById("navBar").classList;

                sideBarClasses.remove("open");
                sideBarClasses.add("closed");
                navbarClasses.remove("retracted");
                navbarClasses.add("expanded");
            },

            resizeBarFunction: function () {
                let sideBarClasses = document.getElementById("mySideBar").classList;

                if (sideBarClasses.contains("open") && window.innerWidth < 600) {
                    this.closeSideBar();
                }

                if (window.innerWidth > 600 && sideBarClasses.contains("closed")) {
                    this.openSideBar();
                }
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato|PT+Sans|Merriweather:400,400i,700,700i');

    * {
        margin: 0%;
        padding: 0%;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'PT Sans', sans-serif;
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }

    /*---------------------------------------------------------Body----------------------------------------*/

    body {
        color: #4a4a4a;
        background-color: #f9f9f9;
        height: 100%;
        font-size: 1.7rem;
    }

    #bodyContainer {
        height: calc(100% - 116px);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 3fr;
        background-color: #F6F3F3;
        position: relative;
    }

    /*---------------------------------------------------------Body----------------------------------------*/


    /*---------------------------------------------------------LoginBar----------------------------------------*/


    #loginBar {
        display: flex;
        background-color: #f9f9f9;
        height: 85px;
        width: 100%;
        justify-content: space-between
    }

    #loginButton {
        color: inherit;
        text-decoration: none;
        padding: 2em;
        font-family: Arial, Helvetica, sans-serif;
        color: cornflowerblue;

    }


    #loginButton:hover {
        transition: .3s;
        background-color: cornflowerblue;
        color: white;
    }


    #logo img {
        width: 150px;
        margin-left: 25px;
    }


    hr {
        margin: 15px 0;
        height: 1px;
        border: 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }


    /*---------------------------------------------------------LoginBar----------------------------------------*/


    /*---------------------------------------------------------LoginPage----------------------------------------*/


    #loginPage {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0%;
        background-color: whitesmoke;
    }

    #loginContainer {
        width: 500px;
        height: 65%;
        margin: 50px auto;
        padding: 0 35px;
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr;
        background: #c4c2c2;
        border: 1px solid black;
        min-height: 450px;
    }

    #loginTitle {
        text-align: center;
        margin: auto;
        color: rgb(60, 60, 88);
        grid-column: 1;
        grid-row: 1;
    }

    #loginFooter {
        text-align: center;
    }

    .loginPageButtons {
        width: 100%;
        height: 50px;
    }

    #naoConheceWQ {
        text-align: center;
    }

    #loginPageToRegisterPage {
        text-align: center;
        background-color: darkgray;
    }

    #loginPageToCurrentQuizzesPage {
        margin: 25px auto;
        background-color: cornflowerblue;
        color: white;
    }

    .inputLogin {
        line-height: 3;
        width: 100%;
        padding-left: 15px;
        border: 1px solid black;
    }

    footer {
        color: cornflowerblue;
        background-color: #e9e9e9;
        height: calc(35% - 100px);
    }

    /*---------------------------------------------------------LoginPage----------------------------------------*/


    /*---------------------------------------------------------NavBar----------------------------------------*/


    #navBar {
        color: cornflowerblue;
        display: flex;
        justify-content: flex-end;
        background-color: #c4c2c2;
    }

    #navBarContainer {
        /* grid-column: 2; */
        grid-column: 1/3;
    }

    .navBarButtons {
        color: inherit;
        text-decoration: none;
        padding: 2em;
        font-family: Arial, Helvetica, sans-serif;
        width: 150px;
        text-align: center;
    }

    .navBarButtons:hover {
        transition: .3s;
        background-color: cornflowerblue;
        color: white;
        cursor: pointer;
    }

    /*---------------------------------------------------------NavBar----------------------------------------*/


    /*---------------------------------------------------------SideBar----------------------------------------*/
    #sideBarContainer {
        transition: all .5s;
        -webkit-transition: all .5s;
        /* position: absolute; */
        left: 0;
        bottom: 0;
        height: 100%;
        grid-row: 2;
    }

    #mySideBar a:hover {
        transition: .3s;
        background-color: cornflowerblue;
        color: white;
        cursor: pointer;
    }

    #mySideBar.closed a {
        display: none;
    }

    #mySideBar.closed #closeButton {
        display: none;
    }

    #mySideBar.open #openButton {
        display: none;
    }

    #mySideBar.closed {
        width: 90px;
    }

    #mySideBar {
        background-color: cornflowerblue;
        height: 100%;
        list-style-type: none;
        text-align: center;
        padding: 25px;
        text-decoration: none;
        padding-top: 50px;
    }

    #mySideBar a {
        color: black;
        text-decoration: none;
        display: block;
        margin-top: 20px;
        height: 50px;
        box-shadow: 5px 6px 7px 2px black;
        background-color: whitesmoke;
    }

    /* #mySideBar a + a{
        margin-top: 50px;
    } */

    .sideButtons {
        padding: 15px;
    }

    #closeButton {
        margin: 0 0 0 85%;
        cursor: pointer;
        font-size: 3.7rem;
    }

    #mySideBar.closed span {
        margin: auto;
    }


    #openButton:hover {
        transition: all .5s;
        color: burlywood;
        cursor: pointer;
    }

    #closeButton:hover {
        transition: all .5s;
        color: burlywood;
        cursor: pointer;
    }

    #slotQuiz {
        grid-column: 2/3;
    }

    /*---------------------------------------------------------NavBar----------------------------------------*/


    /*---------------------------------------------------------MEDIAQUERIES----------------------------------------*/

    @media (max-width: 600px) {
        #mySideBar {
            background-color: cornflowerblue;
            height: 100%;
            list-style-type: none;
            text-align: center;
            padding: 25px;
            text-decoration: none;
            padding-top: 50px;
        }

        #sideBarContainer {
            grid-row: 1/3;
        }

        #navBar {
            flex-direction: column;
            /* margin-left: 90px; */

        }

        #navBarContainer {
            grid-column: 2;
        }

        .navBarButtons {
            padding: 2rem;
            width: 100%;
            text-align: center
        }

        nav {
            padding: 0;
        }

        #mySideBar>a {
            text-align: center;
            padding: 10px;
        }

        #mySideBar>a:last-child {
            /* selecciona o último elemento se for uma âncora */
            margin-right: unset;
            border-bottom: none;
        }

        #loginContainer {
            width: 100%;
        }
    }
</style>