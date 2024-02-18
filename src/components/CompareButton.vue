<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePizzaStore } from  '../stores/pizza'
import { countCircleArea, countCostPerSquareCm } from '../helpers/counting'

const pizzaStore = usePizzaStore();

const firstPizzaDiameter = computed(() => pizzaStore.pizzas[0].diameter)
const firstPizzaAmount = computed(() => pizzaStore.pizzas[0].amount)
const firstPizzaPrice = computed(() => pizzaStore.pizzas[0].pricePerPizza)

const secondPizzaDiameter = computed(() => pizzaStore.pizzas[1].diameter) 
const secondPizzaAmount = computed(() => pizzaStore.pizzas[1].amount)
const secondPizzaPrice = computed(() => pizzaStore.pizzas[1].pricePerPizza);

function getCheaperPizzaIndex() {
  const pizzaOnePerCentimeterPrice = countCostPerSquareCm(pizzaStore.pizzas[0].totalArea, pizzaStore.pizzas[0].totalPrice);
  const pizzaTwoPerCentimeterPrice = countCostPerSquareCm(pizzaStore.pizzas[1].totalArea, pizzaStore.pizzas[1].totalPrice);
  if (pizzaOnePerCentimeterPrice > pizzaTwoPerCentimeterPrice) return 1;
  if (pizzaOnePerCentimeterPrice < pizzaTwoPerCentimeterPrice) return 0;
  // the same value
  if (pizzaOnePerCentimeterPrice === pizzaTwoPerCentimeterPrice) return 3;
  return null;
}

function comparePizzas() {
  if (pizzaStore.isResultShown) {
    pizzaStore.clearPizzasData();
    return;
  }
  pizzaStore.isComparingPizzas = true;

  // first pizza
  pizzaStore.pizzas[0].totalArea = countCircleArea(firstPizzaDiameter.value) * firstPizzaAmount.value;
  pizzaStore.pizzas[0].totalPrice = firstPizzaPrice.value * firstPizzaAmount.value;
  pizzaStore.pizzas[0].pricePerCentimeter = countCostPerSquareCm(pizzaStore.pizzas[0].totalArea, pizzaStore.pizzas[0].totalPrice)

  // second pizza
  pizzaStore.pizzas[1].totalArea = countCircleArea(secondPizzaDiameter.value) * secondPizzaAmount.value;
  pizzaStore.pizzas[1].totalPrice = secondPizzaPrice.value * secondPizzaAmount.value;
  pizzaStore.pizzas[1].pricePerCentimeter = countCostPerSquareCm(pizzaStore.pizzas[1].totalArea, pizzaStore.pizzas[1].totalPrice)
  setTimeout(() => {
    pizzaStore.isComparingPizzas = false;
    pizzaStore.isResultShown = true;
    pizzaStore.cheaperPizzaIndex = getCheaperPizzaIndex();
  }, 1000)
}

</script>

<template>
    <v-container class="px-4">
        <v-btn
          color="primary"
          style="width: -webkit-fill-available"
          class="px-2 mx-4"
          variant="elevated"
          :elevation="10"
          :loading="pizzaStore.isComparingPizzas"
          @click="comparePizzas"
        >
          {{ pizzaStore.isResultShown ? 'compare another' : 'compare!' }}
        </v-btn>
    </v-container>
</template>

<style style="scss" scoped>
</style>