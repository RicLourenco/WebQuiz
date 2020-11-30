<template>
    <div>
        <nav id="loginBar">
            <div id="logo">
                <img src="../assets/logo.png" />
            </div>
            <a id="loginButton" v-on:click="Logout()"><img id="userImg" src="../assets/user.png"> {{userName}}</a>
        </nav>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                userName: this.getCookie("user")
            }
        },
        methods: {
            Logout: function () {
                document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                this.$router.push('/');
            },
            getCookie: function (name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) {
                    return parts.pop();
                }
            }
        }
    }
</script>

<style scoped>
    #loginBar {
        display: flex;
        background-color: #f9f9f9;
        height: 85px;
        width: 100%;
        justify-content: space-between
    }

    #userImg {
        vertical-align: bottom;
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
        cursor: pointer;
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
</style>