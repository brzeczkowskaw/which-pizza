import { defineStore } from 'pinia';
import { PizzaState } from '../types'

export const usePizzaStore = defineStore("pizzaStore", {
  state: (): PizzaState => ({
    pizzas: [
      {
        diameter: 30,
        amount: 1,
        pricePerPizza: 10,
        pricePerCentimeter: 0,
      },
      {
        diameter: 50,
        amount: 1,
        pricePerPizza: 10,
        pricePerCentimeter: 0,
      },
    ],
  }),
});
