export interface PizzaState {
  pizzas: Pizza[]
}

export interface Pizza {
  diameter: number
  amount: number
  pricePerPizza: number
  pricePerCentimeter: number
}