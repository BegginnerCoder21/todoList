<template>
    <div>
        <button @click="$emit('add-todo')">Ajouter une tâche</button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

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
    margin-left: 40px;
    cursor: pointer;
}

</style>