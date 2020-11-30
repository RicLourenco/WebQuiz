<template>
    <div id="onGoingID">
        <Header />
        <Container>
            <QuizzesList />
        </Container>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Container from '../components/Container';
    import QuizzesList from '../components/QuizzesList';

    export default {
        name: 'OngoingQuizzes',
        components: {
            Header,
            Container,
            QuizzesList
        },
        mounted() {
            Container.ChangeHightlightedButton('PreviousQuizzes');
            QuizzesList.changeQuizView("previousQuizzes");
        }
    }
</script>

<style scoped>
    #onGoingID {
        height: 100%;
    }
</style>