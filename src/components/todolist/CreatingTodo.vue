<template>
    <div class="apptodo" @keyup.enter="creatingTodo">
        <div class="header">
            <label>Quoi de neuf ?</label>
            <input type="text" v-model="name" @input="saveName" placeholder="votre nom">
        </div>
        <div class="creating">
            <h2>Creer une tâche</h2>
            <span>Incrivez vos tâches à faire:</span>
            <input type="text" v-model="inputTodo" placeholder="Tâche">
            <div class="categorie">
                <span>Selectionnez une categorie</span>
                <div class="select">
                    <div class="selected">
                        <input type="radio" @input="testB" checked  name="select" id="business" value="business">
                        <label for="business">Business</label>
                    </div>
                    <div class="selected">
                        <input type="radio" @input="testP" name="select" id="personnel" value="personel">
                        <label for="personnel">personnel</label>
                    </div>
                </div>
            </div>
            <div>
                <button @click="creatingTodo" >Ajouter une tâche</button>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type typeTodo from '../types/index'

const name = ref('');
const bool = ref<boolean>(true);

const saveName = () => {
const savefirsName = ref();
clearInterval(savefirsName.value)
savefirsName.value = localStorage.setItem('savefirstnames',JSON.stringify(name.value))
}
const testP = () => {
    bool.value = false;
    console.log(bool.value)
}

const testB = () => {
    bool.value = true;
    console.log(bool.value)
}

testB();

const inputTodo = ref('');
const emit =defineEmits<{
(e:'add-todo',value:typeTodo):void
(e:'input-error'):void
}>();

const sessionData = () => {
const localData = localStorage.getItem('savefirstnames')
if(localData){
    name.value = JSON.parse(localData);
}
}

const creatingTodo = () => {
if(inputTodo.value !== ''){
    emit('add-todo',{
        id:Date.now(),
        todo:inputTodo.value,
        typeSelection:bool.value
    });

    inputTodo.value = '';
}else{
    emit('input-error')
}
}

sessionData();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.apptodo{
    margin-left: 40px;
}

button{
    background-color: orange;
    color: #fff;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 10px 15px;
    border-radius: 7px;
    width: 500px;
    margin-top: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}

.header{
    display: flex;
    margin-top: 20px;
    align-items: start;
}

.header input{
    border: none;
    margin-left: 6px;
    outline: none;
    height: 50px;
    font-size: 30px;
    padding: 0px 0px 5px 0px;

}

.header input::placeholder{
    font-size: 25px;
}

.header label{
    font-size: 35px;
}


.creating{
    display: flex;
    flex-direction: column;
}

.creating h2{
    font-family: 'Poppins';
    color: rgb(185, 180, 180);
}

.creating span{
    font-size: 23px;
}

input[type=radio]{

  border-radius: 100%;
  width: 18px;
  height: 18px;

}


.creating input[type=text]{
    margin-bottom: 20px;
    height: 40px;
    border-radius: 5px;
    width: 500px;
    background-color: #fff;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 10px;
    margin-top: 10px;

}
.categorie{
    display: flex;
    flex-direction: column;
    
}

.creating .categorie .select div:first-of-type input[type=radio]{
    border: 2px solid orange;
    box-shadow: 0px 0px 8px 1px orange;
    border-radius: 50%;
}
.creating .categorie .select div:last-of-type input[type=radio]{
    border: 2px solid red;
    box-shadow: 0px 0px 5px 0.25px red
}


.creating .categorie .selected label{
    display: flex;
    height: 100px;
    background-color: #fff;
    width: 150px;
    border-radius: 5px;
    padding: 50px 40px;
    font-weight: 150;
}

.selected{
    position: relative;
}


.creating .categorie .selected input{
    position: absolute;
    top: 15px;
    left: 70px;
}

.select{
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
</style>