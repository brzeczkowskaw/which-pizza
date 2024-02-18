import { defineStore } from "pinia";
import { PizzaState } from "../types";
import axios from "axios";

export const usePizzaStore = defineStore("pizzaStore", {
  state: (): PizzaState => ({
    pizzas: [
      {
        diameter: 30,
        amount: 1,
        pricePerPizza: 10,
        pricePerCentimeter: 0,
        totalArea: 0,
        totalPrice: 0,
      },
      {
        diameter: 50,
        amount: 1,
        pricePerPizza: 10,
        pricePerCentimeter: 0,
        totalArea: 0,
        totalPrice: 0,
      },
    ],
    isComparingPizzas: false,
    isResultShown: false,
    cheaperPizzaIndex: null,
    units: {
      currency: {
        code: "USD",
        country: "United States Dollar",
      },
      measure: "cm",
    },
    currencies: null,
  }),
  actions: {
    clearPizzasData() {
      this.pizzas = [
        {
          diameter: 30,
          amount: 1,
          pricePerPizza: 10,
          pricePerCentimeter: 0,
          totalArea: 0,
          totalPrice: 0,
        },
        {
          diameter: 50,
          amount: 1,
          pricePerPizza: 10,
          pricePerCentimeter: 0,
          totalArea: 0,
          totalPrice: 0,
        },
      ];
      this.isComparingPizzas = false;
      this.isResultShown = false;
      this.cheaperPizzaIndex = null;
    },
    async getCurrencies() {
      try {
        const { data } = await axios.get(
          "https://openexchangerates.org/api/currencies.json"
        );
        const currencyList = data;
        this.currencies = Object.entries(currencyList).map(([key, value]) => {
          return {
            code: key,
            country: value,
          };
        });
      } catch (e: any) {
        console.error(e.message);
      }
    },
  },
});
