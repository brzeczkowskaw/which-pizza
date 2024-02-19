<script setup lang="ts">
import PizzaInput from '../components/PizzaInput.vue'
import CompareButton from '../components/CompareButton.vue'
import UnitsChoice from '../components/UnitsChoice.vue'
import { usePizzaStore } from  '../stores/pizza'

const pizzaStore = usePizzaStore();

pizzaStore.getCurrencies();

</script>

<template>
    <div class="pb-3">
        <div class="text-center text-white header-area">
            <div>
                <h1 class="pt-4">Slice it right!</h1>
                <h3>The ultimate pizza price comparator</h3>
            </div>
            <div class="mt-4 text-center">
                <UnitsChoice />
            </div>
        </div>
        <v-row class="d-flex justify-center mt-1">
            <div v-for="(pizza, index) in pizzaStore.pizzas" :key="index">
                <PizzaInput :pizzaData="pizza" :pizza-index="index"></PizzaInput>
            </div>
        </v-row>
        <v-row class="text-center">
            <v-col class="px-5 mx-5">
                <CompareButton />
            </v-col>
        </v-row>
    </div>
</template>

<style style="scss" scoped>
.header-area {
    justify-content: center;
    height: 35vh;
    --size: 25px;
    --p: 17.5px;
    --R: 30.5px;
    -webkit-mask:
        radial-gradient(var(--R) at 50% calc(100% - (var(--size) + var(--p))),blue 99%,#0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
        radial-gradient(var(--R) at 50% calc(100% + var(--p)),#0000 99%,red 101%) 50% calc(100% - var(--size))/calc(4*var(--size)) 100% repeat-x;
    background: rgb(var(--v-theme-primary));  
    border: none;
}

@media(max-width: 400px) {
  .header-area {
    height: 33vh;
  }
}
</style>