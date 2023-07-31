<template>
    <div class="apptodo">
        <div class="header">
            <h1>Quoi de neuf ?</h1>
            <input type="text" placeholder="votre nom">
        </div>
        <div class="creating">
            <h2>Creer une tâche</h2>
            <span>Incrivez vos tâches à faire:</span>
            <input type="text" placeholder="Tâche">
            <div class="categorie">
                <span>Selectionnez une categorie</span>
                <div class="select">
                    <div class="selected">
                        <input type="radio" name="select" id="business" value="business">
                        <label for="business">Business</label>
                    </div>
                    <div class="selected">
                        <input type="radio" name="select" id="personnel" value="personal">
                        <label for="personnel">personnel</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.apptodo{
    margin-left: 40px;
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
    font-size: 20px;

}

.header input::placeholder{
    font-size: 25px;
    margin-left: 10px;
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

.creating input[type=text]{
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