import {ref} from "vue"
import type typeTodo from '../components/types/index'

export default function inputTodo() {
    const errorShow = ref(false)

const todoList = ref<typeTodo[]>([]);

const addTodo = (todos:typeTodo) => {
    todoList.value.unshift(todos);
    let saveList = localStorage.setItem('saveList',JSON.stringify(todoList.value))
}

const updateTodoList = (update:typeTodo) => {
    todoList.value.forEach((upd) => {
        if(update.id === upd.id){
            upd.todo = update.todo;
            let saveList = localStorage.setItem('saveList',JSON.stringify(todoList.value))
        }
    });
}

const removeTodoList = (removeTodo:typeTodo) => {
    todoList.value = todoList.value.filter((remove) => removeTodo.id !== remove.id)
    let saveList = localStorage.setItem('saveList',JSON.stringify(todoList.value))
}
const saveListTodo = () => {
    let list = localStorage.getItem('saveList');
    if(list){
        todoList.value = JSON.parse(list);
    }
}

const inputError = () => {
    errorShow.value = true
    setTimeout(() => {
        errorShow.value = false;
    },2000)
}


    return {
        inputError,
        addTodo,
        todoList,
        errorShow,
        saveListTodo,
        updateTodoList,
        removeTodoList
    }
}