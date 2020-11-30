<template>
    <div>
        <div id="form">
            <div id="formContainer">
                <div id="title">
                    <p>
                        Criar conta no WebQuiz
                    </p>
                </div>
                <div class="formDiv" id="lblFirstName">
                    <div>
                        <label for="fName">Primeiro nome</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="fname" class="inputButtons" type="text" name="fName" />
                    </div>
                </div>

                <div class="formDiv" id="lblLastName">
                    <div>
                        <label for="lName">Ultimo nome</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="lname" class="inputButtons" type="text" name="lName" />
                    </div>
                </div>

                <div class="formDiv" id="lblEmail">
                    <div>
                        <label for="mail">Email</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="email" class="inputButtons" type="text" name="mail" />
                    </div>
                </div>

                <div class="formDiv" id="lblPassword">
                    <div>
                        <label for="pw">Palavra-passe</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="pw" class="inputButtons" type="password" name="pw" />
                    </div>
                </div>

                <div class="formDiv" id="lblRepeatPassword">
                    <div>
                        <label for="repeatPw">Palavra-passe outra vez</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="confirmpw" class="inputButtons" type="password" name="repeatPw" />
                    </div>
                </div>

                <hr id="hrDiv">

                <div class="formDiv" id="lblPhoneNumber">
                    <div>
                        <label for="phoneN">Número de telefone</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="phone" class="inputButtons" type="text" name="phoneN" />
                    </div>
                </div>

                <div class="formDiv" id="lblCountry">
                    <div>
                        <label for="countries">País</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <select v-model="country" type="text" name="countries" class="inputButtons">
                            <option value="Portugal">Portugal</option>
                            <option value="Espanha">Espanha</option>
                            <option value="França">Françã</option>
                            <option value="Itália">Itália</option>
                        </select>
                    </div>
                </div>

                <div class="formDiv" id="lblAddress">
                    <div>
                        <label for="address">Endereço</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="address" class="inputButtons" type="text" name="address" />
                    </div>
                </div>

                <div class="formDiv" id="lblDateOfBirth">
                    <div>
                        <label for="birth">Data de nascimento</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="birthdate" class="inputButtons" type="date" name="birth" />
                    </div>
                </div>

                <div class="formDiv" id="lblVatNumber">
                    <div>
                        <label for="vat">Número fiscal / NIF</label><label class="verification"> *</label>
                    </div>
                    <div>
                        <input v-model="vat" class="inputButtons" type="text" name="vat" />
                    </div>
                </div>

                <div id="createAccount" class="formDiv">
                    <input v-on:click="SaveUser()" id="inputCreate" type="submit" value="Criar conta" />
                    <label id="registerLabel">This label is hidden</label>
                </div>

                <div id="jaTemConta" class="formDiv">
                    <p>Já tem conta?</p>
                </div>

                <div id="joinAccount" class="formDiv">
                    <input id="inputJoin" type="submit" value="Entrar" @click="$router.push('/')" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>


