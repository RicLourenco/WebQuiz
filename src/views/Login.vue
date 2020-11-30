<template>
    <div id="loginPage" class="page loginPage">
        <div id="loginContainer">
            <div id="loginTitle">
                BEM VINDO AO WEBQUIZ
            </div>

            <div id="inputUserName">
                <input class="inputLogin" v-model="username" type="text" name="username" id="username"
                    placeholder="Utilizador..."></div>
            <div>
                <input class="inputLogin" v-model="pw" type="password" id="loginPassword"
                    placeholder="Palavra-passe..."></div>
            <div class="actions">
                <input class="loginPageButtons" v-on:click="Login()" type="submit" name="login" value="Entrar"
                    id="loginPageToCurrentQuizzesPage">
                <label id="loginLabel">This label is hidden</label>
            </div>

            <p id="naoConheceWQ">Não conhece o WebQuiz?</p>

            <button class="loginPageButtons" id="loginPageToRegisterPage" @click="$router.push('/register')">Criar
                Conta</button>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Footer from '../components/Footer'

    export default {
        name: "Login",
        components: {
            Footer
        },
        created() {
            let decodedCookie = decodeURIComponent(document.cookie);

            if (decodedCookie) {
                this.$router.push('/OngoingQuizzes');
            }
        },
        methods: {
            Login: function () {
                let users = JSON.parse(localStorage.getItem("users") || "[]");

                let label = document.getElementById("loginLabel");

                for (let i = 0; i < users.length; i++) {
                    if (this.username === users[i].email) {
                        if (this.pw === users[i].pw) {
                            document.cookie = `user=${users[i].email};max-age=${60*60*24*365*100}`;
                            this.$router.push('/ongoingquizzes');
                        }

                        label.style.visibility = "visible";
                        label.textContent = "Palavra-passe incorreta!";
                        label.style.color = "red";
                        document.getElementById("loginPassword").value = "";
                        return;
                    }
                }

                label.style.visibility = "visible";
                label.textContent = "Não existe nenhum utilizador com este e-mail!";
                label.style.color = "red";
                document.getElementById("loginPassword").value = "";
            }
        }
    }
</script>

<style scoped>
    #loginPage {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0%;
        background-color: whitesmoke;
    }

    #loginContainer {
        width: 500px;
        height: 75%;
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

    #loginPageToRegisterPage:hover {
        cursor: pointer;
    }

    #loginPageToCurrentQuizzesPage {
        margin: 25px auto;
        background-color: cornflowerblue;
        color: white;
    }

    #loginPageToCurrentQuizzesPage:hover {
        cursor: pointer;
    }

    .inputLogin {
        line-height: 3;
        width: 100%;
        padding-left: 15px;
        border: 1px solid black;
    }

    #loginLabel {
        visibility: hidden;
    }

    .actions {
        text-align: center;
    }
</style>