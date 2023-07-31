<template>
    <div class="app">
        <div class="styleError" v-if="errorShow">
            <h2>le champ ne peut pas être vide</h2>
        </div>
        <CreatingTodo :todoList="todoList" @add-todo="addTodo" @input-error="inputError" />
        <UsersList />
    </div>
</template>

<script setup lang="ts">
import inputTodo from '../../composables/index';
import CreatingTodo from '../todolist/CreatingTodo.vue';
import UsersList from '../todolist/UsersList.vue';

const {
    inputError,
    addTodo,
    todoList,
    errorShow
} = inputTodo()



</script>

<style scoped>

.app{
    position: relative;
}

.styleError{
    background-color: red;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 7px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

h2{
    background-color: red;
    font-weight: 600;

}

</style>