<script>
    import Footer from '../components/Footer';

    export default {
        name: 'Register',
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
            CheckFields: function () {
                this.ShowHideLabel(0, this.fname, /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}|/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}|/<>#“.,])\S+(?: \S+){0,5}$/);
                this.ShowHideLabel(1, this.lname, /^(?=(?:[^A-Za-z]*[A-Za-z]){3})(?![^\d~`?!^*¨ˆ;@=$%{}|<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}|<>#“.,])\S+(?: \S+){0,5}$/);
                this.ShowHideLabel(2, this.email, /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
                this.ShowHideLabel(3, this.pw, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
                this.CheckSamePassword(4, this.pw, this.confirmpw)
                this.ShowHideLabel(5, this.phone, /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/);
                this.ShowHideLabel(6, this.country);
                this.ShowHideLabel(7, this.address);
                this.ShowHideLabel(8, this.birthdate);
                this.ShowHideLabel(9, this.vat);
            },


            ShowHideLabel: function (i, field, regexExp = new RegExp()) {
                if (i !== 9) {
                    if (!field || !regexExp.test(field)) {
                        document.getElementsByClassName("verification")[i].style.visibility = 'visible';
                    } else {
                        document.getElementsByClassName("verification")[i].style.visibility = 'hidden';
                    }
                } else {
                    if (!field || !this.validateNIF(field)) {
                        document.getElementsByClassName("verification")[i].style.visibility = 'visible';
                    } else {
                        document.getElementsByClassName("verification")[i].style.visibility = 'hidden';
                    }
                }

            },

            CheckSamePassword: function (i, pw, confirmpw) {
                if (confirmpw !== pw) {
                    document.getElementsByClassName("verification")[i].style.visibility = 'visible';
                } else {
                    document.getElementsByClassName("verification")[i].style.visibility = 'hidden';
                }
            },

            validateNIF: function (value) {
                const nif = typeof value === 'string' ? value : value.toString();
                const validationSets = {
                    one: ['1', '2', '3', '5', '6', '8'],
                    two: ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99']
                };

                if (nif.length !== 9) {
                    return false;
                }

                if (!validationSets.one.includes(nif.substr(0, 1)) && !validationSets.two.includes(nif.substr(0, 2))) {
                    return false;
                }

                const total = nif[0] * 9 + nif[1] * 8 + nif[2] * 7 + nif[3] * 6 + nif[4] * 5 + nif[5] * 4 + nif[6] * 3 + nif[7] * 2;
                const modulo11 = (Number(total) % 11);

                const checkDigit = modulo11 < 2 ? 0 : 11 - modulo11;

                return checkDigit === Number(nif[8]);
            },

            CheckViability: function () {
                for (let i = 0; i < document.getElementsByClassName("verification").length; i++) {

                    let elem = document.getElementsByClassName("verification")[i];

                    if (window.getComputedStyle(elem).visibility === "visible") {
                        return false;
                    }
                }

                let users = JSON.parse(localStorage.getItem("users") || "[]");

                for (let j = 0; j < users.length; j++) {
                    if (this.email === users[j].email) {
                        return "emailConflict";
                    }
                }

                return true;
            },

            SaveUser: function () {

                this.CheckFields();

                let confirmation = this.CheckViability();

                if (confirmation) {

                    if (!this.ResultLabelSet(confirmation)) {
                        return;
                    }

                    let user = {
                        fname: this.fname,
                        lname: this.lname,
                        email: this.email,
                        pw: this.pw,
                        phone: this.phone,
                        country: this.country,
                        address: this.address,
                        birthdate: this.birthdate,
                        vat: this.vat,
                        tests: []
                    }

                    let users = JSON.parse(localStorage.getItem("users") || "[]");

                    users.push(user);

                    localStorage.setItem("users", JSON.stringify(users));

                    let label = document.getElementById("registerLabel");

                    label.style.visibility = "visible";
                    label.textContent = "Utilizador registado com sucesso!";
                    label.style.color = "green";

                    return;
                }

                document.getElementById("registerLabel").style.visibility = "hidden";
            },

            ResultLabelSet: function (result) {
                let label = document.getElementById("registerLabel");
                if (result === "emailConflict") {
                    label.style.visibility = "visible";
                    label.textContent = "Já existe um utilizador com este e-mail!";
                    label.style.color = "red";
                    return false;
                }

                return true;
            }
        }
    }
</script>

<style scoped>
    #form {
        width: 100%;
        height: 90%;
        position: relative;
    }

    #formContainer {
        background-color: #c4c2c2;
        padding: 1em;
        width: 550px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        margin: 25px auto;
        border: 1px solid;
    }

    .formDiv {
        padding: 15px;
    }

    input[type=text]:focus {
        outline-color: cornflowerblue;
    }

    #hrDiv {
        margin: 15px 0;
        height: 1px;
        border: 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        grid-column: 1/3;
        grid-row: 5;
        align-self: center;
    }

    #title {
        justify-self: left;
        grid-column: 1/3;
        grid-row: 1;
        padding: 10px;
    }


    p {
        text-align: center;
        grid-column: 1/3;
    }

    .inputButtons {
        width: 100%;
    }

    #lblFirstName {
        grid-column: 1;
        grid-row: 2;
    }


    #lblLastName {
        grid-column: 2;
        grid-row: 2;
    }


    #lblEmail {
        grid-column: 1/3;
        grid-row: 3;
    }

    #lblPassword {
        grid-column: 1;
        grid-row: 4;
    }

    #lblRepeatPassword {
        grid-column: 2;
        grid-row: 4;
    }

    #lblPhoneNumber {
        grid-column: 1;
        grid-row: 6;
    }

    #lblCountry {
        grid-column: 2;
        grid-row: 6;
    }

    #lblAddress {
        grid-column: 1/3;
        grid-row: 7;
    }

    #lblDateOfBirth {
        grid-column: 1;
        grid-row: 8;
    }

    #lblVatNumber {
        grid-column: 2;
        grid-row: 8;
    }

    #createAccount {
        grid-row: 9;
        grid-column: 1/3;
    }


    #jaTemConta {
        grid-row: 10;
        grid-column: 1/3;
    }

    #joinAccount {
        grid-row: 11;
        grid-column: 1/3;
    }

    #jaTemConta {
        width: 100%;
    }

    #inputCreate {
        width: 100%;
        padding: 5px;
        background-color: cornflowerblue;
        color: white;
        padding: 1em;
    }

    #inputCreate:hover {
        cursor: pointer;
    }

    #inputJoin {
        width: 100%;
        padding: 5px;
        padding: 1em;
    }

    #inputJoin:hover {
        cursor: pointer;
    }

    .verification {
        visibility: hidden;
        color: red;
    }

    #registerLabel {
        visibility: hidden;
    }

    #createAccount {
        text-align: center;
    }

    @media (max-width: 550px) {
        #formContainer {
            width: 100%;
        }
    }
</style>