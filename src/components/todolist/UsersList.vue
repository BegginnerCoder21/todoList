<template>
    <div class="list">
        <input type="radio">
        <label>Liste des tâches</label>
        <input v-model="value" type="text">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const value = ref('je suis teguera aboubacar');

</script>

<style scoped>

.list{
    margin-left: 40px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
   
}

.list input[type=text]{
    width: 500px;
    height: 40px;
    border-radius: 7px;
    padding: 10px;
    font-size: 20px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 0 35px;
    margin-top: 10px;
}

.list input[type=radio]{
    position: absolute;
    top: 52px;
    left: 10px;
}
label{
    font-size: 25px;
}

</style>