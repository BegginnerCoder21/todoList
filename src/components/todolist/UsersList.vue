<template>
    <label>Liste des tâches</label>
    <div class="list" v-for="todo in props.todoList">
        <input type="radio" :class="todo.typeSelection ? 'styleB' : 'styleP'">
        <input v-model="todo.todo" type="text" @input="$emit('update-todo-list',todo)" >
        <button @click="$emit('remove-todo-list',todo)">Supprimer</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type typeTodo from '../types';

const props = defineProps<{
    todoList:typeTodo[]
}>();

</script>

<style scoped>

 .styleB{
    border: 2px solid orange;
    box-shadow: 0px 0px 8px 1px orange;
    border-radius: 50%;
}
.styleP{
    border: 2px solid red;
    box-shadow: 0px 0px 5px 0.25px red
}

.list input:checked{
    text-decoration-style: line-through;
}

button{
    width: 100px;
    height: 40px;
    border: none;
    outline: none;
    background-color: red;
    color: #fff;
    font-size: 17px;
    border-radius: 0px 7px 7px 0px;
    cursor: pointer;
}

.list{
    margin-left: 40px;
    margin-top: 20px;
    display: flex;
    position: relative;
   
}

.list input[type=text]{
    width: 500px;
    height: 40px;
    border-radius: 7px 0px 0px 7px;
    padding: 10px;
    font-size: 20px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 0 35px;
}

.list input[type=radio]{
    position: absolute;
    top: 14px;
    left: 10px;
}

label{
    font-size: 25px;
    margin-left: 40px;
}

</style>