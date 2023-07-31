import CreatingTodo from '../components/todolist/CreatingTodo.vue';
import UsersList from '../components/todolist/UsersList.vue';
import {ref} from "vue"
import type typeTodo from '../components/types/index'

export default function inputTodo() {
    const errorShow = ref(false)

const todoList = ref<typeTodo[]>([
    {   id: Date.now(),
        todo:'apprendre a coder le langage python'
    },
    {   id:Date.now(),
        todo:'analyse le marché du forex'
    },
]);

const addTodo = (todos:typeTodo) => {
    todoList.value.unshift(todos)
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
        errorShow

    }
}