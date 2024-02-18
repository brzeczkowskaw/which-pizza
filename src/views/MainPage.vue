<script setup lang="ts">
import { ref } from 'vue'
import PizzaInput from '../components/PizzaInput.vue'
import CompareButton from '../components/CompareButton.vue'
import { usePizzaStore } from  '../stores/pizza'

const pizzaStore = usePizzaStore();

</script>

<template>
    <v-container>
        <div class="ma-5 text-center text-primary">
            <h1>Slice it right!</h1>
            <h3>The ultimate pizza price comparator</h3>
        </div>
        <v-row class="mt-1">
            <v-col v-for="(pizza, index) in pizzaStore.pizzas" :key="index" class="d-flex justify-space-around">
                <PizzaInput :pizzaData="pizza" :pizza-index="index"></PizzaInput>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col class="px-5 mx-5">
                <CompareButton />
            </v-col>
        </v-row>
    </v-container>
</template>

<style style="scss" scoped>
</style>